<template>
  <div class="shoujian-wrapper">
    <div v-if="recType === '1'">
      <!--<div class="pannel mt10">-->
        <!---->
      <!--</div>-->

      <div class="pannel mt10">收件趋势</div>
      <v-chart :data="chartData" prevent-default>
        <v-scale x :tick-count="3" />
        <v-tooltip :show-item-marker="false" show-x-value />
        <v-line />
      </v-chart>

      <div class="pannel mt10">详细数据</div>
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
        <tr>
          <th>日期</th>
          <th>收件量</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2018-06-09</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2018-06-09</td>
          <td>2</td>
        </tr>
        </tbody>
      </x-table>
    </div>

    <div v-else>
      <div>
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
          <popup-picker title="快递公司" :data="list" v-model="value5" value-text-align="left"></popup-picker>
        </group>
      </div>
      <div>
        <v-chart :data="data">
          <v-scale y :options="yOptions" />
          <v-tooltip disabled />
          <v-pie :radius="0.85" series-field="name" />
          <v-legend :options="legendOptions" />
        </v-chart>
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead>
          <tr>
            <th>日期</th>
            <th>快递公司</th>
            <th>收件量</th>
            <th>占比</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2018-06-09</td>
            <td>圆通</td>
            <td>4100</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>2018-06-09</td>
            <td>圆通</td>
            <td>4100</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>2018-06-09</td>
            <td>圆通</td>
            <td>4100</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>2018-06-09</td>
            <td>圆通</td>
            <td>4100</td>
            <td>25%</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </div>
  </div>
</template>
<script>
  import { Group, PopupPicker, VChart, VTooltip, VLine, VScale, XTable, VLegend, VPie } from 'vux'

  const map = {
    '芳华': '40%',
    '妖猫传': '20%',
    '机器之血': '18%',
    '心理罪': '15%',
    '寻梦环游记': '5%',
    '其他': '2%'
  };

  export default{
    data () {
      return {
        value5: ['A'],
        list: [['A', 'B', 'C']],
        chartData: [
          { date: '2017-06-05', value: 116 },
          { date: '2017-06-06', value: 129 },
          { date: '2017-06-07', value: 135 },
          { date: '2017-06-08', value: 86 },
          { date: '2017-06-09', value: 73 },
          { date: '2017-06-10', value: 85 },
          { date: '2017-06-11', value: 73 },
          { date: '2017-06-12', value: 68 },
          { date: '2017-06-13', value: 92 },
          { date: '2017-06-14', value: 130 },
          { date: '2017-06-15', value: 245 },
          { date: '2017-06-16', value: 139 },
          { date: '2017-06-17', value: 115 },
          { date: '2017-06-18', value: 111 },
          { date: '2017-06-19', value: 309 },
          { date: '2017-06-20', value: 206 },
          { date: '2017-06-21', value: 137 },
          { date: '2017-06-22', value: 128 },
          { date: '2017-06-23', value: 85 },
          { date: '2017-06-24', value: 94 },
          { date: '2017-06-25', value: 71 }
        ],
        legendOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + map[val]
          }
        },
        yOptions: {
          formatter (val) {
            return val * 100 + '%'
          }
        },
        map,
        data: [
          { name: '芳华', percent: 0.4, a: '1' },
          { name: '妖猫传', percent: 0.2, a: '1' },
          { name: '机器之血', percent: 0.18, a: '1' },
          { name: '心理罪', percent: 0.15, a: '1' },
          { name: '寻梦环游记', percent: 0.05, a: '1' },
          { name: '其他', percent: 0.02, a: '1' }
        ]
      }
    },
    props: {
      recType: {
        type: String,
        default() {
          return "1";
        }
      },
    },
    methods: {

    },
    created () {

    },
    components: {
      Group,
      PopupPicker,
      VChart,
      VTooltip,
      VLine,
      VScale,
      XTable,
      VLegend,
      VPie
    }
  }
</script>


<style scoped lang="less">
  @import "../../assets/less/color";
  @import "../../assets/less/mixin";

  .shoujian-wrapper {
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top: 0;*/
  }
</style>