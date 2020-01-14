<template>

    <!-- SECTION: 프로젝트
    ====================================================================== -->
    <div class="white fill-height">

        <v-container class="my-auto fill-height">
            <v-row>
                <v-col :key="project.title" class="mt-5" cols="12" lg="4" md="6" style="padding: 2rem"
                       v-for="project in projects">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                                :elevation="hover ? 12 : 2"
                                :to="project.router"
                                class="mx-auto"
                                color="#f7f7f7"
                                max-width="400"
                        >
                            <v-row>
                                <v-col class="py-0" cols="12">
                                    <v-img
                                            :src="require(`../images/project/` + project.picture)"
                                            class="fill-height">
                                    </v-img>
                                </v-col>
                                <v-col class="pa-1" cols="12">

                                    <v-row class="mt-2 mx-3" justify="center">
                                        <v-col :key=index class="d-inline" cols="3"
                                               v-for="(skill, index) in project.skills">
                                            <v-icon :color="skill.color" v-if="skill.icon !== undefined" x-large>
                                                {{skill.icon}}
                                            </v-icon>
                                            <v-img :src="require('../images/skills/' + skill.img)" height="40" v-else
                                                   width="40"/>
                                        </v-col>
                                    </v-row>

                                    <v-card-title class="ml-3 font-weight-bold">
                                        {{project.title}}
                                    </v-card-title>
                                    <v-card-text>
                                        <v-expansion-panels flat hover>
                                            <v-expansion-panel style="background-color: #f7f7f7">
                                                <v-expansion-panel-header class="indigo--text font-weight-bold">
                                                    자세히
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>{{project.content}}
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="mx-auto">
                                            <div :key="btn.text"
                                                 class="d-inline-block mx-3" v-for="btn in project.btns">

                                                <v-btn :color="btn.color"
                                                       :to="btn.router"
                                                       class="my-btn"
                                                       outlined
                                                       v-if="btn.router !== undefined">
                                                    <v-icon left>{{btn.icon}}</v-icon>
                                                    {{btn.text}}
                                                </v-btn>
                                                <v-btn :color="btn.color"
                                                       :href="btn.href"
                                                       class="my-btn"
                                                       outlined
                                                       target="_blank"
                                                       v-else>
                                                    <v-icon left>{{btn.icon}}</v-icon>
                                                    {{btn.text}}
                                                </v-btn>
                                                <v-spacer/>
                                            </div>
                                        </div>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <!-- SECTION: 프로젝트-->

</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projects: [
                    {
                        title: 'MSA 프로젝트',
                        content: '각자 프로젝트를 제작하는 온라인 스터디를 통해 제작하고 있는 프로젝트입니다. Spring Security OAuth2를 이용하여 권한 서버, 리소스 서버를 구축하였고' +
                            'JWT 토큰을 통해 인증을 구현하였습니다. 현재 AWS에 서버가 구축되어 있으며 클라이언트와 서버를 구분하기 위해 클라이언트는 Netlify에 배포되어 있습니다.' +
                            ' Git Push만으로 무중단 배포가 가능하도록 구현하였습니다. 조금씩 발전해나가면서 블로그로 만들 생각입니다. 현재는 게시판을 구현하여 Toast UI Editor를 통해 제가 공부한 게시글을 올리고 있습니다.' +
                            ' 댓글은 계층형으로 구현하였으며 JPA를 사용하여 재귀적으로 구현해 댓글 개수와는 상관없이 댓글 계층당 한번의 쿼리가 날라가도록 구현해보았습니다. 그밖에 검색, 정렬등 기본적인 게시판 기능을 구현하였습니다. ',
                        picture: 'project1.png',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-language-java", color: "red"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                            {img: "springboot.jpg"},
                            {img: "springdata.png"},
                            {img: "security.png"},
                            {img: "gradle.png"},
                        ],
                        btns: [
                            {
                                text: 'DEMO', icon: 'mdi-earth', color: 'blue',
                                href: 'https://naughty-murdock-133815.netlify.com/'
                            },
                            {
                                text: 'GITHUB', icon: 'mdi-github-circle', color: 'green',
                                href: 'https://github.com/DongmyeongLee22/msa-study'
                            },
                        ]
                    },
                    {
                        title: 'RESTful API 개발',
                        content: `REST에 대한 이해와 REST의 구현 원칙을 지켜 RESTful API를 설계해본 프로젝트입니다.
                                  Spring HATEOAS를 통해 HATEOAS를 만족하게 했고 Spring REST Docs를 통해 문서화 작업을
                                  수행하였습니다. 문서화는 테스트 코드 작성을 통해 이루어지므로 완전한 TDD를 하진 않았지만
                                   단위 테스트를 통해 테스트에 대한 중요성을 깨달았습니다. Mock 객체를 통해 Web
                                   통신을 통해 HTTP 요청, 응답을 문서화하였습니다. 그 밖에 스프링 시큐리티 적용과 JPA와 QueryDsl
                                   을 이용하여 간단한 동적 쿼리를 작성해보았습니다.`,
                        picture: 'project2.png',
                        skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {img: "spring.svg"},
                            {img: "springboot.jpg"},
                            {img: "springdata.png"},
                            {img: "security.png"},
                            {img: "restdocs.png"},
                            {img: "querydsl.png"},
                            {img: "gradle.png"},
                        ],
                        btns: [
                            {
                                text: 'API 문서', icon: 'mdi-earth', color: 'blue',
                                href: 'https://dongmyeonglee22.github.io/Asite-Server/'
                            },
                            {
                                text: 'GITHUB', icon: 'mdi-github-circle', color: 'green',
                                href: 'https://github.com/DongmyeongLee22/Asite-Server'
                            },
                        ]
                    },
                    {
                        title: '비콘을 이용한 스마트 출석',
                        content: `졸업작품을 준비하면서 제작한 작품입니다.
                         이 작품을 통해 교내대회 최우수상과 논문상을 받았습니다.
                        자세한 내용은 상세페이지를 클릭하시면 됩니다.`,
                        picture: 'project3.jpg',
                        skills: [
                            {icon: "mdi-language-java", color: "red"},
                            {icon: "mdi-language-php", color: "#7478AE"},
                            {icon: "mdi-android-studio", color: "#A2C641"},
                            {img: "mysql.png"},
                            {img: "gradle.png"},
                            {img: "beacon.png"},

                        ],
                        btns: [
                            {text: '상세페이지', icon: 'mdi-page-next-outline', color: 'orange', router: '/beacon'},
                        ]
                    },

                ]
            }
        }
    }
</script>

<style scoped>
    .project-row {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }


    .my-btn {
        transition: all 0.9s !important;
    }

    .my-btn:hover {
        box-shadow: 200px 0 0 0 rosybrown inset, -200px 0 0 0 rosybrown inset !important;

    }
</style>