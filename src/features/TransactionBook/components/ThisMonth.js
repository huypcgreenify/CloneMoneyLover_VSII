import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'

const ThisMonth = (props) => {
    return <View style={{
        flex: 1
    }}>
        <View style={{
            flex: 0.2,
            padding: 15,
            backgroundColor: 'white',
            flexDirection: 'column'
        }}>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    fontSize: fontSizes.h5
                }}>Số dư đầu</Text>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: 'black'
                }}>0.00 ₫</Text>
            </View>
            <View style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: fontSizes.h5
                }}>Số dư cuối</Text>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: 'black'
                }}>+1,950,000,000.00 ₫</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1
                }}></View>
                <View style={{
                    width: '40%',
                    marginTop: 5,
                    height: 1,
                    backgroundColor: colors.inactive
                }}></View>
            </View>
            <View style={{
                marginTop: 5,
                alignItems: 'flex-end'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h5
                }}>+1,950,000,000.00 ₫</Text>
            </View>
        </View>
        <ScrollView style={{
            marginTop: 25,
            flexDirection: 'column',
            flex: 0.8,
        }}>
            {/** ---------------------- */}
            <View style={{
                paddingHorizontal: 15,
                height: 125,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15
                    }}><Text style={{
                        fontSize: 35,
                        color: 'black'
                    }}>28</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Hôm nay</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>tháng 2 2022</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>+2,000,000,000.00 ₫</Text>
                        </View>
                    </View>
                </View>
                {/** ---------------------- */}
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15,
                    }}><Image
                            source={images.wallet}
                            style={{
                                width: 35,
                                height: 35,
                            }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Thu nhập khác</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>Điều chỉnh số dư</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'blue',
                            }}>2,000,000,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/** ---------------------- */}
            <View style={{
                marginTop: 25,
                paddingHorizontal: 15,
                height: 125,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15
                    }}><Text style={{
                        fontSize: 35,
                        color: 'black'
                    }}>28</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Hôm nay</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>tháng 2 2022</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>+2,000,000,000.00 ₫</Text>
                        </View>
                    </View>
                </View>
                {/** ---------------------- */}
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15,
                    }}><Image
                            source={images.wallet}
                            style={{
                                width: 35,
                                height: 35,
                            }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Thu nhập khác</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>Điều chỉnh số dư</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'blue',
                            }}>2,000,000,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/** ---------------------- */}
            <View style={{
                marginTop: 25,
                paddingHorizontal: 15,
                height: 125,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15
                    }}><Text style={{
                        fontSize: 35,
                        color: 'black'
                    }}>28</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Hôm nay</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>tháng 2 2022</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>+2,000,000,000.00 ₫</Text>
                        </View>
                    </View>
                </View>
                {/** ---------------------- */}
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15,
                    }}><Image
                            source={images.wallet}
                            style={{
                                width: 35,
                                height: 35,
                            }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Thu nhập khác</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>Điều chỉnh số dư</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'blue',
                            }}>2,000,000,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/** ---------------------- */}
            <View style={{
                marginTop: 25,
                paddingHorizontal: 15,
                height: 125,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15
                    }}><Text style={{
                        fontSize: 35,
                        color: 'black'
                    }}>28</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Hôm nay</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>tháng 2 2022</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>+2,000,000,000.00 ₫</Text>
                        </View>
                    </View>
                </View>
                {/** ---------------------- */}
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15,
                    }}><Image
                            source={images.wallet}
                            style={{
                                width: 35,
                                height: 35,
                            }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Thu nhập khác</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>Điều chỉnh số dư</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'blue',
                            }}>2,000,000,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/** ---------------------- */}
            <View style={{
                marginTop: 25,
                paddingHorizontal: 15,
                height: 125,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15
                    }}><Text style={{
                        fontSize: 35,
                        color: 'black'
                    }}>28</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Hôm nay</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>tháng 2 2022</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>+2,000,000,000.00 ₫</Text>
                        </View>
                    </View>
                </View>
                {/** ---------------------- */}
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        flex: 0.15,
                    }}><Image
                            source={images.wallet}
                            style={{
                                width: 35,
                                height: 35,
                            }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.85
                    }}>
                        <View style={{
                            flex: 0.5,
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                fontWeight: 'bold'
                            }}>Thu nhập khác</Text>
                            <Text style={{
                                fontSize: fontSizes.h5,
                            }}>Điều chỉnh số dư</Text>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                textAlign: 'right',
                                color: 'blue',
                            }}>2,000,000,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
}

export default ThisMonth