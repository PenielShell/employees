<template lang="">
  <modal v-if="shouldShowModal" :showModal="shouldShowModal" @close="closeModal()">
    <div slot="header">
      <p>Create New Employee</p>
    </div>
    <div slot="body">
      <div class="row mb-3">
          <div class="col-12">
              <div class="position-relative">
                <label>Full Name:</label>
                <input v-model="form.fullname" placeholder="Enter fullname here" class="form-control" />
               
              </div>
          </div>
      </div>
      <div class="row mb-3">
          <div class="col-12">
              <div class="position-relative">
                <label>Last Name:</label>
                <input v-model="form.lastname" placeholder="Enter full name" class="form-control" />
               
              </div>
          </div>
      </div>
      <div class="row mb-3">
          <div class="col-12">
              <div class="position-relative">
                <label>Email:</label>
                <input v-model="form.email" placeholder="Enter Email Address" class="form-control" />
               
              </div>
          </div>
      </div>
      <div class="row mb-3">
          <div class="col-12">
              <div class="position-relative">
                <label>Phone Number:</label>
                <input v-model="form.phone" placeholder="Enter Phone Number" class="form-control" />
               
              </div>
          </div>
      </div>
      <div class="row mb-3">
          <div class="col-12">
              <div class="position-relative">
                <label>Role:</label>
                <select v-model.trim="form.role" class="form-control">
                  <!-- <option value="" selected disabled >Choose a Bank</option> -->
                  <option value="" selected>Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
              </select>
               
              </div>
          </div>
      </div>
     
    </div>
    <div slot="footer">
      <button
        type="button"
        @click="clearForm()"
        class="btn btn-white btn-rounded border">
        Clear
      </button>
      
      <button class="btn btn-primary btn-lg btn-rounded" @click="createContact()">
        Save  
      </button>
    </div>
  </modal>
</template>

<script>
function initialState() {
  return {
    shouldShowModal: false,
    delay: 300,
    seen: false,
    // variables for form
    form: {
      fullname: null,
      lastname: null,
      email: null,
      phone: null,
      role: null,
     
    
    },
  };
}


// const debounce = () => import ('@/debounce');
const Modal = () => import ("@/components/Modal.vue");
// import axios from "axios";
// import Nprogress from "nprogress";
import axios from 'axios';
const API_URL = 'https://crudcrud.com/api/f1ce358adf9a4432a65f4c6c89079637';
export default {

  components: {
    Modal,
    // axios
 
  },

// directives: {debounce},

// props:{
//     payload:{
//       type:JSON,
//       required:true
//     }
//   },

  mounted() {

    // open the modal
    this.openModal();

    //this.openModal();
  },

  data(){
    return initialState();
  },


  methods: {
    openModal() {
      // this.shouldShowModal = true;
       this.shouldShowModal = !this.shouldShowModal;
    },
    closeModal(){
      this.shouldShowModal = !this.shouldShowModal;
    },
 getContacts() {
        const url = `${API_URL}/api/contacts/`;
        return axios.get(url).then(response => response.data);
    },
    getContact(pk) {
        const url = `${API_URL}/api/contacts/${pk}`;
        return axios.get(url).then(response => response.data);
    },
    createContact(){

        const url = `${API_URL}`;
        return axios.post(url,this.form);
        // hide the modal
        //this.closeModal();
    },
    deleteContact(contact){
        const url = `${API_URL}/api/contacts/${contact.pk}`;
        return axios.delete(url);
    },
   
    clearForm() {
      // clear the form here
      Object.assign(this.$data, initialState(true));
    }

  }
};
</script>
