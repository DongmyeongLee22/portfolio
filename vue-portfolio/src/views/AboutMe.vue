<template>
    <div>
        <div class="grey lighten-4">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h1>이 동 명</h1>
                        <div class="my-3 pl-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?
                        </div>
                        <br>
                        <v-row justify="center" class="text-center">
                            <v-col cols="5" sm="4">
                                <v-btn to="/projects" color="cyan" outlined>
                                    <v-icon left>mdi-folder-open</v-icon>
                                    Projects
                                </v-btn>
                            </v-col>
                            <v-col cols="5" sm="4">
                                <v-btn to="/contact" color="pink lighten-1" outlined>
                                    <v-icon left>
                                        mdi-phone-hangup
                                    </v-icon>
                                    Contact
                                </v-btn>
                            </v-col>
                        </v-row>


                    </v-col>
                    <v-col cols="12" md="6" class="my-auto">
                        <v-img
                                src="../images/fullface.png"
                                lazy-src="https://picsum.photos/id/11/10/6"
                                class="grey lighten-2 face mx-auto"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container my-4>
            <h1>What I Do</h1>
            <div class="py-3 px-5 aboutme">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, consectetur dignissimos
                distinctio dolor doloremque esse est et eum expedita explicabo id laudantium molestias mollitia neque
                qui sequi ullam voluptatem. Check My
                <router-link to="/projects" class="red--text">Projects</router-link>
            </div>
        </v-container>
        <v-container>
            <v-row justify="center">
                <v-col cols="10" sm="6" md="4" lg="3" v-for="card in cards" :key="card.title">
                    <v-card class="mx-auto px-2" outlined max-width="27  0">
                        <v-list-item>
                            <v-list-item-content>
                                <v-row>
                                    <v-col cols="3" v-for="skill in card.skills" :key="skill.icon">
                                        <v-icon v-if="skill.color !== undefined" class="mr-3" :color="skill.color"
                                                x-large>
                                            {{skill.icon}}
                                        </v-icon>
                                        <v-img v-else height="40" width="40"
                                               aspect-ratio="1"
                                               v-bind:src="require('../images/cardImg/' + skill.img)"/>
                                    </v-col>
                                </v-row>
                                <h3 class="my-2 font-weight-bold">
                                    {{card.title}}
                                </h3>

                                <v-card-text class="py-1">
                                    {{contents[card.contentNum]}}
                                </v-card-text>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        data() {
            return {
                cards: [
                    {
                        title: "스프링관련", contentNum: 0, skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {img: "spring.svg"},
                            {img: "springboot.jpg"},
                        ]
                    },
                    {
                        title: "뷰관련", contentNum: 1, skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: "웹 기본", contentNum: 2, skills: [
                            {icon: "mdi-language-html5", color: "orange darken-2"},
                            {icon: "mdi-language-css3", color: "blue lighten-2"},
                        ]
                    },
                    {
                        title: "안드로이드관련", contentNum: 3, skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {icon: "mdi-android-studio", color: "#A2C641"},
                            {icon: "mdi-language-php", color: "#7478AE"}
                        ]
                    },
                    {
                        title: "배포 관련", contentNum: 4, skills: [
                            {icon: "mdi-github-circle", color: "black"},
                            {icon: "mdi-aws", color: "orange"},
                            {img: "nginx.png"},
                            {img: "travis.png"},
                        ]
                    },
                    {
                        title: "DB 관련", contentNum: 5, skills: [
                            {img: "mysql.png"},
                            {img: "maria.png"},
                        ]
                    },
                    {
                        title: "학교 수업", contentNum: 6, skills: [
                            {icon: "mdi-language-c", color: "#3746A8"},
                            {icon: "mdi-language-cpp", color: "#6296CC"},
                            {img: "matlab.png"}
                        ]
                    },
                ],
                contents: [
                    // 스프링
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    //뷰
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    //웹 기본
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    // 안드로이드
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    // 배포
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    // DB
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                    // 학교수업
                    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque deleniti doloremque
                            error
                            libero natus omnis porro voluptate? Consectetur delectus enim est ipsam laudantium magni
                            officiis repellat sed temporibus vero?`,

                ]
            }
        }
    }
</script>

<style scoped>
    .face {
        width: 300px;
        height: auto;
    }

    .cardImg {
        width: 40px;
        height: 40px;
    }

    .aboutme {
        border-left: 4px solid #41B883;
    }

</style>