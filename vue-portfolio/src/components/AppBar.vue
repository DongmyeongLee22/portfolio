<template>

    <nav>
        <!-- SECTION: 상단 AppBar
        ====================================================================== -->
        <v-app-bar app color="#f7f7f7" flat>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-spacer/>
            <v-toolbar-title class="text-uppercase grey--text text--darken-1 font-weight-bold toolbar-title">
                <h2>{{this.$route.name}}</h2>
            </v-toolbar-title>
            <v-spacer/>

            <!-- 오른쪽 상단 Menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                        mdi-apps
                    </v-icon>
                </template>
                <v-list>
                    <div :key="link.text" v-for="link in links">
                        <v-list-item :to="link.route" v-if="link.route != null">
                            <v-list-item-title>{{link.text}}</v-list-item-title>
                        </v-list-item>
                        <v-list-item :href="link.href" target="_blank" v-else>
                            <v-list-item-title>{{link.text}}</v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-menu>
        </v-app-bar>
        <!-- SECTION: 상단 AppBar -->


        <!-- SECTION: 옆쪽 Drawer
        ====================================================================== -->
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
        <!-- SECTION: 옆쪽 Drawer -->
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
                    {icon: 'mdi-folder-multiple', text: 'Projects', route: '/projects'},
                    {icon: 'mdi-phone', text: 'Contact', route: '/contact'},
                    {icon: 'mdi-github-circle', text: 'GitHub', href: 'https://github.com/DongmyeongLee22'},
                    {icon: 'mdi-blogger', text: 'Blog', href: 'https://sun-22.tistory.com/'},
                ],
            }
        }
    }
</script>

<style scoped>
    .my-hr {
        border: solid 1px white;
    }

    .toolbar-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

    }
</style>