<template>
    <div class="project-container mx-5 my-5">
        <v-row>
            <v-col cols="12" md="6" v-for="project in projects" :key="project.title" class="my-5">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                            max-width="600"
                            class="mx-auto"
                            :elevation="hover ? 12 : 2"
                            :to="project.router"
                    >
                        <v-row>
                            <v-col cols="12" lg="5" class="py-0 pa-lg-0">
                                <v-img
                                        class="fill-height"
                                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                </v-img>
                            </v-col>
                            <v-col cols="12" lg="7" class="pa-1">
                                <v-card-title>{{project.title}}</v-card-title>
                                <v-card-text class="text--primary">
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
                                        consectetur consequuntur dolore facere fuga harum hic impedit iusto libero
                                        mollitia nesciunt nobis obcaecati odit pariatur quos, similique soluta, tenetur.
                                    </div>
                                    <br>
                                    <div class="text-center">
                                        <div v-for="skill in project.skills" :key=skill.icon class="d-inline">
                                            <v-icon :color="skill.color" class="mx-2" x-large>{{skill.icon}}</v-icon>
                                        </div>
                                    </div>
                                </v-card-text>

                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projects: [
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: '', router:'',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: '', router:'',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: '', router:'/capstone',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },


                ]
            }
        }
    }
</script>

<style scoped>
</style>