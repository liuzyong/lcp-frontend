let data = {
 
  xmgl: {
    "type": "page",
    "body": {
      "label": "进入介绍页",
      "type": "button",
      "level": "info",
      "actionType": "link",
      "link": "#/basic/61179417c42dab497e0b66dc"
    }
  },
  yqtj: {
    "type": "page",
    "messages" : {
    },
    "style": {
    },
    "initApi": {
        "method": "post",
        "url": "/perish/common/newSchema?title=lkzb"
    },
    
    "body": [
        {
            "type": "form",
            "title": "阳澄湖科技园春节期间人员流动情况填报",
            "body": [
                {
                    "type": "select",
                    "label": "板块",
                    "name": "platform",
                    "options": [
                        {
                            "label": "南昆院",
                            "value": "南昆院"
                        },
                        {
                            "label": "浙昆中心",
                            "value": "浙昆中心"
                        },
                        {
                            "label": "昆微院",
                            "value": "昆微院"
                        },
                        {
                            "label": "西昆院",
                            "value": "西昆院"
                        },
                        {
                            "label": "昆智院",
                            "value": "昆智院"
                        },
                        {
                            "label": "阳管委大楼",
                            "value": "阳管委大楼"
                        },
                        {
                            "label": "工研院大楼工研院大楼",
                            "value": "工研院大楼"
                        },
                        {
                            "label": "启迪（昆山）分园",
                            "value": "启迪（昆山）分园"
                        }
                    ],
                    "checkAll": false,
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "企业名称",
                    "name": "company",
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "员工总数",
                    "name": "ygzs",
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "留苏人员数",
                    "name": "lNumber",
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "离苏人员数",
                    "name": "leaveSuNumber",
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "企业联络人",
                    "name": "linkman",
                    "required": true
                },
                {
                    "type": "input-text",
                    "label": "手机号码",
                    "name": "phone",
                    "required": true
                },
                {
                    "type": "input-datetime",
                    "label": "日期时间",
                    "name": "datetime",
                    "value": "now",
                    "disabled": true
                }
            ],
            "api": {
                "method": "post",
                "url": "/perish/common/newSchema?title=lkzb"
            }
        }
    ]
}


};

export default data;

// const aa={
//   ...payload,
//   payload.value.result
// }
