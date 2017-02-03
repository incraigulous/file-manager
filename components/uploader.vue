<template>
    <div id="uploader">
        <div ref="uploader"></div>
        <script type="text/template" id="qq-template">
            <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
                <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container progress">
                    <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="progress-bar qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
                </div>
                <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
                    <span class="qq-upload-drop-area-text-selector"></span>
                </div>
                <div class="qq-upload-button-selector qq-upload-button btn btn-default">
                    Upload a file
                </div>
                <span class="qq-drop-processing-selector qq-drop-processing">
                <span>Processing dropped files...</span>
                <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner">
                    Processing
                </span>
            </span>
                <ul class="qq-upload-list-selector qq-upload-list list-group" role="region" aria-live="polite" aria-relevant="additions removals">
                    <li class="list-group-item island">
                        <p role="status" class="qq-upload-status-text-selector qq-upload-status-text"></p>
                        <div class="qq-progress-bar-container-selector qq-progress-bar-container">
                            <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
                        </div>
                        <span class="qq-upload-spinner-selector qq-upload-spinner">
                            Loading
                        </span>
                        <div class="qq-thumbnail-wrapper">
                            <img class="qq-thumbnail-selector" qq-max-size="240" qq-server-scale>
                        </div>
                        <div class="btn-group island">
                            <button type="button" class="qq-upload-cancel-selector qq-upload-cancel btn btn-default">X</button>
                            <button type="button" class="qq-upload-retry-selector qq-upload-retry btn btn-default">
                                <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
                                Retry
                            </button>
                        </div>

                        <div class="qq-file-info">
                            <div class="qq-file-name">
                                <span class="qq-upload-file-selector qq-upload-file"></span>
                                <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>
                            </div>
                            <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">
                            <span class="qq-upload-size-selector qq-upload-size"></span>
                            <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete btn btn-danger">
                                <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
                            </button>
                            <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause btn btn-warning">
                                <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
                            </button>
                            <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue btn btn-success">
                                <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
                            </button>
                        </div>
                    </li>
                </ul>

                <dialog class="qq-alert-dialog-selector">
                    <div class="qq-dialog-message-selector"></div>
                    <div class="qq-dialog-buttons">
                        <button type="button" class="qq-cancel-button-selector">Close</button>
                    </div>
                </dialog>

                <dialog class="qq-confirm-dialog-selector">
                    <div class="qq-dialog-message-selector"></div>
                    <div class="qq-dialog-buttons">
                        <button type="button" class="qq-cancel-button-selector">No</button>
                        <button type="button" class="qq-ok-button-selector">Yes</button>
                    </div>
                </dialog>

                <dialog class="qq-prompt-dialog-selector">
                    <div class="qq-dialog-message-selector"></div>
                    <input type="text">
                    <div class="qq-dialog-buttons">
                        <button type="button" class="qq-cancel-button-selector">Cancel</button>
                        <button type="button" class="qq-ok-button-selector">Ok</button>
                    </div>
                </dialog>
            </div>
        </script>
    </div>


</template>
<script>
    import fine from 'fine-uploader/lib/s3'

    export default {
        mounted() {
            let uploader = new fine.s3.FineUploader({
                element: this.$refs.uploader
            })
        }
    }
</script>

