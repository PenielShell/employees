<template>
  <div>
     <div class="content">
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

    <div class="row">
      
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-4">
            <div class="position-relative form-group">
              <select type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled  class="custom-select">
                <option value="">Change Role</option>
                <option>Admin</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
             <button type="button" class="change btn-shadow d-inline-flex align-items-center btn btn-success">
              Change
            </button>
          </div>
          <div class="col-md-4">
            <div class="form-group has-search">
              <font-awesome-icon class="mr-2 form-control-feedback" icon="search"/>
              <input type="text" class="form-control this-search" placeholder="Search">
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-4 pg">
        <b-pagination :total-rows="3" pills  first-text="1 of 2"
      next-text="<"
      last-text=">" v-model="currentPage" :per-page="3">
        </b-pagination>
      </div>
      
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <!--Table-->
        <!-- Task List table -->
          <div class="table-responsive">
              <table id="project-task-list" class="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle">
                  <thead>
                      <tr class="card-header mb-2">
                          <th>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="checkboxsmallall">
                                  <label class="custom-control-label" for="checkboxsmallall"></label>
                              </div>
                          </th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Role</th>
                          <th></th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      <!-- ABC Project -->
                      <tr class="card-header" v-for="contact in contacts" :key="contact.id" >
                          <td>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="checkboxsmallall11">
                                  <label class="custom-control-label" for="checkboxsmallall11"></label>
                              </div>
                              
                          </td>
                          <td>
                              <p class="text-muted">{{contact.firstname}}</p>
                          </td>
                          <td>
                              <p class="text-muted"></p>
                          </td>
                          <td>
                              <p class="text-muted"></p>
                          </td>
                          <td>
                              <p class="text-muted"></p>
                          </td>
                          <td>
                              <p class="text-muted"></p>
                          </td>
                          <td>
                           <a><font-awesome-icon @click="deleteContact()" class="mr-2 form-control-feedback" icon="trash"/></a>
                          </td>
                          
                      </tr>
                  </tbody>
                  
              </table>
          </div>
          <!--/ Task List table -->
        <!--Table-->
        </div>
      </div>
    </div>
     </div>
      <form-modal v-if="showEmployModal" @close="hideModal"/>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = 'https://crudcrud.com/api/f1ce358adf9a4432a65f4c6c89079637'
import FormModal from "@/components/FormModal.vue"
import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faSearch,
        faPlus,
        faTrash
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
       faSearch,
        faPlus,
        faTrash,
    );

  export default {
    components: {
        FormModal,
      'font-awesome-icon': FontAwesomeIcon,
    },
  

    data() {

      return {
      contacts: [],
       showEmployModal: false,
      numberOfContacts:0,
      currentPage: 3,
      
      };

    },
mounted(){
 this.getContacts()
},
    methods: {
      linkGen (pageNum) {
        return '#page/' + pageNum + '/foobar'
      },
      hideModal() {
                this.showEmployModal = false;
            },
             showModal() {
                
                    this.showEmployModal = true;
               
            },
             getContacts() {
        const url = `${API_URL}`;
      this.contacts = axios.get(url).then(response => response.data);
    },
      
    },
    
  }
</script>
<style>
.app-header {
    height: 60px;
    display: flex;
    align-items: center;
    align-content: center;
    z-index: 0;
    transition: all .2s;
    position: fixed;
    width: 100%;
}
.app-sidebar {
    display: flex;
    z-index: 0;
    overflow: hidden;
    width: 280px;
    position: fixed;
    height: 100vh;
    box-shadow: none;
    flex-direction: column;
    transition: all .3s ease;
    padding: 60px 0 0;
}
.modal-backdrop {
    position: unset;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
}

.mdl-checkbox__ripple-container .mdl-ripple {
    background: #2BDA53;
}
.btn-success {
background: #2BDA53;
margin-left: 10px;
border-radius: 3px;
color: #fff;
padding-right: 30px;
    padding-left: 30px
}
.has-search .form-control {
    padding-left: 2.375rem;
}
.mdl-data-table {
  margin:0 auto;
}
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
        margin-left: 160px;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.form-control.this-search{
      width: 280px;
    margin-left: -90px;
        padding-left: 10px;

}
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
@media (min-width: 360px) and (max-width: 640px) {
.text-head{
   

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 35px;
    margin-bottom: 40px;

color: #013C61;
}
.text-head2{
    


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 35px;
/* or 68% */



color: #013C61;

}
.change{
      margin-left: 110px;
}
.form-control.this-search{
     width: 280px;
    margin-top: 10px;
    margin-left: 30px;
    padding-left: 10px;

}
.pg{
      margin-left: 70px;
}
.text-head3{
      margin-right: -40px;
    margin-bottom: 30px;
}
}
</style>