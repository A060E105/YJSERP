<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col m-1">
                    <button class="btn btn-primary float-start"
                        @click="$router.push('/')">
                        ⬅back
                    </button>
                    <span class="fs-3">{{ workname }}</span>
                    <button class="btn btn-primary float-end">
                        <!-- TODO (add methods check data and send data to remote) -->
                        <!-- TODO (router to home) -->
                        完成
                    </button>
                </div>
            </div>
            <div class="row vh-90">
                <div class="col-4 h-75 border border-dark overflow-auto">
                    <div class="list-group">
                        <button v-for="(type, index) in getTypes" :key="index"
                            @click="setSelectType(type.type)"
                            class="list-group-item list-group-item-action">
                            {{ type.name }} :
                            <span :class="{'badge': true, 'bg-danger': !getMyData[type.type], 'bg-success': getMyData[type.type]}">
                                {{ getMyData[type.type] ? getMyData[type.type] : '請選擇' }}
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col h-75 border border-dark overflow-auto">
                    <div class="list-group">
                        <button v-for="(item, index) in getItemType(select_type)" :key="index"
                            @click="onClickItem(item.type, item.value)"
                            class="list-group-item list-group-item-action">
                            {{ item.name }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters} from 'vuex';

export default {
    name: "example",
    props: [
        'workname'
    ],
    data() {
        return {
            select_type: ''
        }
    },
    computed: {
        ...mapGetters([
            'getTypes',
            'getItemType',
            'getMyData'
        ]),
    },
    methods: {
        ...mapMutations([
            'setMyData'
        ]),
        setSelectType(type) {
            this.select_type = type;
        },
        onClickItem(type, data) {
            this.setMyData({
                type: type,
                data: data
            });
            this.select_type = '';
        }
    }
}
</script>

<style scoped>
.vh-90 {
    height: 90vh !important;
}
</style>