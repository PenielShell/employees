<template lang="">
    <div v-if="showModal">
        <div aria-hidden="true" aria-labelledby="dynamicModal" style="display: block; background: rgba(0,0,0,.3);" v-bind:class="{show: showModal}" class="onboarding-modal modal fade animated pr-0 pr-md-1" id="exampleModal1" role="dialog" tabindex="-1">
            <div :class="'modal-dialog '+'modal-'+size" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="dynamicModal">
                            <slot name="header">
                                <!-- Default Content -->
                                Please wait a moment
                            </slot>
                        </h5>
                        <button @click="closeModal()" @keyup.esc="closeModal()"  aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true" class="icon-feather-x"> <!-- &times; --></span></button>
                    </div>
                    <div class="modal-body pb-0">
                        <slot name="body">
                            <!-- Default content here -->
                            <div class="text-center">
                                <svg aria-label="Loading..." class="By4nA" viewBox="0 0 100 100" style="width:70px">
                                    <rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"></rect>
                                </svg>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-secondary" @click="closeModal()" data-dismiss="modal" type="button"> Close</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "md"
        }
    },
    mounted() {
        if(this.showModal){
            // create an element that serve as backdrop for the modal
            var backdrop = document.createElement('div');
            // add necessary class for the backdrop
            backdrop.className = "modal-backdrop fade show";
            // append it to the body
            document.body.appendChild(backdrop);
        }
        // add 'modal-open' to the class
        document.body.className += " modal-open";
        // add padding right to the body
        // document.body.style.paddingRight = "17px";
    },
    methods: {
        closeModal() {
            this.$emit('close');
            
        }
    },
    beforeDestroy(){
        // remove 'modal-open' class from the body tag
        document.body.className = document.body.className.replace('modal-open','');
        // remove all the styles
        document.body.removeAttribute("style");
        // remove the backdrop
        document.querySelector('.modal-backdrop.fade.show').remove();
    }
}
</script>