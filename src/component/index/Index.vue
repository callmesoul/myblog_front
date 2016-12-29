<template>
    <div class="main-warp">
        <div class="warp-top">
            <div class="warp-left">
                <div class="logo">
                    <router-link to=""><img src="src/assets/images/logo.png"></router-link>
                </div>
                <div class="nav">
                    <a class="nav-item active">
                        <span class="icon"><i class="iconfont icon-shouye"></i> </span>
                        <span class="cont">
                            <div class="title">首页</div>
                            <div class="en">Home</div>
                        </span>
                    </a>
                    <a class="nav-item ">
                        <span class="icon"><i class="iconfont icon-shouye"></i> </span>
                        <span class="cont">
                            <div class="title">首页</div>
                            <div class="en">Home</div>
                        </span>
                    </a>
                    <a class="nav-item ">
                        <span class="icon"><i class="iconfont icon-shouye"></i> </span>
                        <span class="cont">
                            <div class="title">首页</div>
                            <div class="en">Home</div>
                        </span>
                    </a>
                    <a class="nav-item ">
                        <span class="icon"><i class="iconfont icon-shouye"></i> </span>
                        <span class="cont">
                            <div class="title">首页</div>
                            <div class="en">Home</div>
                        </span>
                    </a>
                </div>
                <div class="social">
                    <el-popover ref="popover2" placement="bottom" trigger="hover">
                        adadad
                    </el-popover>
                    <a class="iconfont icon-weixin" v-popover:popover2></a>
                    <a class="iconfont icon-qq"></a>
                    <a class="iconfont icon-xinlangweibo"></a>
                </div>
            </div>
            <router-view></router-view>


        </div>

        <div class="warp-bottom">

            <!--<audio >-->
                <!--<source src="http://www.w3school.com.cn/i/song.ogg" type="audio/ogg">-->
                <!--<source src="http://www.w3school.com.cn/i/song.mp3" >-->
                <!--Your browser does not support the audio element.-->
            <!--</audio>-->
        </div>


    </div>
</template>
<style>

</style>

