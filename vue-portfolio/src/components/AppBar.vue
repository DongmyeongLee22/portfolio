<template>
    <nav>
        <v-app-bar flat app>
                <v-icon v-if="drawer === false" @click="drawer = true">
                    mdi-menu-right-outline
                </v-icon>
                <v-icon v-else @click="drawer = false">
                    mdi-menu-left-outline
                </v-icon>
            <v-spacer/>
            <v-toolbar-title class="text-uppercase grey--text font-weight-bold toolbar-title">
                <h2>{{this.$route.name}}</h2>
            </v-toolbar-title>
            <v-spacer/>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="cyan lighten-2">
            <v-col class="mt-5 text-center">
                <v-avatar size="150">
                    <img src="../images/face.png" alt="avatar"/>
                </v-avatar>
                <h2 class="white--text my-3">
                    이 동 명
                </h2>
                <span class="white--text">백엔드 개발자를 희망하는 신입 개발자 이동명입니다.</span>
            </v-col>
            <hr class="ma-3 white my-hr"/>
            <v-list>
                <div v-for="link in links" :key="link.text">
                    <v-list-item v-if="link.route != null" router :to="link.route" class="cyan lighten-2">
                        <v-list-item-action>
                            <v-icon color="white">{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content class="white--text">
                            {{link.text}}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-else :href="link.href" target="_blank" class="cyan lighten-2">
                        <v-list-item-action>
                            <v-icon color="white">{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content class="white--text">
                            {{link.text}}
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "AppBar",
        data() {
            return {
                drawer: true,
                links: [
                    {icon: 'mdi-account', text: 'AboutMe', route: '/'},
                    {icon: 'mdi-folder-multiple', text: 'My Projects', route: '/projects'},
                    {icon: 'mdi-phone', text: 'Contact', route: '/contact'},
                    {icon: 'mdi-github-circle', text: 'GitHub', href: 'https://github.com/DongmyeongLee22'},
                    {icon: 'mdi-blogger', text: 'Blog', href: 'https://sun-22.tistory.com/'},
                ],
            }
        }
    }
</script>

<style scoped>
    .my-hr{
        border: solid 1px white;
    }

    .toolbar-title{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

    }
</style>