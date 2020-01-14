<template>
    <div>
        <!-- SECTION: 자기소개
        ====================================================================== -->
        <div>
            <v-container style="margin-top: 2.5%; margin-bottom: 2.5%; background-color: #f7f7f7">
                <v-row class="pa-3 d-none d-md-flex">
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
                        <div class="picture-top mb-5">
                            <h2 class="my-2">부경대학교 정보통신공학과</h2>
                            <h3>학점: 4.27 / 4.5</h3>
                            <h3 class="my-2">TOEIC: 885</h3>
                        </div>
                        <v-img
                                src="@/images/fullface.png?lazy"
                                class="grey lighten-2 face mx-auto"
                                width="200"
                        />
                    </v-col>
                </v-row>
                <v-row class="pa-3 d-md-none">
                    <v-col class="my-auto text-center" cols="12" md="6">
                        <h1 class="mb-5">이 동 명</h1>
                        <div class="picture-top mb-5">
                            <h2 class="my-2">부경대학교 정보통신공학과</h2>
                            <h3>학점: 4.27 / 4.5</h3>
                            <h3 class="my-2">TOEIC: 885</h3>
                        </div>
                        <v-img
                                class="grey lighten-2 face mx-auto"
                                src="@/images/fullface.png?lazy"
                                width="200"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="my-3 pl-3 about-me" v-html="aboutme">
                        </div>
                        <br>
                        <v-row class="text-center" justify="center">
                            <v-btn color="pink lighten-1" outlined to="/contact">
                                <v-icon left>
                                    mdi-phone-hangup
                                </v-icon>
                                Contact
                            </v-btn>
                        </v-row>
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
                    졸업작품을 준비하면서 안드로이드와 PHP를 이용하여 개발하였고 현재는 Spring, Vue.js를 주로 공부하고 있습니다. <br>
                    자세한 내용이 궁금하시다면
                    <router-link class="red--text font-weight-bold" to="/projects">프로젝트</router-link>
                    페이지에 방문해주세요.
                </div>
            </v-container>
            <v-container>
                <v-row justify="center">
                    <v-col :key="card.title" class="my-about-card" cols="10" md="4" sm="6"
                           v-for="(card, index) in cards">
                        <v-card class="mx-auto" color="#f7f7f7" max-width="270" min-height="400">
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
                                안드로이드 애플리케이션을 제작하여 교내대회 최우수상과 논문 수상을 받은 경험이 있습니다.
                                졸업 작품을 준비하면서 개발을 했던 게 대학 생활을 중 가장 의미 있고 즐거운 경험이어서 개발자가 되기로 했습니다. <br>
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
                                &nbsp; 공부하는 내용을 정리하는
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
                        title: "JAVA, Spring", contentNum: 0, skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {img: "spring.svg"},
                            {img: "springboot.jpg"},
                        ]
                    },
                    {
                        title: "JS, Vue.js", contentNum: 1, skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: "Version Control, Deploy", contentNum: 4, skills: [
                            {icon: "mdi-github-circle", color: "black"},
                            {icon: "mdi-aws", color: "orange"},
                            {img: "nginx.png"},
                            {img: "travis.png"},
                        ]
                    },
                    {
                        title: "JAVA, Android, PHP", contentNum: 3, skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {icon: "mdi-android-studio", color: "#A2C641"},
                            {icon: "mdi-language-php", color: "#7478AE"}
                        ]
                    },

                    {
                        title: "DATABASE", contentNum: 5, skills: [
                            {img: "mysql.png"},
                            {img: "maria.png"},
                        ]
                    },
                    {
                        title: "HTML, CSS", contentNum: 2, skills: [
                            {icon: "mdi-language-html5", color: "orange darken-2"},
                            {icon: "mdi-language-css3", color: "blue lighten-2"},
                        ]
                    },
                    {
                        title: "C, C++, MATLAB", contentNum: 6, skills: [
                            {icon: "mdi-language-c", color: "#3746A8"},
                            {icon: "mdi-language-cpp", color: "#6296CC"},
                            {img: "matlab.png"}
                        ]
                    },
                ],
                contents: [
                    // 스프링
                    ` 가장 관심 있어 하는 프로그래밍 언어와 프레임워크입니다. RESTful API를 구현해보기 위해 Spring HATEOAS와 Spring REST Docs를 이용하여 문서화 작업을 경험해보았습니다.
                     주로 JPA를 사용하여 데이터를 처리하고 있으며 Spring Security를 이용하여 OAuth 권한 서버, 리소스 서버를 구축하여 토큰을 통한 인증을 구현해보았습니다.`,

                    //뷰
                    ` 서버 부분을 주로 공부하였지만, 프로젝트 제작시 스프링 타임리프보단 프론트엔트 프레임워크를 사용해보고 싶어 Vue.js를 기반으로 공부를 하였습니다.
                     현재 포트폴리오 페이지와 프로젝트도 Vue.js로 구현하였습니다. 가장 인지도가 높은 Vuetify, 뷰의 코어 라이브러리인 Vue-Router, Vuex를 사용하였고
                     Axios로 백엔드와 통신한 프로젝트를 구현한 경험이 있습니다.`,

                    // 배포
                    ` Git으로 버전 관리를 하고 있으며 현재 스터디에서 Feature Branch Workflow 방식으로 협업을 하려고 하는 중 입니다.. AWS의 EC2, RDS 등과 Travis CI,
                     Nginx를 통해 무중단 배포를 구현해본 경험이 있습니다. 현재 프로젝트의 서버를 AWS로 구축하였습니다. 배포를 하면서 스크립트 작성에 대한 중요성을 알게되어
                     Linux, Shell Script에 대해 공부를 하고 있습니다.`,

                    // 안드로이드
                    ` 졸업작품을 준비하면서 사용하였습니다. 서버 구축은 웹 호스팅을 이용하였고 서버 단은 PHP를 이용하여 안드로이드와 통신하였습니다. 개발에 대해 잘 몰랐을 때고
                    처음한 프로젝트여서 따로 PHP는 프레임워크를 사용하지 않고 DB와 데이터 처리를 주로 하였고 대부분 안드로이드에서 로직을 구현하였습니다. 프로젝트에 대한 자세한 내용은 프로젝트 페이지를 참고해주세요.`,

                    // DB
                    ` 졸업작품을 준비할 때 MySQL을 사용하였고 현재 제작하는 프로젝트들은 MariaDB를 사용하고 있습니다. JPA를 주로 사용하기 때문에 직접 쿼리를 짤 땐 대부분 JPQL를 사용하고 있습니다.
                     JPA를 사용하더라도 RDB에 대한 지식과 쿼리를 짜는 능력은 필요하다고 생각하여 SQL 책을 통해 틈틈히 공부하고 있습니다.
                    `,

                    //웹 기본
                    ` Vue.js를 사용하기전에 HTML, CSS, Bootstrap을 사용하여 포트폴리오 페이지 및 기본 로그인 및 데모 페이지들을 제작해본 경험이 있습니다.
                    화려하고 디자인이 멋진 페이지를 직접 생각해서 제작할 능력은 되지 않지만 와이어 프레임이 주어진다면 제작할 수 있습니다.`,

                    // 학교수업
                    ` 학교에서 주로 배운 프로그래밍 언어들입니다. 1, 2학년 때 C와 C++를 공부하여 사실 기억이 잘 나지 않습니다. 운영체제를 따로 공부하면서 조금씩 접하였습니다.
                     통신이 주 전공이라 수학과 관련된 문제들이 많아 주로 Matlab을 통해 통신, 신호, 제어와 관련된 문제들을 해결하였습니다. `,

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

    @media (min-width: 960px)  {
        .picture-top{
            margin-bottom: 50px !important;
        }
    }

</style>
