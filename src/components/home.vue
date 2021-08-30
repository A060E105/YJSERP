<template>
    <div class="container">
        <div class="row flex-row justify-content-center">
            <div class="col">
                <div class="box fs-3" @click="gotoExample('入庫')">入庫</div>
                <div class="box fs-3" @click="gotoExample('製成')">製成</div>
                <div class="box fs-3" @click="gotoExample('產出')">產出</div>
                <div class="box fs-3" @click="$router.push('/chart')">Chart</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    methods: {
        gotoExample(name) {
            this.$router.push({name: 'example', params: { workname: name}})
        }
    }

}
</script>

<style scoped>
.box {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    height: 20vh;
    width: 20vh;
    background: #555555;
    margin: 6%;
}
</style>