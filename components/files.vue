<template>
    <div id="file-manager-files">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Filter" v-model="search">
        </div>
        <paginate name="filtered" :list="filtered" :per="10" tag="div">
            <file :file="file" v-for="file in paginated('filtered')"></file>
        </paginate>
        <div class="text-center list-group">
            <paginate-links for="filtered" :show-step-links="true" :classes="{'ul': 'pagination'}"></paginate-links>
        </div>
    </div>
</template>

<script>
    import events from '../bus'
    import file from './file.vue'

    export default {
        components: {file},
        props: {
            files: {
                type: Array,
                default: []
            },
            limit: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                search: '',
                paginate: ['filtered']
            }
        },
        computed: {
            filtered() {
                if (!this.search) return this.files;
                return this.files.filter((file) => {
                    return ((file.location.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
                        || (file.mime.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
                        || (file.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1))
                })
            }
        }
    }
</script>