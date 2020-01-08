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
                                @submit="checkValidate"
                                action="https://formspree.io/xlegqwrg"
                                method="POST"
                                novalidate
                                ref="form"
                        >
                            <h1 class="mb-3">Send <span style=" color: #41B883">Email</span></h1>
                            <v-text-field
                                    :rules="emailRules"
                                    class="mb-3"
                                    label="Email"
                                    name="_replyto"
                                    type="text"
                            ></v-text-field>
                            <v-textarea
                                    :rules="contentRules"
                                    auto-grow
                                    label="Your message"
                                    name="message"
                                    row-height="35"
                                    solo

                            >
                            </v-textarea>

                            <!-- your other form fields go here -->

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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                contentRules: [
                    v => !!v || '내용을 입력해주세요!',
                ],
                email: '',
                emailRules: [
                    v => !!v || '이메일을 입력해주세요',
                    v => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요',
                ],
                loading: false,
            }
        },
        methods: {
            checkValidate(e) {
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    return this.$refs.form.validate();
                }
                e.preventDefault();
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