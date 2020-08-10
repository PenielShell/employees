<template>
<div>
  
    <div class="app-page-title employ">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <p class="text-head3">Employees</p>
            </div>
            <div class="page-title-actions">
                <button type="button" @click="showModal()" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    Add New
            </button>
            </div>
        </div>
    </div>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <p class="text-head">Josh Bakery Ventures</p>
            </div>
            <div class="page-title-actions">
                <p class="text-head2">62, Bode Thomas, Surulere, Lagos</p>
            </div>
        </div>
    </div>
      <form-modal :payload="payload" v-if="showEmployModal" @close="hideModal"/>
</div>

</template>

<script>
import FormModal from "@/components/FormModal.vue"
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    // import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
    );

    export default {
        components: {
            FormModal
            // 'font-awesome-icon': FontAwesomeIcon,
        },
        props:{
            payload:{
            type:JSON,
            required:true
            }
        },

         data() {
            return {
            showEmployModal: false,
            
            };
        },
        
        methods: {
            hideModal() {
                this.showEmployModal = false;
            },
             showModal() {
                
                    this.showEmployModal = true;
               
            },
        }
    }
</script>
<style scoped>
.app-page-title {
    padding: 30px;
    margin: 30px -0px 30px;
    position: relative;
}
.app-theme-white .app-page-title {
    background: rgb(255 255 255);
}
.text-head{
   

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 15px;
/* or 42% */



color: #013C61;
}
.text-head2{
    


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 15px;
/* or 68% */



color: #013C61;

}
.text-head3{
   font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26px;
line-height: 15px;
/* or 68% */
margin-left: -30px;


color: #013C61; 
}
.btn-success {
background: #2BDA53;
box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
border-radius: 3px;
color: #fff;
padding-right: 30px;
    padding-left: 30px
}
.app-page-title.employ{
    background:none;
}
</style>
