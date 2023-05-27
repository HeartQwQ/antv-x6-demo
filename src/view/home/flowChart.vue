<template>
  <el-card>
    <h3 style="text-align: center;">功能地图</h3>
    <div style="width:100%; height:100%">
      <div id="container"></div>
      <TeleportContainer />
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonNode from "../../components/ButtonNode.vue"
import BorderNode from "../../components/BorderNode.vue"
import { Graph, Shape } from "@antv/x6";
import { register, getTeleport } from "@antv/x6-vue-shape";

// 按钮组件
register({
  shape: "button-node",
  component: ButtonNode,
});

// 虚数框组件
register({
  shape: "border-node",
  component: BorderNode,
});

const TeleportContainer = getTeleport();

export default defineComponent({
  components: {
    TeleportContainer,
  },
  mounted() {
    // 画布
    const graph = new Graph({
      container: document.getElementById("container")!,
      autoResize: true,
      interacting: function (cellView) {
        // nodeMovable:节点不可拖拽
        return { nodeMovable: false, edgeLabelMovable: false }
      },
    });

    // 定位 连接桩 取消样式
    const groups = {
      group1: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
        attrs: {
          circle: {
            r: 0,
          },
        }
      },
    }

    // 箭头样式
    const line = {
      strokeWidth: 4,
      stroke: '#5b9bd5',
      targetMarker: {
        tagName: 'path',
        stroke: '#5b9bd5',
        strokeWidth: 1,
        d: 'M 10 -3 10 -10 -2 0 10 10 10 3',
      },
    }

    // 单证
    graph.addNode({
      id: 'dz',
      x: 500,
      y: 40,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '单证',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 订单框
    graph.addNode({
      id: 'dzk',
      shape: "border-node",
      x: 20,
      y: 20,
      data: {
        width: "980px",
        height: "400px"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 185,
            y: 400,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 490,
            y: 400,
          },
        }, {
          group: 'group1',
          id: "port3",
          args: {
            x: 795,
            y: 400,
          },
        }],
      }
    });

    // 单证的边
    graph.addEdge({
      source: { cell: "cpk", port: "port1" },
      target: { cell: "dzk", port: "port1" },
      attrs: { line },
    })

    graph.addEdge({
      source: { cell: "xyk", port: "port1" },
      target: { cell: "dzk", port: "port2" },
      attrs: { line },
    })

    graph.addEdge({
      source: { cell: "dzk", port: "port3" },
      target: { cell: "cwk", port: "port1" },
      attrs: { line },
    })

    // 销售订单
    graph.addNode({
      id: "xsdd",
      shape: "button-node",
      x: 60,
      y: 200,
      data: {
        title: "销售订单",
        url: "/index/销售订单",
        type: "primary"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 12,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 100,
            y: 38,
          },
        }],
      }
    });

    // 交付单
    graph.addNode({
      id: "jfd",
      shape: "button-node",
      x: 280,
      y: 200,
      data: {
        title: "交付单",
        url: "/index/交付单",
        type: "primary"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 12,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 0,
            y: 38,
          },
        }, {
          group: 'group1',
          id: "port3",
          args: {
            x: 50,
            y: 0,
          },
        }, {
          group: 'group1',
          id: "port4",
          args: {
            x: 50,
            y: 50,
          },
        }, {
          group: 'group1',
          id: "port5",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 销售订单的边
    graph.addEdge({
      source: { cell: "xsdd", port: "port1" },
      target: { cell: "jfd", port: "port1" },
      labels: [
        {
          attrs: { label: { text: '生成' } },
        },
      ],
      attrs: { line },
    })
    graph.addEdge({
      source: { cell: "jfd", port: "port2" },
      target: { cell: "xsdd", port: "port2" },
      labels: [
        {
          attrs: { label: { text: '验收' } },
        },
      ],
      attrs: { line },
    })

    // 交付单的边
    graph.addEdge({
      source: { cell: "jfd", port: "port5" },
      target: { cell: "rwd", port: "port1" },
      labels: [
        {
          attrs: { label: { text: '加入' } },
        },
      ],
      attrs: { line },
    })

    // 采购订单
    graph.addNode({
      id: "cgdd",
      shape: "button-node",
      x: 860,
      y: 60,
      data: {
        title: "采购订单",
        url: "/index/采购订单",
        type: "primary"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 0,
            y: 50,
          },
        }],
      }
    });

    // 任务单
    graph.addNode({
      id: "rwd",
      shape: "button-node",
      x: 580,
      y: 200,
      data: {
        title: "任务单",
        url: "/index/任务单",
        type: "primary"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 工作单
    graph.addNode({
      id: "gzd",
      shape: "button-node",
      x: 860,
      y: 340,
      data: {
        title: "工作单",
        url: "/index/工作单",
        type: "primary"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 0,
          },
        }, {
          group: 'group1',
          id: "port2",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 采购订单的边
    graph.addEdge({
      source: { cell: "cgdd", port: "port1" },
      target: { cell: "jfd", port: "port3" },
      labels: [
        {
          attrs: { label: { text: '验收' } },
        },
      ],
      router: "orth",
      attrs: { line },
    })

    // 任务单的边
    graph.addEdge({
      source: { cell: "rwd", port: "port2" },
      target: { cell: "cgdd", port: "port2" },
      labels: [
        {
          attrs: { label: { text: '外包' } },
        },
      ],
      attrs: { line },
    })
    graph.addEdge({
      source: { cell: "rwd", port: "port2" },
      target: { cell: "gzd", port: "port1" },
      labels: [
        {
          attrs: { label: { text: '分配' } },
        },
      ],
      attrs: { line },
    })

    // 工作单的边
    graph.addEdge({
      source: { cell: "gzd", port: "port2" },
      target: { cell: "jfd", port: "port4" },
      labels: [
        {
          attrs: { label: { text: '验收' } },
        },
      ],
      router: "orth",
      attrs: { line },
    })

    // 资源功能
    graph.addNode({
      id: 'zy',
      x: 1125,
      y: 40,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '资源',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 资源框
    graph.addNode({
      shape: "border-node",
      x: 1020,
      y: 20,
      data: {
        width: "200px",
        height: "400px"
      }
    });

    // 人力资源
    graph.addNode({
      id: "rlzy",
      shape: "button-node",
      x: 1075,
      y: 60,
      data: {
        title: "人力资源",
        type: "info"
      },
    });

    // 物力资源
    graph.addNode({
      id: "wlzy",
      shape: "button-node",
      x: 1075,
      y: 200,
      data: {
        title: "物力资源",
        type: "info"
      },
    });

    // 财力资源
    graph.addNode({
      id: "clzy",
      shape: "button-node",
      x: 1075,
      y: 340,
      data: {
        title: "财力资源",
        type: "info"
      },
    });

    // 产品及服务
    graph.addNode({
      id: 'cp',
      x: 205,
      y: 490,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '产品及服务',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 产品及服务框
    graph.addNode({
      id: 'cpk',
      shape: "border-node",
      x: 20,
      y: 470,
      data: {
        width: "370px",
        height: "400px"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 185,
            y: 0,
          },
        }],
      }
    });

    // 基础产品
    graph.addNode({
      id: "jccp",
      shape: "button-node",
      x: 60,
      y: 560,
      data: {
        title: "基础产品",
        type: "success"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 基础服务
    graph.addNode({
      id: "jcfw",
      shape: "button-node",
      x: 60,
      y: 740,
      data: {
        title: "基础服务",
        type: "success"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 可售产品
    graph.addNode({
      id: "kscp",
      shape: "button-node",
      x: 250,
      y: 560,
      data: {
        title: "基础产品",
        type: "success"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 可售服务
    graph.addNode({
      id: "ksfw",
      shape: "button-node",
      x: 250,
      y: 740,
      data: {
        title: "基础产品",
        type: "success"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 基础的边
    graph.addEdge({
      source: { cell: "jccp", port: "port1" },
      target: { cell: "kscp", port: "port1" },
      attrs: { line },
    })
    // 可售的边
    graph.addEdge({
      source: { cell: "jcfw", port: "port1" },
      target: { cell: "ksfw", port: "port1" },
      attrs: { line },
    })

    // 协议
    graph.addNode({
      id: 'xy',
      x: 510,
      y: 490,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '协议',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 协议框
    graph.addNode({
      id: 'xyk',
      shape: "border-node",
      x: 410,
      y: 470,
      data: {
        width: "200px",
        height: "400px"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 0,
          },
        }],
      }
    });

    // 销售合同
    graph.addNode({
      id: "xsht",
      shape: "button-node",
      x: 460,
      y: 510,
      data: {
        title: "销售合同",
        type: "success"
      },
    });

    // 雇佣合同
    graph.addNode({
      id: "gyht",
      shape: "button-node",
      x: 460,
      y: 650,
      data: {
        title: "雇佣合同",
        type: "success"
      },
    });

    // 采购合同
    graph.addNode({
      id: "cght",
      shape: "button-node",
      x: 460,
      y: 790,
      data: {
        title: "采购合同",
        type: "success"
      },
    });

    // 财务
    graph.addNode({
      id: 'cw',
      x: 815,
      y: 490,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '财务',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 财务框
    graph.addNode({
      id: 'cwk',
      shape: "border-node",
      x: 630,
      y: 470,
      data: {
        width: "370px",
        height: "400px"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 185,
            y: 0,
          },
        }],
      }
    });

    // 销售结算
    graph.addNode({
      id: "xsjs",
      shape: "button-node",
      x: 670,
      y: 510,
      data: {
        title: "销售结算",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 客户对账
    graph.addNode({
      id: "khdz",
      shape: "button-node",
      x: 860,
      y: 510,
      data: {
        title: "基础服务",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 销售与客户的边
    graph.addEdge({
      source: { cell: "xsjs", port: "port1" },
      target: { cell: "khdz", port: "port1" },
      attrs: { line },
    })

    // 内部结算
    graph.addNode({
      id: "nbjs",
      shape: "button-node",
      x: 670,
      y: 650,
      data: {
        title: "内部结算",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 内部对账
    graph.addNode({
      id: "nbdz",
      shape: "button-node",
      x: 860,
      y: 650,
      data: {
        title: "内部对账",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 内部的边
    graph.addEdge({
      source: { cell: "nbjs", port: "port1" },
      target: { cell: "nbdz", port: "port1" },
      attrs: { line },
    })

    // 采购结算
    graph.addNode({
      id: "cgjs",
      shape: "button-node",
      x: 670,
      y: 790,
      data: {
        title: "内部结算",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 100,
            y: 25,
          },
        }],
      }
    });

    // 供应商对账
    graph.addNode({
      id: "gysdz",
      shape: "button-node",
      x: 860,
      y: 790,
      data: {
        title: "供应商对账",
        type: "warning"
      },
      ports: {
        groups,
        items: [{
          group: 'group1',
          id: "port1",
          args: {
            x: 0,
            y: 25,
          },
        }],
      }
    });

    // 采购与供应商的边
    graph.addEdge({
      source: { cell: "cgjs", port: "port1" },
      target: { cell: "gysdz", port: "port1" },
      attrs: { line },
    })

    // 当事人
    graph.addNode({
      id: 'dsr',
      x: 1125,
      y: 490,
      attrs: {
        body: {
          stroke: '#fff',
        },
        label: {
          text: '当事人',
          fontSize: 20,
          fontWeight: 800
        },
      },
    })
    // 当事人框
    graph.addNode({
      shape: "border-node",
      x: 1020,
      y: 470,
      data: {
        width: "200px",
        height: "400px"
      }
    });

    // 客户
    graph.addNode({
      id: "kh",
      shape: "button-node",
      x: 1075,
      y: 510,
      data: {
        title: "客户",
        type: "info"
      },
    });

    // 雇员
    graph.addNode({
      id: "gy",
      shape: "button-node",
      x: 1075,
      y: 650,
      data: {
        title: "雇员",
        type: "info"
      },
    });

    // 供应商
    graph.addNode({
      id: "gys",
      shape: "button-node",
      x: 1075,
      y: 790,
      data: {
        title: "供应商",
        type: "info"
      },
    });
  }
});
</script>

<style scoped>
:deep .el-card__body {
  height: 920px;
  padding: 20px 0 0 0;
}
</style>