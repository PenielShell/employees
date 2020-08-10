<template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <!-- <div class="logo-src"/> -->
             <img width="120" height="53" src="@/assets/logo2.png" alt="">
            <!-- <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div> -->
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu class="menu-bar" style='color: #013C61;' showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        icon: 'pe-7s-keypad',
                    },
                    {
                        icon: 'pe-7s-users',
                        href: '/',
                    },
                    {
                        icon: 'pe-7s-folder',
                    },
                   
                   
                ],
                collapsed: true,

                windowWidth: 10,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
<style lang="css">
.app-sidebar .app-sidebar-content {
    flex-grow: 1;
    display: flex;
    width: 30%;
    height: 100%;
}
.app-main__outer {
    flex: 1;
    flex-direction: column;
    display: flex;
    z-index: 8;
    padding: 60px 0 0 116px;
    transition: all .2s;
}
.app-sidebar {
    display: flex;
    z-index: 20;
    overflow: hidden;
    width: 280px;
    position: fixed;
    height: 100vh;
    box-shadow: none;
    flex-direction: column;
    transition: all .3s ease;
    padding: 60px 0 0;
}
.vsm--item{
    padding: 10px;
    font-size: 30px;  
    margin-top: 40px;

}
</style>