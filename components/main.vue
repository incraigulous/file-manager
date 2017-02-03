<template>
    <div id="file-manager">
        <modal :active="active" ref="modal">
            <uploader></uploader>
            <hr />
            <files v-if="files && files.length" :files="files"></files>
        </modal>
    </div>
</template>

<script>
    import events from '../bus'
    import modal from './modal.vue'
    import uploader from './uploader.vue'
    import files from './files.vue'

    export default {
        components: {modal, uploader, files},
        props: ['files'],
        data() {
            return {
                active: false
            }
        },
        created()  {
            events.$on('manager:show', this.show.bind(this))
            events.$on('manager:hide', this.hide.bind(this))
            events.$on('manager:toggle', this.toggle.bind(this))
        },
        mounted() {
            this.$refs.modal.$on('modal:close', this.hide.bind(this))
        },
        methods: {
            show() {
                this.active = true;
                events.$emit('manager:shown', this)
            },
            hide() {
                this.active = false;
                events.$emit('manager:hidden', this)
            },
            toggle() {
                if (this.active) {
                    this.hide()
                } else {
                    this.show()
                }
            }
        }
    }
</script>