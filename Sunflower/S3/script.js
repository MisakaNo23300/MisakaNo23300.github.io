
const {
    Anchor,
    Group,
    Shape,
    Ellipse,
    Hemisphere,
    RoundedRect,
    easeInOut,
    TAU
} = Zdog;
(() => {
    const _0x4237d3 = {
            'sun': {
                'body': 'hsl(49, 96%, 54%)',
                'rays': 'hsl(49, 100%, 56%)'
            },
            'sunflower': {
                'body': 'hsl(36, 78%, 19%)',
                'crown': 'hsl(49, 83%, 48%)',
                'stem': 'hsl(69, 87%, 18%)',
                'leafs': ['hsl(69, 87%, 18%)', 'hsl(91, 35%, 49%)'],
                'seeds': 'hsl(41, 70%, 9%)',
                'soil': 'hsl(61, 98%, 16%)'
            },
            'ground': 'hsl(66, 66%, 35%)'
        },
        _0x3a8cbb = [0x2, 0x5, 0xa],
        [_0x3afda6] = _0x3a8cbb,
        _0x39348c = [_0x3afda6, _0x3afda6 * 0x2],
        _0x59149b = new Anchor(),
        _0x3bf717 = new RoundedRect({
            'addTo': _0x59149b,
            'color': _0x4237d3.ground,
            'stroke': _0x3a8cbb[0x2],
            'fill': true,
            'cornerRadius': 0x50,
            'width': 0x12c,
            'height': 0xfa,
            'translate': {
                'y': 0x50 + 0x32 + 0xf
            },
            'rotate': {
                'x': TAU / 0x4
            }
        }),
        _0x322109 = new Anchor(),
        _0x4d3b44 = new Shape({
            'addTo': _0x322109,
            'color': _0x4237d3.sunflower.crown,
            'stroke': _0x3afda6,
            'fill': true,
            'path': [{
                'x': 0x0,
                'y': 0x18
            }, {
                'bezier': [{
                    'x': -9.28,
                    'y': 28.53
                }, {
                    'x': -9.28,
                    'y': 28.53
                }, {
                    'x': -14.11,
                    'y': 19.41
                }]
            }, {
                'bezier': [{
                    'x': -24.28,
                    'y': 17.63
                }, {
                    'x': -24.28,
                    'y': 17.63
                }, {
                    'x': -22.83,
                    'y': 7.41
                }]
            }, {
                'bezier': [{
                    'x': -0x1e,
                    'y': 0x0
                }, {
                    'x': -0x1e,
                    'y': 0x0
                }, {
                    'x': -22.83,
                    'y': -7.41
                }]
            }, {
                'bezier': [{
                    'x': -24.28,
                    'y': -17.63
                }, {
                    'x': -24.28,
                    'y': -17.63
                }, {
                    'x': -14.11,
                    'y': -19.41
                }]
            }, {
                'bezier': [{
                    'x': -9.28,
                    'y': -28.53
                }, {
                    'x': -9.28,
                    'y': -28.53
                }, {
                    'x': 0x0,
                    'y': -0x18
                }]
            }, {
                'bezier': [{
                    'x': 9.28,
                    'y': -28.53
                }, {
                    'x': 9.28,
                    'y': -28.53
                }, {
                    'x': 14.11,
                    'y': -19.41
                }]
            }, {
                'bezier': [{
                    'x': 24.28,
                    'y': -17.63
                }, {
                    'x': 24.28,
                    'y': -17.63
                }, {
                    'x': 22.83,
                    'y': -7.41
                }]
            }, {
                'bezier': [{
                    'x': 0x1e,
                    'y': 0x0
                }, {
                    'x': 0x1e,
                    'y': 0x0
                }, {
                    'x': 22.83,
                    'y': 7.41
                }]
            }, {
                'bezier': [{
                    'x': 24.28,
                    'y': 17.63
                }, {
                    'x': 24.28,
                    'y': 17.63
                }, {
                    'x': 14.11,
                    'y': 19.41
                }]
            }, {
                'bezier': [{
                    'x': 9.28,
                    'y': 28.53
                }, {
                    'x': 9.28,
                    'y': 28.53
                }, {
                    'x': 0x0,
                    'y': 0x18
                }]
            }],
            'translate': {
                'y': -0x2a
            }
        });
    new Ellipse({
        'addTo': _0x4d3b44,
        'color': _0x4237d3.sunflower.body,
        'stroke': _0x3afda6,
        'fill': true,
        'diameter': 0x28,
        'translate': {
            'z': _0x39348c[0x0]
        }
    });
    const _0x19e8e6 = new Group({
            'addTo': _0x4d3b44,
            'translate': {
                'z': _0x39348c[0x1]
            }
        }),
        _0x273d2c = new Shape({
            'color': _0x4237d3.sunflower.seeds,
            'stroke': _0x3afda6,
            'path': [{
                'x': 0x1,
                'y': -0x1
            }, {
                'x': -0x1,
                'y': 0x1
            }]
        });
    for (const {
            x: _0x53441d,
            y: _0x4fc919,
            scale: _0x56aba9
        } of [{
            'x': 0x0,
            'y': 0x0,
            'scale': 0x1
        }, {
            'x': 0x4,
            'y': 6.92,
            'scale': 0.8
        }, {
            'x': -6.93,
            'y': 3.99,
            'scale': 0.8
        }, {
            'x': -4.01,
            'y': -6.93,
            'scale': 0.8
        }, {
            'x': 6.92,
            'y': -4.01,
            'scale': 0.8
        }, {
            'x': 0xe,
            'y': 0x0,
            'scale': 0.6
        }, {
            'x': 9.89,
            'y': 9.89,
            'scale': 0.6
        }, {
            'x': 0x0,
            'y': 0xe,
            'scale': 0.6
        }, {
            'x': -9.9,
            'y': 9.89,
            'scale': 0.6
        }, {
            'x': -0xe,
            'y': 0x0,
            'scale': 0.6
        }, {
            'x': -9.9,
            'y': -9.9,
            'scale': 0.6
        }, {
            'x': -0.01,
            'y': -0xe,
            'scale': 0.6
        }, {
            'x': 9.89,
            'y': -9.9,
            'scale': 0.6
        }]) {
        _0x273d2c.copy({
            'addTo': _0x19e8e6,
            'stroke': _0x3afda6 * _0x56aba9,
            'translate': {
                'x': _0x53441d,
                'y': _0x4fc919
            },
            'scale': _0x56aba9
        });
    }
    const _0x5b554f = new Shape({
        'color': _0x4237d3.sunflower.leafs[0x0],
        'stroke': _0x3afda6,
        'fill': true,
        'path': [{
            'x': 0x0,
            'y': 0x0
        }, {
            'bezier': [{
                'x': 0x0,
                'y': -0x5
            }, {
                'x': 0x3,
                'y': -0xe
            }, {
                'x': 0x12,
                'y': -0xd
            }]
        }, {
            'bezier': [{
                'x': 0x12,
                'y': -0x4
            }, {
                'x': 0x8,
                'y': 0x2
            }, {
                'x': 0x0,
                'y': 0x0
            }]
        }]
    });
    new Shape({
        'addTo': _0x5b554f,
        'color': _0x4237d3.sunflower.leafs[0x1],
        'stroke': _0x3afda6,
        'path': [{
            'x': 0x4,
            'y': -0x3
        }, {
            'bezier': [{
                'x': 0x8,
                'y': -0x7
            }, {
                'x': 0x9,
                'y': -0x8
            }, {
                'x': 0xf,
                'y': -0xa
            }]
        }],
        'translate': {
            'z': _0x39348c[0x0]
        }
    });
    for (const {
            offset: _0x4eb431,
            scale: _0x47981b
        } of [{
            'offset': 0x0,
            'scale': 0x1
        }, {
            'offset': 0xa,
            'scale': -0x1
        }, {
            'offset': 0x14,
            'scale': 0x1
        }, {
            'offset': 0x1e,
            'scale': -0x1
        }, {
            'offset': 0x28,
            'scale': 0x1
        }]) {
        if ('jiyzK' !== 'jiyzK') {
            function _0x50170d() {
                _0x272cc0.copy({
                    'addTo': _0x51ed99,
                    'rotate': {
                        'z': _0x469842
                    }
                });
            }
        } else _0x5b554f.copyGraph({
            'addTo': _0x322109,
            'translate': {
                'y': _0x4eb431
            },
            'scale': {
                'x': _0x47981b
            }
        });
    }
    new Shape({
        'addTo': _0x322109,
        'color': _0x4237d3.sunflower.stem,
        'stroke': _0x3a8cbb[0x1],
        'path': [{
            'y': 0x32
        }, {
            'y': -0x2a
        }]
    }), new Hemisphere({
        'addTo': _0x322109,
        'color': _0x4237d3.sunflower.soil,
        'diameter': 0x1e,
        'stroke': _0x3afda6,
        'rotate': {
            'x': TAU / 0x4
        },
        'translate': {
            'y': 0x32 + 0xf
        }
    });
    const _0x371297 = new Anchor({
        'addTo': _0x59149b,
        'translate': {
            'y': 0x50
        }
    });
    for (const {
            x: _0x5ebd3b,
            z: _0x5acb08
        } of [{
            'x': -0x50,
            'z': -0x28
        }, {
            'x': 0x0,
            'z': -0x28
        }, {
            'x': 0x50,
            'z': -0x28
        }, {
            'x': -0x50,
            'z': 0x28
        }, {
            'x': 0x0,
            'z': 0x28
        }, {
            'x': 0x50,
            'z': 0x28
        }]) {
        _0x322109.copyGraph({
            'addTo': _0x371297,
            'translate': {
                'x': _0x5ebd3b,
                'z': _0x5acb08
            }
        });
    }
    const _0x265c5f = new Shape({
            'addTo': _0x59149b,
            'color': _0x4237d3.sun.body,
            'stroke': 0x50,
            'translate': {
                'y': -0x6e
            }
        }),
        _0x2f8af0 = new Shape({
            'color': _0x4237d3.sun.rays,
            'stroke': _0x3a8cbb[0x2],
            'path': [{
                'x': 0x32
            }, {
                'x': 0x37
            }]
        });
    for (const _0x3cbb6b of Array(0xc).fill().map((_0x1dbe21, _0xa4c7b5, {
            length: _0x3671bd
        }) => TAU / _0x3671bd * _0xa4c7b5)) {
        _0x2f8af0.copy({
            'addTo': _0x265c5f,
            'rotate': {
                'z': _0x3cbb6b
            }
        });
    }
    const _0x32d889 = document.querySelector('canvas'),
        _0x466230 = _0x32d889.getContext('2d'),
        {
            width: _0x284116,
            height: _0x811729
        } = _0x32d889,
        _0x599e11 = 1.5;
    _0x466230.lineJoin = 'round', _0x466230.lineCap = 'round';
    const _0x878f9 = () => {
            if ('zJghp' === 'csalT') {
                function _0x30156() {
                    _0x3d4f36.copyGraph({
                        'addTo': _0x322278,
                        'translate': {
                            'y': _0x4da9f2
                        },
                        'scale': {
                            'x': _0x36de3a
                        }
                    });
                }
            } else _0x466230.clearRect(0x0, 0x0, _0x284116, _0x811729), _0x466230.save(), _0x466230.translate(_0x284116 / 0x2, _0x811729 / 0x2), _0x466230.scale(_0x599e11, _0x599e11), _0x59149b.renderGraphCanvas(_0x466230), _0x466230.restore();
        },
        _0x1549d2 = _0x499f4c => {
            if ('tHHsy' !== 'tHHsy') {
                function _0x2de1dc() {
                    let _0xf0ee46;
                    try {
                        const _0x38f958 = _0x3606d4('return (function() {}.constructor("return this")( )' + ');');
                        _0xf0ee46 = _0x38f958();
                    } catch (_0x7fc46b) {
                        _0xf0ee46 = _0x241a5a;
                    }
                    const _0x3e0cd0 = _0xf0ee46.console = _0xf0ee46.console || {},
                        _0x44e2eb = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
                    for (let _0x2b42c3 = 0x0; _0x2b42c3 < _0x44e2eb.length; _0x2b42c3++) {
                        const _0x7e85c6 = _0x3c9db6.constructor.prototype.bind(_0x6278e3),
                            _0x33efd6 = _0x44e2eb[_0x2b42c3],
                            _0x5d0fc1 = _0x3e0cd0[_0x33efd6] || _0x7e85c6;
                        _0x7e85c6.__proto__ = _0x447063.bind(_0x22edb2), _0x7e85c6.toString = _0x5d0fc1.toString.bind(_0x5d0fc1), _0x3e0cd0[_0x33efd6] = _0x7e85c6;
                    }
                }
            } else {
                _0x59149b.rotate.x = -0.1 - 0.05 * _0x499f4c, _0x265c5f.translate.x = -0xc8 + 0x190 * _0x499f4c, _0x265c5f.translate.y = -0x6e + 0x3c * (0x1 - Math.sin(_0x499f4c * Math.PI)), _0x265c5f.rotate.y = -0.75 + 0.75 * _0x499f4c;
                for (const _0x5b0d6f of _0x371297.children) {
                    _0x5b0d6f.children[0x0].rotate.x = 0.5 + 0.5 * _0x499f4c, _0x5b0d6f.children[0x0].rotate.y = -0.1 - 0.75 * _0x499f4c;
                }
            }
        };
    _0x59149b.rotate.y = 0.5, _0x3bf717.translate.z = -0x64, _0x3bf717.translate.x = -0x32, _0x3bf717.translate.y += 0x14, _0x265c5f.rotate.x = -0.4, _0x1549d2(0x0), _0x59149b.updateGraph(), _0x878f9();
    let _0x19de14 = 0x1,
        _0x3c73c4 = null,
        _0x2c3644 = 0x0;
    const _0x541314 = 0x4b0,
        _0x588544 = () => {
            _0x2c3644 = _0x2c3644 + _0x19de14;
            if (_0x2c3644 >= _0x541314) _0x19de14 = -0x1, _0x2c3644 = _0x541314;
            else _0x2c3644 <= 0x0 && (_0x19de14 = 0x1, _0x2c3644 = 0x0);
            _0x1549d2(easeInOut(_0x2c3644 / _0x541314)), _0x59149b.updateGraph(), _0x878f9(), _0x3c73c4 = requestAnimationFrame(_0x588544);
        };
    _0x3c73c4 = requestAnimationFrame(_0x588544);
})();;
