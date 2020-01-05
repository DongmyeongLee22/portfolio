<template>
    <div>
        <div class="container text-center text-white p-5 wow fadeInUp">
            <h1 class="display-1 font-weight-bold mb-3">A-SITE</h1>
            <h3>비콘을 이용한 출석체크 및 어플제한 시스템</h3>
        </div>

        <v-container>
            <div class="p-4">
                <h1 class="mb-4"><span class="text-primary font-weight-bold">About</span></h1>
                <p class="lead">
                    비콘을 이용한 출석 체크 및 어플제한 시스템은 기존에 존재하는 스마트 LMS를 이용한 인증 방법, QR코드, NFC 태킹의 문제점들을 보완할 수 있으며 출석 체크 시
                    소요되는
                    시간을 줄여 온전한 수업 시간을 확보함으로써 더욱 질 높은 수업을 들을 수 있게 하는 시스템입니다. 학생들이 수업 도중 불필요한 휴대폰 사용을 막기 위해 애플리케이션을
                    제한하였고 수업 중 필요한 앱들은 바로 가기로 사용이 가능하게 하였습니다. 출석뿐만 아니라 학과 건의 사항, 헌책 나눔 게시판과 시간표 등록, 수정 그리고 교수용 앱을
                    따로 만들어 강의 별 출석 확인을 가능하게 하였습니다. 안드로이드와 서버 통신은 Volley 라이브러리를 활용하였고 비콘 연동은 Estimote 라이브러리를 활용하였습니다.
                    서버와 데이터베이스 단은 닷홈 웹호스팅을 이용하였고 PHP를 사용하여 안드로이드와의 서버 통신을 구현하였습니다. 팀 프로젝트였으나 개발부분은 전부 혼자 하였고 나머지 보고서,
                    아이디어 도출 및 기타 사항들은 팀원들이 담당하였습니다.
                </p>
            </div>
        </v-container>

        <v-container>
            <div class="row">
                <v-col class="pa-5 text-center ma-auto" cols="12" sm="6">
                    <v-img alt="beacon"
                           class="ma-1"
                           src="../images/asite/beacon.png"/>
                </v-col>
                <v-col class="pa-4" cols="12" sm="6">
                    <h1>What is <span class="orange--text font-weight-bold">Beacon?</span></h1>
                    <br>
                    <p class="lead text-white">
                        무선통신장치로써 블루투스 4.0기반의 프로토콜을 사용해 주변에 있는 기기들에게 자신의 고유 식별 정보를 전달하는 장치입니다. 장점으로는 저전력 무선통신이 가능하여
                        디바이스들의 전력 소모에 대한 걱정을 덜 하면서 사용할 수 있습니다. 또한 기존의 NFC는 10cm 이내에서만 작동이 가능한 반면, 비콘은 이론상 최대 50~100m까지도
                        가능합니다. </p>
                    <hr class="mt-4">
                </v-col>
            </div>
        </v-container>

        <v-container>
            <h1>동작원리 및 순서도</h1>
            <v-row align="center" class="pa-5">
                <v-col cols="12" sm="6">
                    <v-img src="..//images/asite/beaconflow.png" alt="비콘 동작 원리" class="mt-5 elevation-5"/>
                    <v-img src="../images/asite/flow.png" alt="앱 동작원리" class="mt-5 elevation-5"/>
                </v-col>
                <v-col class="mt-5" cols="12" sm="6">
                    <v-img src="../images/asite/structure.png" alt="흐름도" width="394" height="561"
                           class="mx-auto elevation-5"/>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <h1>시연 영상</h1>
            <v-row justify="center">
                <v-col class="mt-5 text-center" cols="12" lg="4" sm="6">
                    <iframe class="mx-auto"
                            height="500" src="https://www.youtube.com/embed/tXAw0tNN0PI" width="300"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                </v-col>
                <v-col class="mt-5 text-center" cols="12" lg="4" sm="6">
                    <iframe class="shadow-xl"
                            height="500" src="https://www.youtube.com/embed/cerwC4v7PWM" width="300"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </v-col>
                <v-col class="mt-5 text-center" cols="12" lg="4" sm="6">
                    <v-carousel :show-arrows="false" class="my-image mx-auto" cycle interval="5000">
                        <v-carousel-item
                                :key="i"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                                v-for="(item,i) in items"
                        >
                            <img :src="require('../images/asite/' + item.img)" alt="작품사진" class="my-image"/>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="award-container">
            <h1>수상</h1>
            <v-row align="center">
                <v-col class="mt-5" cols="6" md="3">
                    <v-img class="mx-auto" src="../images/asite/award1.png" width="230"/>
                </v-col>
                <v-col class="mt-5" cols="6" md="3">
                    <v-img class="mx-auto" src="../images/asite/award2.png" width="230"/>
                </v-col>
                <v-col class="mt-5" cols="12" md="6">
                    <div class="pa-3">
                        <h1>What is <span class="orange--text font-weight-bold">Beacon?</span></h1>
                        <br>
                        <p class="lead text-white">
                            무선통신장치로써 블루투스 4.0기반의 프로토콜을 사용해 주변에 있는 기기들에게 자신의 고유 식별 정보를 전달하는 장치입니다. 장점으로는 저전력 무선통신이 가능하여
                            디바이스들의 전력 소모에 대한 걱정을 덜 하면서 사용할 수 있습니다. 또한 기존의 NFC는 10cm 이내에서만 작동이 가능한 반면, 비콘은 이론상 최대
                            50~100m까지도
                            가능합니다. </p>
                        <hr class="mt-4">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Beacon",
        data() {
            return {
                items: [
                    {
                        img: 'notice.png',
                    },
                    {
                        img: 'bookshare.png',
                    },
                    {
                        img: 'tip.png',
                    },
                    {
                        img: 'lock.png',
                    },
                ],
                awards: [
                    {
                        img: 'award1.png',
                    },
                    {
                        img: 'award2.png',
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .my-image {
        height: auto;
        width: 300px;
    }

</style>