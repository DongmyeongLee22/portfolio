<template>
    <v-container class="my-auto fill-height">
        <v-row>
            <v-col :key="project.title" class="mt-5" cols="12" md="6" style="padding: 2rem" v-for="project in projects">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                            :elevation="hover ? 12 : 2"
                            :to="project.router"
                            class="mx-auto"
                            max-width="600"
                    >
                        <v-row>
                            <v-col class="py-0 pa-lg-0" cols="12" lg="5">
                                <v-img
                                        :src="require(`../images/project/` + project.picture)"
                                        class="fill-height">
                                </v-img>
                            </v-col>
                            <v-col class="pa-1" cols="12" lg="7">
                                <v-card-title>{{project.title}}</v-card-title>
                                <v-card-text class="text--primary">
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
                                        consectetur consequuntur dolore facere fuga harum hic impedit iusto libero
                                        mollitia nesciunt nobis obcaecati odit pariatur quos, similique soluta, tenetur.
                                    </div>
                                    <br>
                                    <div class="text-center">
                                        <div :key=skill.icon class="d-inline" v-for="skill in project.skills">
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
    </v-container>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projects: [
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: 'project3.jpg', router: '',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: 'project3.jpg', router: '',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: '프로젝트 제목',
                        content: 'qwdddddddddddddddqwdqwdqwd',
                        picture: 'project3.jpg',
                        router: '/beacon',
                        skills: [
                            {icon: "mdi-language-javascript", color: "yellow"},
                            {icon: "mdi-vuejs", color: "#41B883"},
                            {icon: "mdi-vuetify", color: "#78C1F8"},
                        ]
                    },
                    {
                        title: '프로젝트 제목', content: 'qwdddddddddddddddqwdqwdqwd', picture: 'project3.jpg', router: '/',
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
    .project-row {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }


</style>