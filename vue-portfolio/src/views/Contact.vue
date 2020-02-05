<template>
    <div class="fill-height white">
        <v-container class="fill-height my-auto">
            <v-row class="my-containner mx-3">
                <v-col class="px-5 text-center" cols="12" md="6">
                    <div class="contact-card elevation-5">
                        <v-card
                                class="pa-3 indigo accent-2"
                        >
                            <v-icon color="white" size="60">mdi-phone</v-icon>
                            <hr class="contact-hr">
                            <a class="card-href" href="tel:010-8276-1258">
                                <h2 class="white--text">010-8276-1258</h2>
                            </a>
                        </v-card>
                    </div>

                    <div class="contact-card elevation-5">
                        <v-card
                                class="pa-3 indigo accent-2"
                        >
                            <v-icon color="white" size="60">mdi-email</v-icon>
                            <hr class="contact-hr"/>
                            <a class="card-href" href="mailto:dongmyeong.lee22@gmail.com">
                                <h2 class="white--text">dongmyeong.lee22
                                    @gmail.com</h2>
                            </a>
                        </v-card>
                    </div>
                </v-col>
                <v-col class="px-5 my-auto" cols="12" md="6">
                    <div class="email-form">
                        <v-form
                                @submit.prevent="sendEmail"
                                method="POST"
                                novalidate
                                ref="form"
                        >
                            <h1 class="mb-3">Send <span style=" color: #41B883">Email</span></h1>
                            <v-text-field
                                    :rules="emailRules"
                                    class="mb-3"
                                    label="Email"
                                    v-model="email"
                                    name="user_email"
                                    type="text"
                            ></v-text-field>
                            <v-textarea
                                    :rules="contentRules"
                                    auto-grow
                                    label="Your message"
                                    v-model="message"
                                    name="message"
                                    row-height="35"
                                    solo

                            >
                            </v-textarea>

                            <v-btn :loading="loading"
                                   class="white--text"
                                   color="#41B883"
                                   type="submit">
                                <v-icon left>mdi-email</v-icon>
                                Send
                            </v-btn>
                        </v-form>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <div class="text-center ma-2">
            <v-snackbar
                    v-model="snackbar"
                    top
                    :color="color"
            >
                {{ text }}
                <v-btn
                        color="white"
                        text
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
    import emailjs from 'emailjs-com'

    export default {
        data() {
            return {
                message: '',
                contentRules: [
                    v => !!v || '내용을 입력해주세요!',
                ],
                text: '',
                snackbar: false,
                email: '',
                color: '',
                emailRules: [
                    v => !!v || '이메일을 입력해주세요',
                    v => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요',
                ],
                loading: false,
            }
        },
        methods: {
            sendEmail(){
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    const emailInfo = {email: this.email, message: this.message};
                    emailjs.send('gmail', 'template_R5NrHmJt', emailInfo, 'user_3BLyEswN6xaEb6K5eJxwj')
                        .then(() => {
                            this.setSnackbar('info', '이메일이 전송되었습니다.');
                            this.message = '';
                            this.email = '';
                            this.loading = false;
                            this.$refs.form.resetValidation();
                        }, () => {
                            this.setSnackbar('error', '전송실패. 다시한번 더 시도해주세요.');
                        });
                }
            },
            setSnackbar(color, text){
                this.text = text;
                this.color = color;
                this.snackbar = true;
            }
        },
        created() {
            this.loading = false;
        }
    }

</script>

<style scoped>
    .email-form {
        max-width: 450px;
        margin: 0 auto;
        text-align: center;
    }

    .contact-card {
        max-width: 350px;
        margin: 40px auto;
    }

    .contact-hr {
        margin: 20px 50px;
        display: block;
        border: black 0 none;
        border-top: 2px white solid;
        height: 2px;
    }

    .card-href:hover {
        text-decoration: underline white;
    }

    .my-containner {
        background-color: #f7f7f7;
        border: 1px solid rgba(0, 0, 0, 0.025)
    }
</style>