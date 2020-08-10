<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                       
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                    <img width="42" class="rounded-circle" src="@/assets/av.png" alt="">
                                </div>
                           
                    </div>
                    <div class="widget-content-left  ml-3 header-user-info">
                        <div class="row">
                            <div class="col-4">
                                <span> <div class="widget-heading">Hi,Joshua</div></span>
                            </div>
                            <div class="col-4">
                                <b-dropdown toggle-class="" menu-class="dropdown-menu-lg" variant="link" right>
                                        <router-link tabindex="0" to="/"  class="dropdown-item"> Logout </router-link>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    } from '@fortawesome/free-solid-svg-icons'
    // import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    );

    export default {
        components: {
            // 'font-awesome-icon': FontAwesomeIcon,
        },
        data: () => ({

        }),

        methods: {}
    }


</script>
