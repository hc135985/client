module.exports.order_fromItem = [
    {
        tit: '列表',
        name: 'list',
        msg: '请输入列表'
    },
    {
        tit: 'aid',
        name: 'aid',
        msg: '请输入aid'
    },
    {
        tit: 'uid',
        name: 'uid',
        msg: '请输入uid'
    },
    {
        tit: '总价',
        name: 'summary',
        msg: '请输入总价'
    },
    {
        tit: '数量',
        name: 'total',
        msg: '请输入数量'
    },
    {
        tit: '状态',
        name: 'status',
        msg: '输入状态',
        isSelect: true,
        opn: [
            { value: 1, text: '待付款' },
            { value: 2, text: '待配送' },
            { value: 3, text: '待发货' },
            { value: 4, text: '退款/售后' },
        ]
    },
]
module.exports.order_fields = [
    {
        name: 'list',
        value: ''
    },
    {
        name: 'aid',
        value: ''
    },
    {
        name: 'uid',
        value: ''
    },
    {
        name: 'summary',
        value: ''
    },
    {
        name: 'total',
        value: ''
    },
    {
        name: 'status',
        value: ''
    }
]
module.exports.comment_fromItem = [
    {
        tit: '商品id',
        name: 'pid',
        msg: '请输入商品id'
    },
    {
        tit: '用户id',
        name: 'uid',
        msg: '请输入用户id'
    },
    {
        tit: '用户名',
        name: 'uname',
        msg: '请输入商品销量'
    },
    {
        tit: '评论',
        name: 'comment',
        msg: '请输入评论'
    },
    {
        tit: '星级',
        name: 'score',
        msg: '请输入星级1-5',
        isSelect: true,
        opn: [
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
            { value: 4, text: 4 },
            { value: 5, text: 5 },
        ]
    },
    {
        tit: '用户头像',
        name: 'uphoto',
        msg: '上传头像'
    },
]
module.exports.comment_fields = [
    {
        name: 'pid',
        value: ''
    },
    {
        name: 'uid',
        value: ''
    },
    {
        name: 'uname',
        value: ''
    },
    {
        name: 'comment',
        value: ''
    },
    {
        name: 'score',
        value: ''
    },
    {
        name: 'uphoto',
        value: ''
    }
]

module.exports.product_fromItem = [
    {
        tit: '商品名称',
        name: 'pname',
        msg: '请输入商品名称'
    },
    {
        tit: '商品图片',
        name: 'imgUrl',
        msg: '请输入图片地址'
    },
    {
        tit: '商品销量',
        name: 'sales',
        msg: '请输入商品销量'
    },
    {
        tit: '商品原价',
        name: 'original_price',
        msg: '请输入商品原价'
    },
    {
        tit: '商品现价',
        name: 'sale_price',
        msg: '请输入商品现价'
    },
    {
        tit: '经营模式',
        name: 'mode',
        msg: '请输入商品经营模式',
        isSelect: true,
        opn: [
            { value: '自营', text: '自营' },
            { value: '代理', text: '代理' },
        ]
    },
    {
        tit: '商品一级分类',
        name: 't_type',
        msg: '请输入商品一级分类',
        isSelect: true,
        opn: []
    },
    {
        tit: '商品二级分类',
        name: 's_type',
        msg: '请输入商品二级分类',
        isSelect: true,
        opn: []
    },
    {
        tit: '轮播图字符串',
        name: 'carousel',
        msg: '请输入轮播图字符串'
    },
    {
        tit: '商品描述',
        name: 'desc',
        msg: '请输入商品描述'
    },
]

module.exports.product_fields = [
    {
        name: 'pname',
        value: ''
    },
    {
        name: 'imgUrl',
        value: ''
    },
    {
        name: 'sales',
        value: ''
    },
    {
        name: 'original_price',
        value: ''
    },
    {
        name: 'sale_price',
        value: ''
    },
    {
        name: 'mode',
        value: ''
    },
    {
        name: 's_type',
        value: ''
    },
    {
        name: 't_type',
        value: ''
    },
    {
        name: 'carousel',
        value: ''
    },
    {
        name: 'desc',
        value: ''
    }
]

module.exports.Address_fromItem = [
    {
        tit: '姓名',
        name: 'auser',
        msg: '请输入姓名'
    },
    {
        tit: '手机号',
        name: 'mobile',
        msg: '请输入手机号'
    },
    {
        tit: '省份',
        name: 'province',
        msg: '请输入省份'
    },
    {
        tit: '城市',
        name: 'city',
        msg: '请输入城市'
    },
    {
        tit: '区县',
        name: 'county',
        msg: '请输入区县'
    },
    {
        tit: '街道门牌号',
        name: 'street',
        msg: '输入门牌号'
    },
    {
        tit: 'uid',
        name: 'uid',
        msg: '用户id'
    }
]

module.exports.Address_fields = [
    {
        name: 'auser',
        value: ''
    },
    {
        name: 'mobile',
        value: ''
    },
    {
        name: 'province',
        value: ''
    },
    {
        name: 'city',
        value: ''
    },
    {
        name: 'county',
        value: ''
    },
    {
        name: 'street',
        value: ''
    },
    {
        name: 'uid',
        value: ''
    }
]


module.exports.productone_fromItem = [
    {
        tit: '列表名称',
        name: 't_text',
        msg: '请输入列表名字'
    }
]

module.exports.productone_fields = [
    {
        name: "t_text",
        value: ''
    }
]

module.exports.productTwo_fromItem = [
    {
        tit: '列表名称',
        name: 's_text',
        msg: '请输入列表名字'
    },
    {
        tit: '列表类型',
        name: 't_type',
        msg: '请输入列表类型',
        isSelect: true,
        opn: [],
    }
]

module.exports.productTwo_fields = [
    {
        name: "s_text",
        value: ''
    },
    {
        name: "t_type",
        value: ''
    }
]