<template>
    <div class="subject_tab_settings">
        <div class="title">科目設定</div>
        <div class="settings">
            <div class="setting">
                <div class="setting_title">科目名</div>
                <div class="setting_content">
                    <input type="text" />
                </div>
            </div>
            <div class="setting">
                <div class="setting_title">科目ID</div>
                <div class="setting_content">
                    <input type="text" />
                </div>
            </div>
            <div class="setting">
                <div class="setting_title">科目の説明</div>
                <div class="setting_content">
                    <textarea></textarea>
                </div>
            </div>
            <div class="setting">
                <div class="setting_title">科目のステータス</div>
                <div class="setting_content">
                    <select>
                        <option value="1">公開</option>
                        <option value="2">非公開</option>
                    </select>
                </div>
            </div>
            <div class="setting">
                <div class="setting_title">科目の削除</div>
                <div class="setting_content">
                    <DashboardButtonSmol
                        @click="smolModal.open"
                        color="white"
                        bg="red"
                        text="削除"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const smolModal = useSmolModalStore();
</script>
