<template>
    <table cellpadding="0" cellspacing="0" class="clearfix bigTable" id='downloaddata' border="1px solid #ccc">
        <tr v-for='item in this.data'  v-bind:key="item">
            <div v-for='items in item'  v-bind:key="items">
                <div v-for='itemss in items' v-model="items">
                    <td>{{ itemss }}</td>
                </div>
            </div>
        </tr>
    </table>
</template>

<script>


export default {
    name: 'App',
    props: {
        dataSource: []
    },
    data () {
        return {
            data: [
                [{
                    key1: "header1",
                    key2: "header2",
                    key3: "header3",
                    key4: "header4",
                    key5: "header5",
                    key6: "header6",
                    key7: "header7",
                    key8: "header8",
                    key9: "header9",
                    key10: "header10"
                }],
                [{
                    key1: 95,
                    key2: 27,
                    key3: 31,
                    key4: 80,
                    key5: 43,
                    key6: 70,
                    key7: 28,
                    key8: 70,
                    key9: 95,
                    key10: 41
                }],
                [{
                    key1: 66,
                    key2: 36,
                    key3: 90,
                    key4: 59,
                    key5: 1,
                    key6: 31,
                    key7: 45,
                    key8: 58,
                    key9: 72,
                    key10: 32,
                }]
            ]
        }
    },
    mounted () {
    }

}
</script>
