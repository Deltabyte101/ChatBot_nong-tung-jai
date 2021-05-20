const alcohol = () => {
    return ({
        types: {
            all: {
                type: "template",
                altText: "เลือกชนิดเครื่องดื่ม",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/102373398_2644995379072462_8759211837389537280_n.jpg?alt=media&token=bba76ae6-7f61-4e40-b097-1f5f7208e177",
                            action: {
                                type: "message",
                                label: "เบียร์",
                                text: "เบียร์"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FBooze.png?alt=media&token=c5c5aa8e-6901-4c49-af26-026cca4d90fb",
                            action: {
                                type: "message",
                                label: "สุราสี",
                                text: "สุราสี"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FWhiteBooze.png?alt=media&token=b4deec42-9c56-4770-b5c4-1f241c2b4561",
                            action: {
                                type: "message",
                                label: "สุราขาว",
                                text: "สุราขาว"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FLocalBooze.png?alt=media&token=f77c0ce8-2e4b-40ff-b2bc-4f93f22de175",
                            action: {
                                type: "message",
                                label: "สุราพื้นเมือง",
                                text: "สุราพื้นเมือง"
                            }
                        },{
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FWine.png?alt=media&token=4d50efa0-5ad3-45a5-aca8-01a47294461f",
                            action: {
                                type: "message",
                                label: "ไวน์",
                                text: "ไวน์"
                            }
                        },{
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FWineCooler.png?alt=media&token=29a1d0d1-dbb4-4f7c-b136-c4464b7b8f20",
                            action: {
                                type: "message",
                                label: "ไวน์คูลเลอร์",
                                text: "ไวน์คูลเลอร์"
                            }
                        },{
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Type%2FOther.png?alt=media&token=662b6bd1-c5aa-4c3f-aee0-da67a3c97269",
                            action: {
                                type: "message",
                                label: "เครื่องดื่มอื่นๆ",
                                text: "เครื่องดื่มอื่นๆ"
                            }
                        }
                    ]
                }
            }
        },
        containerSize: {
            all: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะดื่ม",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%8A%E0%B8%8150%E0%B8%A1%E0%B8%A5.png?alt=media&token=0e649987-5622-494d-8d5e-05dc6dbef86e",
                            action: {
                                type: "message",
                                label: "แก้ว 50mL",
                                text: "แก้ว 50mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B8%87165%E0%B8%A1%E0%B8%A5.png?alt=media&token=2542ce16-29e8-49c8-84af-06d4fa70f0b2",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%8B%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81330%E0%B8%A1%E0%B8%A5.png?alt=media&token=06226e23-6e3c-40dc-ae50-1c1aedc9fa56",
                            action: {
                                type: "message",
                                label: "กระป๋อง 330mL",
                                text: "กระป๋อง 330mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%8B%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88500%E0%B8%A1%E0%B8%A5.png?alt=media&token=f8554819-142b-41ce-9fd4-b51cc2a618d8",
                            action: {
                                type: "message",
                                label: "กระป๋อง 500mL",
                                text: "กระป๋อง 500mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81330%E0%B8%A1%E0%B8%A5.png?alt=media&token=e5a274b9-c847-43e8-b8ba-d2ccad1fe248",
                            action: {
                                type: "message",
                                label: "ขวด 330mL",
                                text: "ขวด 330mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B8%81%E0%B8%A5%E0%B8%A1350%E0%B8%A1%E0%B8%A5.png?alt=media&token=19e70173-6a98-4c33-91b1-f5ecdf14426e",
                            action: {
                                type: "message",
                                label: "ขวด 350mL",
                                text: "ขวด 350mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88640%E0%B8%A1%E0%B8%A5.png?alt=media&token=b10201c7-dce4-4db4-b132-b5da797aa98a",
                            action: {
                                type: "message",
                                label: "ขวด 640mL",
                                text: "ขวด 640mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B8%81%E0%B8%A5%E0%B8%A1700%E0%B8%A1%E0%B8%A5.png?alt=media&token=f1bbf119-9939-4816-af22-db301d20d884",
                            action: {
                                type: "message",
                                label: "ขวด 700mL",
                                text: "ขวด 700mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%80%E0%B8%AB%E0%B8%A2%E0%B8%B7%E0%B8%AD%E0%B8%811000%E0%B8%A1%E0%B8%A5.png?alt=media&token=1e9c1d08-802d-479d-aae7-9b304f6e15dc",
                            action: {
                                type: "message",
                                label: "เหยือก 1000mL",
                                text: "เหยือก 1000mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%881000%E0%B8%A1%E0%B8%A5.png?alt=media&token=10da010e-49a6-4946-8ed6-3fb5a3752ef8",
                            action: {
                                type: "message",
                                label: "ขวด 1000mL",
                                text: "ขวด 1000mL"
                            }
                        },
                    ]
                }
            },
            ไวน์คูลเลอร์: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%8A%E0%B8%8150%E0%B8%A1%E0%B8%A5.png?alt=media&token=0e649987-5622-494d-8d5e-05dc6dbef86e",
                            action: {
                                type: "message",
                                label: "แก้ว 50mL",
                                text: "แก้ว 50mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%84%E0%B8%A7%E0%B8%99%E0%B9%8C100%E0%B8%A1%E0%B8%A5.png?alt=media&token=3dfa6f40-f64e-4bb4-88ad-195df9aadc92",
                            action: {
                                type: "message",
                                label: "แก้ว 100mL",
                                text: "แก้ว 100mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B8%87165%E0%B8%A1%E0%B8%A5.png?alt=media&token=2542ce16-29e8-49c8-84af-06d4fa70f0b2",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B9%83%E0%B8%8D%E0%B9%88165.png?alt=media&token=09931385-07af-4dc1-8bb1-e3618b791263",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%8B%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81250%E0%B8%A1%E0%B8%A5.png?alt=media&token=564b5c39-8750-46b7-acd4-eefe5ee53e2c",
                            action: {
                                type: "message",
                                label: "กระป๋อง 250mL",
                                text: "กระป๋อง 250mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%8B%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81330%E0%B8%A1%E0%B8%A5.png?alt=media&token=06226e23-6e3c-40dc-ae50-1c1aedc9fa56",
                            action: {
                                type: "message",
                                label: "กระป๋อง 330mL",
                                text: "กระป๋อง 330mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81275%E0%B8%A1%E0%B8%A5.png?alt=media&token=1bacb999-1e63-4c41-8a5e-6d6fbc485fed",
                            action: {
                                type: "message",
                                label: "ขวด 275mL",
                                text: "ขวด 275mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81330%E0%B8%A1%E0%B8%A5.png?alt=media&token=e5a274b9-c847-43e8-b8ba-d2ccad1fe248",
                            action: {
                                type: "message",
                                label: "ขวด 330mL",
                                text: "ขวด 330mL"
                            }
                        },
                    ]
                }
            },
            เบียร์: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%8A%E0%B8%8150%E0%B8%A1%E0%B8%A5.png?alt=media&token=0e649987-5622-494d-8d5e-05dc6dbef86e",
                            action: {
                                type: "message",
                                label: "แก้ว 50mL",
                                text: "แก้ว 50mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%84%E0%B8%A7%E0%B8%99%E0%B9%8C100%E0%B8%A1%E0%B8%A5.png?alt=media&token=3dfa6f40-f64e-4bb4-88ad-195df9aadc92",
                            action: {
                                type: "message",
                                label: "แก้ว 100mL",
                                text: "แก้ว 100mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B8%87165%E0%B8%A1%E0%B8%A5.png?alt=media&token=2542ce16-29e8-49c8-84af-06d4fa70f0b2",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B9%83%E0%B8%8D%E0%B9%88165.png?alt=media&token=09931385-07af-4dc1-8bb1-e3618b791263",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        }
                    ]
                }
            },
            ไวน์: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%8A%E0%B8%8150%E0%B8%A1%E0%B8%A5.png?alt=media&token=0e649987-5622-494d-8d5e-05dc6dbef86e",
                            action: {
                                type: "message",
                                label: "แก้ว 50mL",
                                text: "แก้ว 50mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%84%E0%B8%A7%E0%B8%99%E0%B9%8C100%E0%B8%A1%E0%B8%A5.png?alt=media&token=3dfa6f40-f64e-4bb4-88ad-195df9aadc92",
                            action: {
                                type: "message",
                                label: "แก้ว 100mL",
                                text: "แก้ว 100mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B8%87165%E0%B8%A1%E0%B8%A5.png?alt=media&token=2542ce16-29e8-49c8-84af-06d4fa70f0b2",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B9%83%E0%B8%8D%E0%B9%88165.png?alt=media&token=09931385-07af-4dc1-8bb1-e3618b791263",
                            action: {
                                type: "message",
                                label: "แก้ว 165mL",
                                text: "แก้ว 165mL"
                            }
                        }
                    ]
                }
            },
            สุราพื้นเมือง: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%9D%E0%B8%B2%2015%20%E0%B8%A1%E0%B8%A5.png?alt=media&token=0f1f7b3d-d503-4a66-a4f6-08e99bf84e5c",
                            action: {
                                type: "message",
                                label: "ฝา 15mL",
                                text: "ฝา 15mL"
                            }
                        },
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%8A%E0%B8%8150%E0%B8%A1%E0%B8%A5.png?alt=media&token=0e649987-5622-494d-8d5e-05dc6dbef86e",
                            action: {
                                type: "message",
                                label: "แก้ว 50mL",
                                text: "แก้ว 50mL"
                            }
                        },
                    ]
                }
            },
            สุราสี: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%9D%E0%B8%B2%2015%20%E0%B8%A1%E0%B8%A5.png?alt=media&token=0f1f7b3d-d503-4a66-a4f6-08e99bf84e5c",
                            action: {
                                type: "message",
                                label: "ฝา 15mL",
                                text: "ฝา 15mL"
                            }
                        },
                    ]
                }
            },
            สุราขาว: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%9D%E0%B8%B2%2015%20%E0%B8%A1%E0%B8%A5.png?alt=media&token=0f1f7b3d-d503-4a66-a4f6-08e99bf84e5c",
                            action: {
                                type: "message",
                                label: "ฝา 15mL",
                                text: "ฝา 15mL"
                            }
                        },
                    ]
                }
            },
            เครื่องดื่มอื่นๆ: {
                type: "template",
                altText: "เลือกภาชนะที่คุณมักจะใช้ดื่มไวน์คูลเลอร์ค่ะ",
                template: {
                    type: "image_carousel",
                    columns: [
                        {
                            imageUrl: "https://firebasestorage.googleapis.com/v0/b/nong-tung-jai-68673.appspot.com/o/%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%2F%E0%B8%9D%E0%B8%B2%2015%20%E0%B8%A1%E0%B8%A5.png?alt=media&token=0f1f7b3d-d503-4a66-a4f6-08e99bf84e5c",
                            action: {
                                type: "message",
                                label: "ฝา 15mL",
                                text: "ฝา 15mL"
                            }
                        },
                    ]
                }
            },
        }
    })
}

 const motivation = () => {
    return ({
        type: "template",
        altText: "This is an image carousel template",
        template: {
          type: "image_carousel",
          columns: [
            {
              imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Motivation%2F1.png?alt=media&token=75d2b96e-5c0e-4811-9388-e33bfc711340",
              action: {
                type: "message",
                label: "ไม่มีปัญหา",
                text: "ฉันคิดว่าการดื่มของฉันไม่มีปัญหาอะไร"
              }
            },
            {
              imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Motivation%2F2.png?alt=media&token=fe2d9ab3-80f1-4590-b1b2-24cf072b3f3f",
              action: {
                type: "message",
                label: "คิดดื่มน้อยลง",
                text: "ฉันคิดเกี่ยวกับการดื่มให้น้อยลงบ้าง"
              }
            },
            {
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Motivation%2F3.png?alt=media&token=0981c687-7ccd-4067-87ff-37cbe391506d",
                action: {
                    type: "message",
                    label: "อยากดื่มน้อยลง",
                    text: "ฉันต้องสินใจว่าจะต้องดื่มให้น้อยลง"
                  }
              },
              {
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Motivation%2F4.png?alt=media&token=000526d6-f44d-40b9-be83-7d587f4341f8",
                action: {
                    type: "message",
                    label: "พร้อมดื่มน้อยลง",
                    text: "ฉันพร้อมแล้วที่จะเริ่มดื่มให้น้อยลง"
                  }
              },
              {
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/assistant-drinker.appspot.com/o/Motivation%2F5.png?alt=media&token=36d41607-51ce-4a66-8d9b-d5abdcf809d1",
                action: {
                    type: "message",
                    label: "ฉันดื่มน้อยลง",
                    text: "ตอนนี้ฉันดื่มน้อยลงกว่าเมื่อก่อนแล้ว"
                  }
              },
          ]
        }
      })
}

module.exports = {motivation,alcohol}