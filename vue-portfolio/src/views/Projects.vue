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
                                color="#fafafa"
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

                                    <div class="text-center mt-2">
                                        <div :key=skill.icon class="d-inline" v-for="skill in project.skills">
                                            <v-icon :color="skill.color" class="mx-2" x-large>{{skill.icon}}</v-icon>
                                        </div>
                                    </div>

                                    <v-card-title>{{project.title}}</v-card-title>
                                    <v-card-text>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                            aspernatur
                                            consectetur consequuntur dolore facere fuga harum hic impedit iusto libero
                                            mollitia nesciunt nobis obcaecati odit pariatur quos, similique soluta,
                                            tenetur.
                                        </div>
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
                        content: 'qwdddddddddddddddqwdqwdqwd',
                        picture: 'project1.png',
                        router: '',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ],
                        btns: [
                            {
                                text: 'DEMO', icon: 'mdi-earth', color: 'blue',
                                href: 'http://ec2-15-164-143-254.ap-northeast-2.compute.amazonaws.com'
                            },
                            {
                                text: 'GITHUB', icon: 'mdi-github-circle', color: 'green',
                                href: 'https://github.com/DongmyeongLee22/msa-study'
                            },
                        ]
                    },
                    {
                        title: 'REST API 명세',
                        content: 'qwdddddddddddddddqwdqwdqwd',
                        picture: 'project2.png',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ],
                        btns: [
                            {
                                text: 'DEMO', icon: 'mdi-earth', color: 'blue',
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
                        content: 'qwdddddddddddddddqwdqwdqwd',
                        picture: 'project3.jpg',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ],
                        btns: [
                            {text: '상세설명', icon: 'mdi-page-next-outline', color: 'orange', router: '/beacon'},
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