<template>
    <div>
        <!-- SECTION: 자기소개
        ====================================================================== -->
        <div class="about">
            <v-container>
                <v-row class="pa-3">
                    <v-col cols="12" md="6">
                        <h1>이 동 명</h1>
                        <div class="my-3 pl-3 about-me" v-html="aboutme">
                        </div>
                        <br>
                        <v-row justify="center" class="text-center">
                            <v-btn color="pink lighten-1" outlined to="/contact">
                                <v-icon left>
                                    mdi-phone-hangup
                                </v-icon>
                                Contact
                            </v-btn>
                        </v-row>
                    </v-col>
                    <v-col class="my-auto text-center" cols="12" md="6">
                        <div class="mb-5">
                            <h2>부경대학교 정보통신공학과</h2>
                            <h3>GPA: 4.26 / 4.5</h3>
                            <h3>TOEIC: 885</h3>
                        </div>
                        <v-img
                                src="../images/fullface.png"
                                lazy-src="https://picsum.photos/id/11/10/6"
                                class="grey lighten-2 face mx-auto"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- SECTION: 자기소개 -->

        <!-- SECTION: Skills
        ====================================================================== -->
        <div class="white">
            <v-container my-4>
                <h1 class="mb-3">What I Do</h1>
                <div class="py-3 px-5 left-line">
                    졸업작품을 준비하면서 안드로이드와 php를 이용하여 개발을 하였지만 현재는 Spring, Vue.js를 주로 공부하고 있습니다. <br>
                    자세한 내용이 궁금하시다면
                    <router-link class="red--text font-weight-bold" to="/projects">프로젝트</router-link>
                    페이지에 방문해주세요.
                </div>
            </v-container>
            <v-container>
                <v-row justify="center">
                    <v-col :key="card.title" cols="10" lg="3" md="4" sm="6" v-for="(card, index) in cards">
                        <v-card class="mx-auto px-2" color="#f7f7f7" max-width="270">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-row>
                                        <v-col :key="skill.icon" cols="3" v-for="skill in card.skills">
                                            <v-icon :color="skill.color" class="mr-3" v-if="skill.color !== undefined"
                                                    x-large>
                                                {{skill.icon}}
                                            </v-icon>
                                            <v-img aspect-ratio="1" height="40"
                                                   v-bind:src="require('../images/skills/' + skill.img)"
                                                   v-else
                                                   width="40"/>
                                        </v-col>
                                    </v-row>
                                    <h3 class="my-2 font-weight-bold">
                                        {{card.title}}
                                    </h3>

                                    <v-card-text class="py-1">
                                        {{contents[index]}}
                                    </v-card-text>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- SECTION: Skills -->
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        data() {
            return {
                aboutme: ` <p>
                                &nbsp; 저는 서버와 통신에 관심이 많아 서버 백엔드 개발자가 되기 위해 공부를 하고 있습니다. 졸업 작품을 통해 PHP 기반의 웹호스팅과
                                안드로이드 애플리케이션을 제작하여
                                교내대회 최우수상과 논문 수상을 받은 경험이 있습니다.
                                졸업 작품을 준비하면서 개발을 했던게 대학 생활을 중 가장 의미 있고 즐거운 경험이여서 개발자가 되기로 했습니다. <br>
                                &nbsp; 전공과목에서 배운 통신과 관련된 기반 지식과 졸업작품을 준비하면서 경험한 데이터베이스 관리 및 서버 구축을 경험 삼아 자바 언어 기반인
                                Spring Framework를 공부하고 있습니다.
                                Spring의 기반이 되는 Core를 비롯하여 Spring Web MVC, Spring Security, Spring Data JPA등 스프링의 다양한
                                기술들을
                                적용하여 작은 프로젝트들을 만들어보며 기술들을 사용해보고 있습니다. <br>
                                &nbsp; JPA 통해 관계형 데이터베이스를 관리하고 있습니다. 연관 관계 설정 시 지연 로딩 설정에 대한 중요성을 알고 있으며 패치 조인이나 배치 쿼리를 이용하여
                                N+1문제를 해결하는 방법도 공부하였습니다.
                                비록 수많은 데이터를 관리해보지는 않았지만 어떤 식으로 쿼리를 짜고 어떤 식으로 테이블을 설계해야 트래픽이 많은 환경에서도 효율적인 작업이 이루어질 수
                                있는지에 대해
                                알아보기 위해 노력을 하고 있습니다. <br>
                                &nbsp; 공부하는 내용들을 정리하는
                                <a target="_blank" class="font-weight-bold red--text text--darken-2" href="https://sun-22.tistory.com/">
                                블로그</a>를 운영하고 있으며
                                <a class="indigo--text font-weight-bold" target="_blank" href="https://github.com/DongmyeongLee22">
                                GitHub</a> 을 통해 버전관리를 하고있습니다.
                                <!--                            아마존 웹 서비스를 이용해 EC2 서버와 RDS를 통해 MariaDB를 구축하였습니다. 그리고 Travis CI와 AWS-->
                                <!--                            Code Deploy, S3를 이용해 원격저장소에 PUSH만 하여도 자동으로 배포할 수 있게 하고 Nginx를 통해 무중단 배포를 가능하게 해본 경험이 있습니다.-->
                                <!--                            REST API 개발을 통해 REST DOCS를 통한 문서화 작업을 해보았고 클라이언트와 서버 간의 독립적인 개발이 가능하고 진정한 REST API 통신이 요구하는-->
                                <!--                            HATEOAS와 Self-Describe Messages에 대해 이해하고 있습니다. 스프링 시큐리티를 이용하여 직접 Oauth 2.0 인증 서버, 리소스 서버를-->
                                <!--                            설정하여 Token 인증을 구현해보았으며 현재는 구글, 네이버의 Oauth 2.0 서비스를 이용하여 로그인 연동하는 자그마한 프로젝트를 개발 중입니다. 그리고-->
                                <!--                            백엔드만이 아닌 다양한 플랫폼을 경험해보고자 웹팩을 이용해 모듈 번들링을 통해 현재 이 페이지를 제작하였고 부트스트랩을 통해 테마를 사용하지 않고 직접 만들었습니다.-->
                                <!--                            그리고 꾸준히 깃헙, Blog에 공부한 내용들을 정리하고 있습니다. 링크 주소는 사이트 하단에 있습니다.-->
                            </p>`,
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

    .left-line {
        border-left: 4px solid #41B883;
    }

    .about {
        background-color: #f7f7f7;
    }

</style>