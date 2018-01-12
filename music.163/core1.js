//var CryptoJS = CryptoJS || function (u, p) {
//        var d = {}, l = d.lib = {}, s = function () {
//        }, t = l.Base = {
//            extend: function (a) {
//                s.prototype = this;
//                var c = new s;
//                a && c.mixIn(a);
//                c.hasOwnProperty("init") || (c.init = function () {
//                    c.$super.init.apply(this, arguments)
//                });
//                c.init.prototype = c;
//                c.$super = this;
//                return c
//            }, create: function () {
//                var a = this.extend();
//                a.init.apply(a, arguments);
//                return a
//            }, init: function () {
//            }, mixIn: function (a) {
//                for (var c in a)a.hasOwnProperty(c) && (this[c] = a[c]);
//                a.hasOwnProperty("toString") && (this.toString = a.toString)
//            }, clone: function () {
//                return this.init.prototype.extend(this)
//            }
//        }, r = l.WordArray = t.extend({
//            init: function (a, c) {
//                a = this.words = a || [];
//                this.sigBytes = c != p ? c : 4 * a.length
//            }, toString: function (a) {
//                return (a || v).stringify(this)
//            }, concat: function (a) {
//                var c = this.words, e = a.words, j = this.sigBytes;
//                a = a.sigBytes;
//                this.clamp();
//                if (j % 4)for (var k = 0; k < a; k++)c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length)for (k = 0; k < a; k += 4)c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
//                this.sigBytes += a;
//                return this
//            }, clamp: function () {
//                var a = this.words, c = this.sigBytes;
//                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
//                a.length = u.ceil(c / 4)
//            }, clone: function () {
//                var a = t.clone.call(this);
//                a.words = this.words.slice(0);
//                return a
//            }, random: function (a) {
//                for (var c = [], e = 0; e < a; e += 4)c.push(4294967296 * u.random() | 0);
//                return new r.init(c, a)
//            }
//        }), w = d.enc = {}, v = w.Hex = {
//            stringify: function (a) {
//                var c = a.words;
//                a = a.sigBytes;
//                for (var e = [], j = 0; j < a; j++) {
//                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
//                    e.push((k >>> 4).toString(16));
//                    e.push((k & 15).toString(16))
//                }
//                return e.join("")
//            }, parse: function (a) {
//                for (var c = a.length, e = [], j = 0; j < c; j += 2)e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
//                return new r.init(e, c / 2)
//            }
//        }, b = w.Latin1 = {
//            stringify: function (a) {
//                var c = a.words;
//                a = a.sigBytes;
//                for (var e = [], j = 0; j < a; j++)e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
//                return e.join("")
//            }, parse: function (a) {
//                for (var c = a.length, e = [], j = 0; j < c; j++)e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
//                return new r.init(e, c)
//            }
//        }, x = w.Utf8 = {
//            stringify: function (a) {
//                try {
//                    return decodeURIComponent(escape(b.stringify(a)))
//                } catch (c) {
//                    throw Error("Malformed UTF-8 data")
//                }
//            }, parse: function (a) {
//                return b.parse(unescape(encodeURIComponent(a)))
//            }
//        }, q = l.BufferedBlockAlgorithm = t.extend({
//            reset: function () {
//                this.j5o = new r.init;
//                this.bxl6f = 0
//            }, Uu9l: function (a) {
//                "string" == typeof a && (a = x.parse(a));
//                this.j5o.concat(a);
//                this.bxl6f += a.sigBytes
//            }, yL4P: function (a) {
//                var c = this.j5o, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k), b = a ? u.ceil(b) : u.max((b | 0) - this.bxe6Y, 0);
//                a = b * k;
//                j = u.min(4 * a, j);
//                if (a) {
//                    for (var q = 0; q < a; q += k)this.bxu6o(e, q);
//                    q = e.splice(0, a);
//                    c.sigBytes -= j
//                }
//                return new r.init(q, j)
//            }, clone: function () {
//                var a = t.clone.call(this);
//                a.j5o = this.j5o.clone();
//                return a
//            }, bxe6Y: 0
//        });
//        l.Hasher = q.extend({
//            cfg: t.extend(), init: function (a) {
//                this.cfg = this.cfg.extend(a);
//                this.reset()
//            }, reset: function () {
//                q.reset.call(this);
//                this.beT2x()
//            }, update: function (a) {
//                this.Uu9l(a);
//                this.yL4P();
//                return this
//            }, finalize: function (a) {
//                a && this.Uu9l(a);
//                return this.Uw9n()
//            }, blockSize: 16, beW2x: function (a) {
//                return function (b, e) {
//                    return (new a.init(e)).finalize(b)
//                }
//            }, cpM5R: function (a) {
//                return function (b, e) {
//                    return (new n.HMAC.init(a, e)).finalize(b)
//                }
//            }
//        });
//        var n = d.algo = {};
//        return d
//    }(Math);
//(function () {
//    var u = CryptoJS, p = u.lib.WordArray;
//    u.enc.Base64 = {
//        stringify: function (d) {
//            var l = d.words, p = d.sigBytes, t = this.bv5A;
//            d.clamp();
//            d = [];
//            for (var r = 0; r < p; r += 3)for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)d.push(t.charAt(w >>> 6 * (3 - v) & 63));
//            if (l = t.charAt(64))for (; d.length % 4;)d.push(l);
//            return d.join("")
//        }, parse: function (d) {
//            var l = d.length, s = this.bv5A, t = s.charAt(64);
//            t && (t = d.indexOf(t), -1 != t && (l = t));
//            for (var t = [], r = 0, w = 0; w < l; w++)if (w % 4) {
//                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
//                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
//                r++
//            }
//            return p.create(t, r)
//        }, bv5A: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
//    }
//})();
//(function (u) {
//    function p(b, n, a, c, e, j, k) {
//        b = b + (n & a | ~n & c) + e + k;
//        return (b << j | b >>> 32 - j) + n
//    }
//
//    function d(b, n, a, c, e, j, k) {
//        b = b + (n & c | a & ~c) + e + k;
//        return (b << j | b >>> 32 - j) + n
//    }
//
//    function l(b, n, a, c, e, j, k) {
//        b = b + (n ^ a ^ c) + e + k;
//        return (b << j | b >>> 32 - j) + n
//    }
//
//    function s(b, n, a, c, e, j, k) {
//        b = b + (a ^ (n | ~c)) + e + k;
//        return (b << j | b >>> 32 - j) + n
//    }
//
//    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
//    r = r.MD5 = v.extend({
//        beT2x: function () {
//            this.dE7x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
//        }, bxu6o: function (q, n) {
//            for (var a = 0; 16 > a; a++) {
//                var c = n + a, e = q[c];
//                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
//            }
//            var a = this.dE7x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5], t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12], D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3], f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]), m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]), g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]), g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]), h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]), f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]), m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]), g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]), h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]), f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]), m = s(m, g, h, f, A, 21, b[63]);
//            a[0] = a[0] + f | 0;
//            a[1] = a[1] + m | 0;
//            a[2] = a[2] + g | 0;
//            a[3] = a[3] + h | 0
//        }, Uw9n: function () {
//            var b = this.j5o, n = b.words, a = 8 * this.bxl6f, c = 8 * b.sigBytes;
//            n[c >>> 5] |= 128 << 24 - c % 32;
//            var e = u.floor(a / 4294967296);
//            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
//            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
//            b.sigBytes = 4 * (n.length + 1);
//            this.yL4P();
//            b = this.dE7x;
//            n = b.words;
//            for (a = 0; 4 > a; a++)c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
//            return b
//        }, clone: function () {
//            var b = v.clone.call(this);
//            b.dE7x = this.dE7x.clone();
//            return b
//        }
//    });
//    t.MD5 = v.beW2x(r);
//    t.HmacMD5 = v.cpM5R(r)
//})(Math);
//(function () {
//    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
//        cfg: d.extend({
//            keySize: 4,
//            hasher: p.MD5,
//            iterations: 1
//        }), init: function (d) {
//            this.cfg = this.cfg.extend(d)
//        }, compute: function (d, r) {
//            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
//                n && s.update(n);
//                var n = s.update(d).finalize(r);
//                s.reset();
//                for (var a = 1; a < p; a++)n = s.finalize(n), s.reset();
//                b.concat(n)
//            }
//            b.sigBytes = 4 * q;
//            return b
//        }
//    });
//    u.EvpKDF = function (d, l, p) {
//        return s.create(p).compute(d, l)
//    }
//})();
//CryptoJS.lib.Cipher || function (u) {
//    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64, w = p.algo.EvpKDF, v = d.Cipher = t.extend({
//        cfg: l.extend(),
//        createEncryptor: function (e, a) {
//            return this.create(this.beN2x, e, a)
//        },
//        createDecryptor: function (e, a) {
//            return this.create(this.cpL5Q, e, a)
//        },
//        init: function (e, a, b) {
//            this.cfg = this.cfg.extend(b);
//            this.bxN6H = e;
//            this.J5O = a;
//            this.reset()
//        },
//        reset: function () {
//            t.reset.call(this);
//            this.beT2x()
//        },
//        process: function (e) {
//            this.Uu9l(e);
//            return this.yL4P()
//        },
//        finalize: function (e) {
//            e && this.Uu9l(e);
//            return this.Uw9n()
//        },
//        keySize: 4,
//        ivSize: 4,
//        beN2x: 1,
//        cpL5Q: 2,
//        beW2x: function (e) {
//            return {
//                encrypt: function (b, k, d) {
//                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
//                }, decrypt: function (b, k, d) {
//                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
//                }
//            }
//        }
//    });
//    d.StreamCipher = v.extend({
//        Uw9n: function () {
//            return this.yL4P(!0)
//        }, blockSize: 1
//    });
//    var b = p.mode = {}, x = function (e, a, b) {
//        var c = this.bxT6N;
//        c ? this.bxT6N = u : c = this.bxW6Q;
//        for (var d = 0; d < b; d++)e[a + d] ^= c[d]
//    }, q = (d.BlockCipherMode = l.extend({
//        createEncryptor: function (e, a) {
//            return this.Encryptor.create(e, a)
//        }, createDecryptor: function (e, a) {
//            return this.Decryptor.create(e, a)
//        }, init: function (e, a) {
//            this.bxX6R = e;
//            this.bxT6N = a
//        }
//    })).extend();
//    q.Encryptor = q.extend({
//        processBlock: function (e, a) {
//            var b = this.bxX6R, c = b.blockSize;
//            x.call(this, e, a, c);
//            b.encryptBlock(e, a);
//            this.bxW6Q = e.slice(a, a + c)
//        }
//    });
//    q.Decryptor = q.extend({
//        processBlock: function (e, a) {
//            var b = this.bxX6R, c = b.blockSize, d = e.slice(a, a + c);
//            b.decryptBlock(e, a);
//            x.call(this, e, a, c);
//            this.bxW6Q = d
//        }
//    });
//    b = b.CBC = q;
//    q = (p.pad = {}).Pkcs7 = {
//        pad: function (a, b) {
//            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)l.push(d);
//            c = s.create(l, c);
//            a.concat(c)
//        }, unpad: function (a) {
//            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
//        }
//    };
//    d.BlockCipher = v.extend({
//        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
//            v.reset.call(this);
//            var a = this.cfg, b = a.iv, a = a.mode;
//            if (this.bxN6H == this.beN2x)var c = a.createEncryptor; else c = a.createDecryptor, this.bxe6Y = 1;
//            this.eI7B = c.call(a, this, b && b.words)
//        }, bxu6o: function (a, b) {
//            this.eI7B.processBlock(a, b)
//        }, Uw9n: function () {
//            var a = this.cfg.padding;
//            if (this.bxN6H == this.beN2x) {
//                a.pad(this.j5o, this.blockSize);
//                var b = this.yL4P(!0)
//            } else b = this.yL4P(!0), a.unpad(b);
//            return b
//        }, blockSize: 4
//    });
//    var n = d.CipherParams = l.extend({
//        init: function (a) {
//            this.mixIn(a)
//        }, toString: function (a) {
//            return (a || this.formatter).stringify(this)
//        }
//    }), b = (p.format = {}).OpenSSL = {
//        stringify: function (a) {
//            var b = a.ciphertext;
//            a = a.salt;
//            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
//        }, parse: function (a) {
//            a = r.parse(a);
//            var b = a.words;
//            if (1398893684 == b[0] && 1701076831 == b[1]) {
//                var c = s.create(b.slice(2, 4));
//                b.splice(0, 4);
//                a.sigBytes -= 16
//            }
//            return n.create({ciphertext: a, salt: c})
//        }
//    }, a = d.SerializableCipher = l.extend({
//        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
//            d = this.cfg.extend(d);
//            var l = a.createEncryptor(c, d);
//            b = l.finalize(b);
//            l = l.cfg;
//            return n.create({
//                ciphertext: b,
//                key: c,
//                iv: l.iv,
//                algorithm: a,
//                mode: l.mode,
//                padding: l.padding,
//                blockSize: a.blockSize,
//                formatter: d.format
//            })
//        }, decrypt: function (a, b, c, d) {
//            d = this.cfg.extend(d);
//            b = this.YJ0x(b, d.format);
//            return a.createDecryptor(c, d).finalize(b.ciphertext)
//        }, YJ0x: function (a, b) {
//            return "string" == typeof a ? b.parse(a, this) : a
//        }
//    }), p = (p.kdf = {}).OpenSSL = {
//        execute: function (a, b, c, d) {
//            d || (d = s.random(8));
//            a = w.create({keySize: b + c}).compute(a, d);
//            c = s.create(a.words.slice(b), 4 * c);
//            a.sigBytes = 4 * b;
//            return n.create({key: a, iv: c, salt: d})
//        }
//    }, c = d.PasswordBasedCipher = a.extend({
//        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
//            l = this.cfg.extend(l);
//            d = l.kdf.execute(d, b.keySize, b.ivSize);
//            l.iv = d.iv;
//            b = a.encrypt.call(this, b, c, d.key, l);
//            b.mixIn(d);
//            return b
//        }, decrypt: function (b, c, d, l) {
//            l = this.cfg.extend(l);
//            c = this.YJ0x(c, l.format);
//            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
//            l.iv = d.iv;
//            return a.decrypt.call(this, b, c, d.key, l)
//        }
//    })
//}();
//(function () {
//    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
//    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
//        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
//        l[e] = k;
//        s[k] = e;
//        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
//        t[e] = y << 24 | y >>> 8;
//        r[e] = y << 16 | y >>> 16;
//        w[e] = y << 8 | y >>> 24;
//        v[e] = y;
//        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
//        b[k] = y << 24 | y >>> 8;
//        x[k] = y << 16 | y >>> 16;
//        q[k] = y << 8 | y >>> 24;
//        n[k] = y;
//        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
//    }
//    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
//        beT2x: function () {
//            for (var a = this.J5O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cpJ5O = d + 6) + 1), e = this.cpB5G = [], j = 0; j < a; j++)if (j < d)e[j] = c[j]; else {
//                var k = e[j - 1];
//                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
//                e[j] = e[j - d] ^ k
//            }
//            c = this.cpA5F = [];
//            for (d = 0; d < a; d++)j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
//        }, encryptBlock: function (a, b) {
//            this.bya6U(a, b, this.cpB5G, t, r, w, v, l)
//        }, decryptBlock: function (a, c) {
//            var d = a[c + 1];
//            a[c + 1] = a[c + 3];
//            a[c + 3] = d;
//            this.bya6U(a, c, this.cpA5F, b, x, q, n, s);
//            d = a[c + 1];
//            a[c + 1] = a[c + 3];
//            a[c + 3] = d
//        }, bya6U: function (a, b, c, d, e, j, l, f) {
//            for (var m = this.cpJ5O, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
//            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
//            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
//            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
//            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
//            a[b] = q;
//            a[b + 1] = s;
//            a[b + 2] = t;
//            a[b + 3] = n
//        }, keySize: 8
//    });
//    u.AES = p.beW2x(d)
//})();
//function RSAKeyPair(a, b, c) {
//    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
//}
//function twoDigit(a) {
//    return (10 > a ? "0" : "") + String(a)
//}
//function encryptedString(a, b) {
//    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)c[e] = b.charCodeAt(e), e++;
//    for (; 0 != c.length % a.chunkSize;)c[e++] = 0;
//    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
//        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h)j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
//        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
//    }
//    return g.substring(0, g.length - 1)
//}
//function decryptedString(a, b) {
//    var e, f, g, h, c = b.split(" "), d = "";
//    for (e = 0; e < c.length; ++e)for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f)d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
//    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
//}
//function setMaxDigits(a) {
//    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
//    for (var b = 0; b < ZERO_ARRAY.length; b++)ZERO_ARRAY[b] = 0;
//    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
//}
//function BigInt(a) {
//    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
//}
//function biFromDecimal(a) {
//    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
//    if (c == a.length)d = new BigInt; else {
//        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;)d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
//        d.isNeg = b
//    }
//    return d
//}
//function biCopy(a) {
//    var b = new BigInt(!0);
//    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
//}
//function biFromNumber(a) {
//    var c, b = new BigInt;
//    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;)b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
//    return b
//}
//function reverseStr(a) {
//    var c, b = "";
//    for (c = a.length - 1; c > -1; --c)b += a.charAt(c);
//    return b
//}
//function biToString(a, b) {
//    var d, e, c = new BigInt;
//    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
//    return (a.isNeg ? "-" : "") + reverseStr(e)
//}
//function biToDecimal(a) {
//    var c, d, b = new BigInt;
//    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
//    return (a.isNeg ? "-" : "") + reverseStr(d)
//}
//function digitToHex(a) {
//    var b = 15, c = "";
//    for (i = 0; 4 > i; ++i)c += hexToChar[a & b], a >>>= 4;
//    return reverseStr(c)
//}
//function biToHex(a) {
//    var d, b = "";
//    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d)b += digitToHex(a.digits[d]);
//    return b
//}
//function charToHex(a) {
//    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
//    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
//}
//function hexToDigit(a) {
//    var d, b = 0, c = Math.min(a.length, 4);
//    for (d = 0; c > d; ++d)b <<= 4, b |= charToHex(a.charCodeAt(d));
//    return b
//}
//function biFromHex(a) {
//    var d, e, b = new BigInt, c = a.length;
//    for (d = c, e = 0; d > 0; d -= 4, ++e)b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
//    return b
//}
//function biFromString(a, b) {
//    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
//    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
//    return e.isNeg = c, e
//}
//function biDump(a) {
//    return (a.isNeg ? "-" : "") + a.digits.join(" ")
//}
//function biAdd(a, b) {
//    var c, d, e, f;
//    if (a.isNeg != b.isNeg)b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
//        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f)e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
//        c.isNeg = a.isNeg
//    }
//    return c
//}
//function biSubtract(a, b) {
//    var c, d, e, f;
//    if (a.isNeg != b.isNeg)b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
//        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f)d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
//        if (-1 == e) {
//            for (e = 0, f = 0; f < a.digits.length; ++f)d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
//            c.isNeg = !a.isNeg
//        } else c.isNeg = a.isNeg
//    }
//    return c
//}
//function biHighIndex(a) {
//    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
//    return b
//}
//function biNumBits(a) {
//    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
//    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)c <<= 1;
//    return e
//}
//function biMultiply(a, b) {
//    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
//    for (k = 0; f >= k; ++k) {
//        for (d = 0, i = k, j = 0; e >= j; ++j, ++i)h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
//        c.digits[k + e + 1] = d
//    }
//    return c.isNeg = a.isNeg != b.isNeg, c
//}
//function biMultiplyDigit(a, b) {
//    var c, d, e, f;
//    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
//    return result.digits[1 + c] = d, result
//}
//function arrayCopy(a, b, c, d, e) {
//    var g, h, f = Math.min(b + e, a.length);
//    for (g = b, h = d; f > g; ++g, ++h)c[h] = a[g]
//}
//function biShiftLeft(a, b) {
//    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
//    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h)d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
//    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
//}
//function biShiftRight(a, b) {
//    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
//    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h)d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
//    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
//}
//function biMultiplyByRadixPower(a, b) {
//    var c = new BigInt;
//    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
//}
//function biDivideByRadixPower(a, b) {
//    var c = new BigInt;
//    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
//}
//function biModuloByRadixPower(a, b) {
//    var c = new BigInt;
//    return arrayCopy(a.digits, 0, c.digits, 0, b), c
//}
//function biCompare(a, b) {
//    if (a.isNeg != b.isNeg)return 1 - 2 * Number(a.isNeg);
//    for (var c = a.digits.length - 1; c >= 0; --c)if (a.digits[c] != b.digits[c])return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
//    return 0
//}
//function biDivideModulo(a, b) {
//    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
//    if (d > c)return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
//    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;)b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
//    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
//    for (l = j; l > h; --l) {
//        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
//        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
//    }
//    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
//}
//function biDivide(a, b) {
//    return biDivideModulo(a, b)[0]
//}
//function biModulo(a, b) {
//    return biDivideModulo(a, b)[1]
//}
//function biMultiplyMod(a, b, c) {
//    return biModulo(biMultiply(a, b), c)
//}
//function biPow(a, b) {
//    for (var c = bigOne, d = a; ;) {
//        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b)break;
//        d = biMultiply(d, d)
//    }
//    return c
//}
//function biPowMod(a, b, c) {
//    for (var d = bigOne, e = a, f = b; ;) {
//        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f))break;
//        e = biMultiplyMod(e, e, c)
//    }
//    return d
//}
//function BarrettMu(a) {
//    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
//    var b = new BigInt;
//    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
//}
//function BarrettMu_modulo(a) {
//    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
//    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;)h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
//    return h
//}
//function BarrettMu_multiplyMod(a, b) {
//    var c = biMultiply(a, b);
//    return this.modulo(c)
//}
//function BarrettMu_powMod(a, b) {
//    var d, e, c = new BigInt;
//    for (c.digits[0] = 1, d = a, e = b; ;) {
//        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e))break;
//        d = this.multiplyMod(d, d)
//    }
//    return c
//}
//var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
//setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
//
//function a(a) {
//    var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
//    for (d = 0; a > d; d += 1)e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
//    return c
//}
//
//function b(a, b) {
//    var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"), e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {
//        iv: d,
//        mode: CryptoJS.mode.CBC
//    });
//    return f.toString()
//}
//
//function c(a, b, c) {
//    var d, e;
//    return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
//}
//
//function d(d, e, f, g) {
//    window.console.info("my1:" + d)
//    window.console.info("my2:" + e)
//    window.console.info("my3:" + f)
//    window.console.info("my4:" + g)
//    var h = {}, i = a(16);
//    return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
//}
//
//function e(a, b, d, e) {
//    var f = {};
//    return f.encText = c(a + e, b, d), f
//}
(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(FT5Y) {
        if (!FT5Y || !FT5Y.length) return null;
        var bdy3x = window;
        for (var a = FT5Y.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bdy3x = bdy3x[a[i]] = bdy3x[a[i]] || {}, i++);
        return bdy3x
    };
    NEJ.Q = function(bJ5O, FT5Y) {
        bJ5O = bJ5O || NEJ.O;
        var br5w = FT5Y.split(".");
        for (var i = 0, l = br5w.length; i < l; i++) {
            bJ5O = bJ5O[br5w[i]];
            if (!bJ5O) break
        }
        return bJ5O
    };
    NEJ.C = function() {
        var bxy7r = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bxF7y = function(D4H, bz5E) {
            for (var x in bz5E) if (D4H == bz5E[x]) return x;
            return null
        };
        var biP4T = {
            cx5C: 0,
            bl5q: 1,
            bD5I: 2,
            bW5b: 3,
            bL5Q: 4,
            eZ6T: 5,
            ke8W: 6,
            eD6x: 7
        }, uV2x = {
            cD5I: 0,
            bm5r: 1,
            bG5L: 2,
            cg5l: 3,
            bR5W: 4,
            gC7v: 5,
            kZ8R: 6,
            gq7j: 7
        };
        return function() {
            var fK7D = function() {
                this.byk8c();
                return this.cx5C.apply(this, arguments)
            };
            fK7D.prototype.byk8c = NEJ.F;
            fK7D.prototype.cx5C = NEJ.F;
            fK7D.O4S = function(Db5g, byR8J) {
                if (bxy7r(Db5g)) return;
                if (byR8J == null || !! byR8J) NEJ.X(this, Db5g, bxy7r);
                this.cwY0x = Db5g;
                this.cs5x = Db5g.prototype;
                var bI5N = function() {};
                bI5N.prototype = Db5g.prototype;
                this.prototype = new bI5N;
                var Ha6U = this.prototype;
                Ha6U.constructor = this;
                var ck5p;
                for (var x in biP4T) {
                    ck5p = bxF7y(biP4T[x], uV2x);
                    if (!ck5p || !this.cs5x[x]) continue;
                    Ha6U[x] = function(V4Z) {
                        return function() {
                            this[V4Z].apply(this, arguments)
                        }
                    }(ck5p)
                }
                var Fs5x = {};
                for (var x in uV2x) {
                    ck5p = bxF7y(uV2x[x], biP4T);
                    if (!ck5p || !this.cs5x[ck5p]) continue;
                    Fs5x[ck5p] = Db5g;
                    Ha6U[x] = function(V4Z) {
                        return function() {
                            var o4s, bI5N = this.bfG3x[V4Z],
                                bev3x = bI5N.prototype[V4Z];
                            this.bfG3x[V4Z] = bI5N.cwY0x || Db5g;
                            if ( !! bev3x) o4s = bev3x.apply(this, arguments);
                            this.bfG3x[V4Z] = Db5g;
                            return o4s
                        }
                    }(ck5p)
                }
                Ha6U.byk8c = function() {
                    this.bfG3x = NEJ.X({}, Fs5x)
                };
                Ha6U.cHU3x = Ha6U.cD5I;
                return Ha6U
            };
            return fK7D
        }
    }();
    NEJ.X = function(gw7p, bS5X, dV6P) {
        if (!gw7p || !bS5X) return gw7p;
        dV6P = dV6P || NEJ.F;
        for (var x in bS5X) {
            if (bS5X.hasOwnProperty(x) && !dV6P(bS5X[x], x)) gw7p[x] = bS5X[x]
        }
        return gw7p
    };
    NEJ.EX = function(gw7p, bS5X) {
        if (!gw7p || !bS5X) return gw7p;
        for (var x in gw7p) {
            if (gw7p.hasOwnProperty(x) && bS5X[x] != null) gw7p[x] = bS5X[x]
        }
        return gw7p
    };
    var HN6H = Function.prototype;
    HN6H.eB6v = function(ly8q, xs3x) {
        var f = NEJ.F,
            xs3x = xs3x || f,
            ly8q = ly8q || f,
            dt6n = this;
        return function() {
            var d4h = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            ly8q(d4h);
            if (!d4h.stopped) {
                d4h.value = dt6n.apply(this, d4h.args);
                xs3x(d4h)
            }
            return d4h.value
        }
    };
    HN6H.g4k = function() {
        var bf4j = arguments,
            gw7p = arguments[0],
            bpR6L = this;
        return function() {
            var xq3x = NEJ.R.slice.call(bf4j, 1);
            NEJ.R.push.apply(xq3x, arguments);
            return bpR6L.apply(gw7p || window, xq3x)
        }
    };
    HN6H.ew6q = function() {
        var bf4j = arguments,
            gw7p = NEJ.R.shift.call(bf4j),
            bpR6L = this;
        return function() {
            NEJ.R.push.apply(arguments, bf4j);
            return bpR6L.apply(gw7p || window, arguments)
        }
    };
    var HN6H = String.prototype;
    if (!HN6H.trim) {
        HN6H.trim = function() {
            var dh6b = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(dh6b, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        N4R = c4g("nej.p"),
        ub2x = window.navigator.platform,
        vn2x = window.navigator.userAgent;
    var lk8c = {
        mac: ub2x,
        win: ub2x,
        linux: ub2x,
        ipad: vn2x,
        ipod: vn2x,
        iphone: ub2x,
        android: vn2x
    };
    N4R.HP6J = lk8c;
    for (var x in lk8c) lk8c[x] = (new RegExp(x, "i")).test(lk8c[x]);
    lk8c.ios = lk8c.ipad || lk8c.iphone || lk8c.ipod;
    lk8c.tablet = lk8c.ipad;
    lk8c.desktop = lk8c.mac || lk8c.win || lk8c.linux && !lk8c.android;
    var is8k = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    N4R.ds6m = is8k;
    if (/msie\s+(.*?);/i.test(vn2x) || /trident\/.+rv:([\d\.]+)/i.test(vn2x)) {
        is8k.engine = "trident";
        is8k.browser = "ie";
        is8k.version = RegExp.$1;
        is8k.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mz9q = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        is8k.release = mz9q[document.documentMode] || mz9q[parseInt(is8k.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vn2x)) {
        is8k.engine = "webkit";
        is8k.release = RegExp.$1 || "";
        is8k.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vn2x)) {
        is8k.engine = "gecko";
        is8k.release = RegExp.$1 || "";
        is8k.browser = "firefox";
        is8k.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vn2x)) is8k.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vn2x)) {
        is8k.engine = "presto";
        is8k.release = RegExp.$1 || "";
        is8k.browser = "opera";
        is8k.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vn2x)) is8k.version = RegExp.$1 || ""
    }
    if (is8k.browser == "unknow") {
        var mz9q = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mz9q.length, V4Z; i < l; i++) {
            V4Z = mz9q[i] == "safari" ? "version" : mz9q[i];
            if ((new RegExp(V4Z + "/(.*?)(?=\\s|$)", "i")).test(vn2x)) {
                is8k.browser = mz9q[i];
                is8k.version = RegExp.$1.trim();
                break
            }
        }
    }
    N4R.bzU8M = {};
    var beq3x = is8k.engine != "trident";
    N4R.nj9a = {
        gecko: is8k.engine != "gecko",
        webkit: is8k.engine != "webkit",
        presto: is8k.engine != "presto",
        trident0: beq3x || is8k.release > "2.0",
        trident1: beq3x || is8k.release < "6.0",
        trident2: beq3x || is8k.release > "3.0",
        trident: beq3x || is8k.release >= "6.0"
    }
})();
(function() {
    var it8l = NEJ.P("nej.c"),
        R4V = {};
    var bgp3x = function() {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y4c) {
            Y4c = Y4c || "";
            if (dh6b.test(Y4c)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var MQ7J = function() {
        var bAd8V = function(i4m, bz5E) {
            if (!i4m || !i4m.length) return;
            for (var i = 0, l = i4m.length, jK8C; i < l; i++) {
                jK8C = i4m[i];
                if (jK8C.indexOf("://") > 0) bz5E[bgp3x(jK8C)] = jK8C
            }
        };
        var bg4k = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bS5X) {
            it8l.HS6M("root", bS5X.root || "/res/");
            var bqm6g, fT7M = it8l.B4F("root");
            for (var x in bg4k) {
                bqm6g = bg4k[x];
                it8l.HS6M(x, bS5X[bqm6g.name] || fT7M + bqm6g.dft)
            }
            var CP4T = bS5X.p_csrf;
            if (CP4T == !0) {
                CP4T = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            it8l.HS6M("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, CP4T));
            R4V.frames = {};
            bAd8V(bS5X.p_frame, R4V.frames);
            R4V.flashs = {};
            bAd8V(bS5X.p_flash, R4V.flashs)
        }
    }();
    it8l.HS6M = function(J4N, D4H) {
        R4V[J4N] = D4H
    };
    it8l.B4F = function(J4N) {
        return R4V[J4N]
    };
    it8l.cjL7E = function(Y4c) {
        var sz1x = bgp3x(Y4c);
        return R4V.frames[sz1x] || sz1x + "/res/nej_proxy_frame.html"
    };
    it8l.csE9v = function(Y4c) {
        return R4V.flashs[bgp3x(Y4c)]
    };
    MQ7J(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        it8l = c4g("nej.c"),
        bS5X = window.NEJ_CONF || NEJ.O;
    if (N4R.nj9a.trident) return;
    it8l.HS6M("storage.swf", bS5X.storage || it8l.B4F("root") + "nej_storage.swf");
    if (N4R.ds6m.release < "4.0") {
        it8l.HS6M("blank.png", bS5X.blank || it8l.B4F("root") + "nej_blank.gif")
    }
    var i4m = bS5X.xdr,
        gK7D = /^(https?:\/\/.*?)(?=\/|$)/i,
        ku8m = /[\/?=&]/i;
    var bAZ8R = function(Y4c) {
        return (gK7D.test(Y4c) ? RegExp.$1 : "").toLowerCase()
    };
    if ( !! i4m && !! i4m.length) for (var i = i4m.length - 1, Y4c, J4N; i >= 0; i--) {
        Y4c = i4m[i];
        J4N = bAZ8R(Y4c);
        if ( !! J4N) it8l.HS6M(J4N, Y4c)
    }
    it8l.cHG3x = function(Y4c) {
        var J4N = bAZ8R(Y4c);
        if (!J4N) {
            if (ku8m.test(Y4c)) {
                J4N = location.protocol + "//" + location.host
            } else if (Y4c.indexOf("://") < 0) {
                J4N = location.protocol + "//" + Y4c
            } else {
                J4N = Y4c
            }
        }
        return it8l.B4F(J4N) || J4N + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c4g = NEJ.P,
        it8l = c4g("nej.c"),
        N4R = c4g("nej.g"),
        gJ7C = +(new Date);
    N4R.cHC3x = 1e4 - gJ7C;
    N4R.bua7T = 10001 - gJ7C;
    N4R.cHB3x = 10002 - gJ7C;
    N4R.bBG8y = 10003 - gJ7C;
    N4R.bYx5C = 10004 - gJ7C;
    N4R.cHv3x = 10005 - gJ7C;
    N4R.bie4i = 10006 - gJ7C;
    N4R.cel6f = 10007 - gJ7C;
    N4R.yg3x = "Content-Type";
    N4R.cHq3x = "text/plain";
    N4R.EK5P = "multipart/form-data";
    N4R.cil7e = "application/x-www-form-urlencoded";
    N4R.bkx4B = it8l.B4F("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c4g = NEJ.P,
        fx6r = NEJ.R,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        be4i = c4g("nej.h");
    var kb8T = N4R.ds6m.prefix,
        bDQ9H = N4R.bzU8M,
        ckG8y = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        }, ckJ8B = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Nh7a = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var MQ7J = function() {
        var sF1x = be4i.bFT9K();
        bDQ9H.css3d = !! sF1x && sF1x.m41 != null;
        var dh6b = /-([a-z])/g;
        for (var x in Nh7a) {
            Nh7a[bFU9L(x)] = Nh7a[x]
        }
    };
    var bFU9L = function() {
        var dh6b = /-([a-z])/g;
        return function(V4Z) {
            V4Z = V4Z || "";
            return V4Z.replace(dh6b, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bGh9Y = function(V4Z) {
        return (!bDQ9H.css3d ? ckG8y : ckJ8B)[V4Z]
    };
    var bGz0x = function() {
        var dh6b = /\s+/;
        return function(fK7D) {
            fK7D = (fK7D || "").trim();
            return !!fK7D ? fK7D.split(dh6b) : null
        }
    }();
    var bdY3x = function(F4J, u4y, fK7D) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return;
        k4o.bd4h(bGz0x(fK7D), function(dZ6T) {
            F4J.classList[u4y](dZ6T)
        })
    };
    be4i.HV6P = function(i4m) {
        return fx6r.slice.call(i4m, 0)
    };
    be4i.bjx4B = function(F4J) {
        return be4i.HV6P(F4J.children)
    };
    be4i.bjO4S = function(F4J, fK7D) {
        return be4i.HV6P(F4J.getElementsByClassName(fK7D))
    };
    be4i.bjP4T = function(F4J, HW6Q) {
        bdY3x(F4J, "add", HW6Q)
    };
    be4i.bkd4h = function(F4J, HX6R) {
        bdY3x(F4J, "remove", HX6R)
    };
    be4i.Np8h = function(F4J, HX6R, HW6Q) {
        bdY3x(F4J, "remove", HX6R);
        bdY3x(F4J, "add", HW6Q)
    };
    be4i.bmV5a = function(F4J, fK7D) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return !1;
        var i4m = F4J.classList;
        if (!i4m || !i4m.length) return !1;
        return k4o.di6c(bGz0x(fK7D), function(dZ6T) {
            return i4m.contains(dZ6T)
        }) >= 0
    };
    be4i.bnO5T = function(F4J, dZ6T) {};
    be4i.bov5A = function(F4J) {};
    be4i.boW5b = function(ge7X, on9e) {
        ge7X.selectionEnd = on9e.end || 0;
        ge7X.selectionStart = on9e.start || 0;
        ge7X.focus()
    };
    be4i.bqL6F = function(ge7X) {
        return {
            end: ge7X.selectionEnd,
            start: ge7X.selectionStart
        }
    };
    be4i.bri6c = function() {
        var Ez5E = function(dZ6T, d4h) {
            var F4J = h4l.W4a(d4h);
            if (!F4J.value) a3x.x4B(F4J, dZ6T)
        };
        var HZ6T = function(dZ6T, d4h) {
            a3x.y4C(h4l.W4a(d4h), dZ6T)
        };
        return function(F4J, fl6f, dZ6T) {
            if (fl6f == 1) {
                h4l.s4w(F4J, "blur", Ez5E.g4k(null, dZ6T))
            }
            if (fl6f == 1 || fl6f == -1) {
                h4l.s4w(F4J, "focus", HZ6T.g4k(null, dZ6T))
            }
        }
    }();
    be4i.bfH3x = function(G4K) {
        return (new XMLSerializer).serializeToString(G4K) || ""
    };
    be4i.bfQ3x = function(Cu4y) {
        var fT7M = (new DOMParser).parseFromString(Cu4y, "text/xml").documentElement;
        return fT7M.nodeName == "parsererror" ? null : fT7M
    };
    be4i.bgn3x = function(F4J) {};
    be4i.oi9Z = function(F4J) {
        return null
    };
    be4i.bgs3x = function(F4J) {
        return null
    };
    be4i.bgw3x = function(dO6I) {};
    be4i.bhM4Q = function() {
        var bf4j = be4i.HV6P(arguments);
        bf4j[0] = a3x.B4F(bf4j[0]);
        if (!bf4j[0]) return null;
        bf4j[1] = (bf4j[1] || "").toLowerCase();
        if (!bf4j[1]) return null;
        return bf4j
    };
    be4i.Ct4x = function() {
        var xd3x = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }, jl8d = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var czo1x = function(u4y) {
            return (kb8T.evt || kb8T.pro) + u4y
        };
        return function() {
            var bf4j = be4i.bhM4Q.apply(be4i, arguments);
            if (!bf4j) return;
            var bdR3x = jl8d[bf4j[1]],
                bdQ3x = xd3x[bf4j[1]];
            if ( !! bdR3x) {
                bf4j[4] = bf4j[1];
                bf4j[1] = czo1x(bdR3x)
            } else if ( !! bdQ3x) {
                var V4Z = "on" + bf4j[1];
                if (!(V4Z in bf4j[0])) {
                    bf4j[4] = bf4j[1];
                    bf4j[1] = bdQ3x
                }
            }
            return bf4j
        }
    }();
    be4i.biQ4U = function() {
        var bf4j = arguments;
        bf4j[0].addEventListener(bf4j[1], bf4j[2], !! bf4j[3])
    };
    be4i.bdO3x = function() {
        var bf4j = arguments;
        bf4j[0].removeEventListener(bf4j[1], bf4j[2], !! bf4j[3])
    };
    be4i.bjh4l = function(F4J, u4y, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(u4y, !0, !0);
        NEJ.X(d4h, e4i);
        F4J.dispatchEvent(d4h)
    };
    be4i.bFT9K = function() {
        var gK7D = /\((.*?)\)/,
            ku8m = /\s*,\s*/,
            i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdN3x = function(sF1x) {
            var im8e = {};
            if (gK7D.test(sF1x || "")) {
                k4o.bd4h(RegExp.$1.split(ku8m), function(D4H, r4v) {
                    im8e[i4m[r4v]] = D4H || ""
                })
            }
            return im8e
        };
        return function(sF1x) {
            if ( !! window.CSSMatrix) return new CSSMatrix(sF1x);
            var V4Z = kb8T.clz + "CSSMatrix";
            if ( !! window[V4Z]) return new window[V4Z](sF1x || "");
            return bdN3x(sF1x)
        }
    }();
    be4i.bGJ0x = function() {
        var dh6b = /\{(.*?)\}/g;
        return function(V4Z, bz5E) {
            bz5E = bz5E || o;
            var or9i = bGh9Y(V4Z);
            return !or9i ? "" : or9i.replace(dh6b, function($1, $2) {
                var br5w = $2.split("|");
                return bz5E[br5w[0]] || br5w[1] || "0"
            })
        }
    }();
    be4i.bkE4I = function(F4J, V4Z, D4H) {
        F4J.style[be4i.bGK0x(V4Z)] = D4H
    };
    be4i.bGK0x = function() {
        var dh6b = /^[a-z]/,
            bkJ4N = kb8T.css;
        var cAr1x = function(V4Z) {
            return V4Z.replace(dh6b, function($1) {
                return bkJ4N + $1.toUpperCase()
            })
        };
        return function(V4Z) {
            V4Z = bFU9L(V4Z);
            var cAy1x = be4i.cAE1x(V4Z, Nh7a);
            return cAy1x ? cAr1x(V4Z) : V4Z
        }
    }();
    be4i.cAE1x = function() {
        var dh6b = /^([a-z]+?)[A-Z]/;
        return function(V4Z, bz5E) {
            if (!bz5E[V4Z]) {
                if (dh6b.test(V4Z)) V4Z = RegExp.$1
            }
            return !!bz5E[V4Z]
        }
    }();
    be4i.cBQ2x = function() {
        var dh6b = /\$<(.*?)>/gi,
            bkJ4N = "-" + kb8T.css.toLowerCase() + "-";
        return function(kh8Z) {
            return kh8Z.replace(dh6b, function($1, $2) {
                var eQ6K = $2,
                    br5w = eQ6K.split("|"),
                    or9i = bGh9Y(br5w[0]);
                if ( !! or9i) {
                    return be4i.bGJ0x(br5w[0], k4o.hv7o(br5w[1]))
                }
                return !be4i.cCf2x(eQ6K, Nh7a) ? eQ6K : bkJ4N + eQ6K
            })
        }
    }();
    be4i.cCf2x = function(V4Z, bz5E) {
        return !!bz5E[V4Z]
    };
    be4i.bpq5v = function(ch5m, kh8Z) {
        ch5m.textContent = kh8Z
    };
    be4i.bqi6c = function(ch5m, kh8Z) {
        var zN4R = ch5m.sheet,
            bq5v = zN4R.cssRules.length;
        zN4R.insertRule(kh8Z, bq5v);
        return zN4R.cssRules[bq5v]
    };
    be4i.cGn3x = function(F4J, e4i) {};
    be4i.bdB3x = function(bdA3x) {
        return (bdA3x || "").toLowerCase() != "transparent"
    };
    be4i.cCP2x = function(F4J) {};
    be4i.btl6f = function(F4J, V4Z) {
        if ( !! F4J.getAttribute) return F4J.getAttribute(V4Z);
        return ""
    };
    be4i.bdz3x = function(eK6E) {
        a3x.cJ5O(eK6E)
    };
    MQ7J()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.p"),
        be4i = c4g("nej.h");
    if (N4R.nj9a.trident0) return;
    var gJ7C = +(new Date);
    R4V = {};
    be4i.bnO5T = be4i.bnO5T.eB6v(function(d4h) {
        d4h.stopped = !0;
        var bf4j = d4h.args,
            C4G = a3x.lv8n(bf4j[0]),
            J4N = "hover-" + C4G;
        if (!C4G || !! R4V[J4N]) return;
        R4V[J4N] = !0;
        h4l.s4w(C4G, "mouseenter", a3x.y4C.g4k(a3x, C4G, bf4j[1]));
        h4l.s4w(C4G, "mouseleave", a3x.x4B.g4k(a3x, C4G, bf4j[1]))
    });
    be4i.bov5A = function() {
        var cGl3x = function() {};
        return be4i.bov5A.eB6v(function(d4h) {
            d4h.stopped = !0;
            var F4J = d4h.args[0],
                C4G = "fixed-" + a3x.lv8n(F4J);
            if ( !! R4V[C4G]) return;
            var bg4k = {};
            R4V[C4G] = bg4k
        })
    }();
    be4i.bgn3x = be4i.bgn3x.eB6v(function(d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0],
            ch5m = F4J.style,
            bGY0x = a3x.oy9p();
        ch5m.width = bGY0x.scrollWidth + "px";
        ch5m.height = bGY0x.scrollHeight + "px"
    });
    be4i.oi9Z = be4i.oi9Z.eB6v(function(d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0],
            kX8P = R4V[F4J.msk];
        if (!kX8P) {
            F4J.msk = gJ7C++;
            kX8P = a3x.dg6a("iframe");
            kX8P.style.position = "absolute";
            R4V[F4J.msk] = kX8P
        }
        d4h.value = kX8P;
        var ch5m = kX8P.style;
        ch5m.top = (parseInt(a3x.df5k(F4J, "top")) || 0) + "px";
        ch5m.left = (parseInt(a3x.df5k(F4J, "left")) || 0) + "px";
        ch5m.width = F4J.offsetWidth + "px";
        ch5m.height = F4J.offsetHeight + "px";
        F4J.insertAdjacentElement("beforeBegin", kX8P)
    });
    be4i.bgs3x = be4i.bgs3x.eB6v(function(d4h) {
        d4h.stopped = !0;
        var kX8P = R4V[d4h.args[0].msk];
        if ( !! kX8P) a3x.mY9P(kX8P)
    })
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        be4i = c4g("nej.h");
    if (N4R.nj9a.trident1) return;
    be4i.Ct4x = function() {
        var xd3x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be4i.Ct4x.eB6v(function(d4h) {
            var bf4j = be4i.bhM4Q.apply(be4i, d4h.args);
            if (!bf4j) {
                d4h.stopped = !0;
                return
            }
            var u4y = xd3x[bf4j[1]];
            if ( !! u4y && ("on" + u4y).toLowerCase() in bf4j[0]) {
                bf4j[4] = bf4j[1];
                bf4j[1] = u4y;
                d4h.stopped = !0;
                d4h.value = bf4j
            }
        })
    }();
    be4i.bdB3x = function(bdA3x) {
        return !0
    };
    be4i.bdz3x = be4i.bdz3x.eB6v(function(d4h) {
        d4h.stopped = !0;
        var eK6E = d4h.args[0];
        a3x.ba4e(eK6E, "display", "none");
        try {
            eK6E.contentWindow.document.body.innerHTML = " "
        } catch (ex) {}
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        be4i = c4g("nej.h"),
        bmb5g = {};
    if (N4R.nj9a.trident) return;
    be4i.HV6P = be4i.HV6P.eB6v(function(d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0,
            o4s = [];
        while ( !! i4m[r4v]) {
            o4s.push(i4m[r4v++])
        }
        d4h.value = o4s
    });
    be4i.bjx4B = be4i.bjx4B.eB6v(function(d4h) {
        d4h.stopped = !0;
        var br5w = [];
        k4o.bd4h(d4h.args[0].childNodes, function(f4j) {
            if (f4j.nodeType == 1) br5w.push(f4j)
        });
        d4h.value = br5w
    });
    be4i.bjO4S = be4i.bjO4S.eB6v(function(d4h) {
        var F4J = d4h.args[0];
        if ( !! F4J.getElementsByClassName) return;
        d4h.stopped = !0;
        var o4s = [],
            Ny8q = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bd4h(F4J.getElementsByTagName("*"), function(f4j) {
            if (Ny8q.test(f4j.className)) o4s.push(f4j)
        });
        d4h.value = o4s
    });
    be4i.boW5b = be4i.boW5b.eB6v(function(d4h) {
        var ge7X = d4h.args[0],
            on9e = d4h.args[1];
        if (ge7X.selectionStart == null) {
            d4h.stopped = !0;
            var db5g = ge7X.createTextRange();
            db5g.collapse(!0);
            db5g.moveStart("character", on9e.start);
            db5g.moveEnd("character", on9e.end - on9e.start);
            db5g.select();
            ge7X.focus()
        }
    });
    be4i.bqL6F = be4i.bqL6F.eB6v(function(d4h) {
        var ge7X = d4h.args[0];
        ge7X.focus();
        if (ge7X.selectionStart == null) {
            d4h.stopped = !0;
            var bHg0x = document.selection.createRange();
            var bHh0x = ge7X.createTextRange();
            bHh0x.moveToBookmark(bHg0x.getBookmark());
            var bhQ4U = ge7X.createTextRange();
            bhQ4U.collapse(!0);
            bhQ4U.setEndPoint("EndToStart", bHh0x);
            var hz7s = bhQ4U.text.length;
            d4h.value = {
                start: hz7s,
                end: hz7s + bHg0x.text.length
            }
        }
    });
    be4i.bfH3x = be4i.bfH3x.eB6v(function(d4h) {
        if ( !! window.XMLSerializer) return;
        d4h.stopped = !0;
        var F4J = d4h.args[0];
        d4h.value = F4J.xml != null ? F4J.xml : F4J.outHTML
    });
    be4i.bfQ3x = function() {
        var NG8y = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bWo4s = function() {
            try {
                for (var i = 0, l = NG8y.length; i < l; i++) return new ActiveXObject(NG8y[i])
            } catch (ex) {
                return null
            }
        };
        return be4i.bfQ3x.eB6v(function(d4h) {
            if ( !! window.DOMParser) return;
            d4h.stopped = !0;
            var nT9K = bWo4s();
            if ( !! nT9K && nT9K.loadXML(d4h.args[0]) && !nT9K.parseError.errorCode) d4h.value = nT9K.documentElement
        })
    }();
    be4i.Ct4x = function() {
        var jl8d = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jl8d) bmb5g[jl8d[x]] = !0;
        var bYu5z = function(F4J, u4y) {
            if ("on" + u4y in F4J) return null;
            return jl8d[u4y] || ""
        };
        var bYC5H = function(u4y, dt6n) {
            var cK5P = dt6n;
            switch (u4y) {
                case "readystatechange":
                    cK5P = function(d4h) {
                        var F4J = h4l.W4a(d4h) || this;
                        if (F4J.readyState == "loaded" || F4J.readyState == "complete") {
                            d4h.target = F4J;
                            dt6n.call(F4J, d4h)
                        }
                    };
                    break;
                case "propertychange":
                    cK5P = function(d4h) {
                        var F4J = h4l.W4a(d4h) || this;
                        if ("value" in F4J && d4h.propertyName == "value") {
                            d4h.target = F4J;
                            dt6n.call(F4J, d4h)
                        }
                    };
                    break
            }
            return cK5P
        };
        return be4i.Ct4x.eB6v(function(d4h) {
            var bf4j = be4i.bhM4Q.apply(be4i, d4h.args);
            if (!bf4j) {
                d4h.stopped = !0;
                return
            }
            var u4y = bYu5z(bf4j[0], bf4j[1]);
            if ( !! u4y) {
                d4h.stopped = !0;
                bf4j[4] = bf4j[1];
                bf4j[1] = u4y;
                if ( !! bf4j[2]) {
                    bf4j[5] = bf4j[2];
                    bf4j[2] = bYC5H(bf4j[1], bf4j[2])
                }
                d4h.value = bf4j
            }
        }, function(d4h) {
            var bf4j = d4h.value;
            if (!bf4j[0] || !k4o.gG7z(bf4j[2])) return;
            if (!k4o.gG7z(bf4j[5])) bf4j[5] = bf4j[2];
            bf4j[2] = bf4j[2].g4k(bf4j[0])
        })
    }();
    be4i.biQ4U = be4i.biQ4U.eB6v(function(d4h) {
        var bf4j = d4h.args;
        if ( !! bmb5g[bf4j[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bf4j[0].attachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.bdO3x = be4i.bdO3x.eB6v(function(d4h) {
        var bf4j = d4h.args;
        if ( !! bmb5g[bf4j[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bf4j[0].detachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.bjh4l = be4i.bjh4l.eB6v(function(d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bf4j = d4h.args,
                bJt0x = document.createEventObject();
            NEJ.X(bJt0x, bf4j[2]);
            try {
                bf4j[0].fireEvent("on" + bf4j[1], bJt0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be4i.bkE4I = be4i.bkE4I.eB6v(function(d4h) {
        var bf4j = d4h.args,
            V4Z = bf4j[1].toLowerCase();
        if (V4Z == "opacity" && !(V4Z in document.body.style)) {
            bf4j[1] = "filter";
            bf4j[2] = "alpha(opacity=" + bf4j[2] * 100 + ")"
        }
    });
    be4i.bpq5v = function() {
        var fo6i = 30;
        return be4i.bpq5v.eB6v(function(d4h) {
            var F4J = d4h.args[0];
            if (!F4J.styleSheet) return;
            d4h.stopped = !0;
            var kh8Z = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fo6i) {
                F4J = i4m[fo6i];
                kh8Z = F4J.cssText + kh8Z
            } else {
                F4J = F4J.styleSheet
            }
            F4J.cssText = kh8Z
        })
    }();
    be4i.bqi6c = be4i.bqi6c.eB6v(function(d4h) {
        var bf4j = d4h.args,
            zN4R = bf4j[0].sheet;
        if ( !! zN4R) return;
        d4h.stopped = !0;
        var zN4R = bf4j[0].styleSheet,
            bq5v = zN4R.rules.length,
            br5w = bf4j[1].split(/[\{\}]/);
        zN4R.addRule(br5w[0], br5w[1], bq5v);
        d4h.value = zN4R.rules[bq5v]
    });
    be4i.bri6c = function() {
        var Ez5E = function(dZ6T, d4h) {
            a3x.x4B(h4l.W4a(d4h), dZ6T)
        };
        return be4i.bri6c.eB6v(function(d4h) {
            if (N4R.ds6m.release >= "4.0") return;
            var bf4j = d4h.args;
            if (bf4j[1] != 1) {
                h4l.s4w(bf4j[0], "blur", Ez5E.g4k(null, bf4j[2]));
                bf4j[1] = -1
            }
        })
    }();
    be4i.bdB3x = function(bdA3x) {
        return !0
    };
    be4i.btl6f = be4i.btl6f.eB6v(function(d4h) {
        var bf4j = d4h.args,
            f4j = (bf4j[0].attributes || bb4f)[bf4j[1]];
        if ( !! f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function(d4h) {
        var bf4j = d4h.args;
        if (bf4j[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
    });
    if (N4R.ds6m.release < 5) {
        be4i.bgw3x = function() {
            var eg6a, eK6E, jZ8R = [],
                bkc4g = "cb-" + +(new Date),
                bo5t = '<script>parent.nej.h["' + bkc4g + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bJA0x = function() {
                eg6a = window.clearTimeout(eg6a);
                if (!jZ8R.length) return;
                var dO6I = jZ8R.shift();
                try {
                    var wK2x = eK6E.contentWindow.document;
                    wK2x.open();
                    wK2x.write("<head><title>");
                    wK2x.write(document.title);
                    wK2x.write("</title>");
                    wK2x.write(bo5t.replace("#<HASH>", encodeURIComponent(dO6I)));
                    wK2x.write("</head><body></body>");
                    if (location.hostname != document.domain) wK2x.domain = document.domain;
                    wK2x.close();
                    be4i[bkc4g] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jZ8R.unshift(dO6I)
                }
                eg6a = window.setTimeout(bJA0x, 50)
            };
            return be4i.bgw3x.eB6v(function(d4h) {
                d4h.stopped = !0;
                var dO6I = d4h.args[0];
                if ( !! be4i[bkc4g] || !eK6E && !dO6I) return;
                jZ8R.push(dO6I);
                if (!eK6E) eK6E = a3x.bdk2x();
                bJA0x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        be4i = c4g("nej.h"),
        N4R = c4g("nej.p"),
        bdj2x = N4R.bzU8M;
    if (N4R.nj9a.gecko) return;
    var MQ7J = function() {
        bdj2x.css3d = bdj2x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(iL8D, F4J) {
            if (!iL8D || !F4J) return;
            switch (iL8D) {
                case "beforeEnd":
                    this.appendChild(F4J);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F4J, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F4J) : this.insertBefore(F4J, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F4J) : this.parentNode.insertBefore(F4J, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bo5t) {
                this.textContent = bo5t
            })
        }
    };
    be4i.Ct4x = function() {
        var gK7D = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be4i.Ct4x.eB6v(function(d4h) {
            var bf4j = d4h.args;
            if (gK7D.test(bf4j[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bf4j
            }
        })
    }();
    be4i.cCP2x = function() {
        var cah5m = function(d4h) {
            h4l.bh4l(d4h);
            h4l.W4a(d4h).control.click()
        };
        return function(F4J) {
            h4l.s4w(F4J, "click", cah5m)
        }
    }();
    MQ7J()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        be4i = c4g("nej.h");
    var bdh2x = function() {
        var mz9q = !! document.body.classList;
        return function() {
            return mz9q
        }
    }();
    var bJK0x = function() {
        var dh6b = /\s+/g;
        return function(fK7D) {
            fK7D = (fK7D || "").trim();
            return !fK7D ? null : new RegExp("(\\s|^)(?:" + fK7D.replace(dh6b, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be4i.Np8h = be4i.Np8h.eB6v(function(d4h) {
        if (bdh2x()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args,
            F4J = a3x.B4F(bf4j[0]);
        if (!F4J || !bf4j[1] && !bf4j[2]) return;
        var fK7D = F4J.className || "";
        var HW6Q = " " + (bf4j[2] || ""),
            HX6R = bJK0x((bf4j[1] || "") + HW6Q); !! HX6R && (fK7D = fK7D.replace(HX6R, "$1"));
        F4J.className = (fK7D + HW6Q).replace(/\s+/g, " ").trim()
    });
    be4i.bjP4T = be4i.bjP4T.eB6v(function(d4h) {
        if (bdh2x()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args;
        be4i.Np8h(bf4j[0], "", bf4j[1])
    });
    be4i.bkd4h = be4i.bkd4h.eB6v(function(d4h) {
        if (bdh2x()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args;
        be4i.Np8h(bf4j[0], bf4j[1], "")
    });
    be4i.bmV5a = be4i.bmV5a.eB6v(function(d4h) {
        if (bdh2x()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args,
            F4J = a3x.B4F(bf4j[0]);
        if (!F4J) {
            d4h.value = !1;
            return
        }
        var dh6b = bJK0x(bf4j[1]);
        d4h.value = !dh6b ? !1 : dh6b.test(F4J.className || "")
    })
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        be4i = c4g("nej.h");
    if (N4R.nj9a.webkit) return;
    be4i.bdB3x = function(bdA3x) {
        return !0
    }
})();
(function() {
    var c4g = NEJ.P,
        be4i = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cY5d = c4g("nej.x"),
        R4V = {};
    var bKa0x = function(F4J) {
        F4J = a3x.B4F(F4J);
        if (!F4J || !R4V[F4J.id]) return;
        var bdf2x = !0,
            C4G = F4J.id;
        k4o.eC6w(R4V[C4G], function() {
            bdf2x = !1;
            return !0
        });
        if (bdf2x) delete R4V[C4G]
    };
    h4l.s4w = cY5d.s4w = function() {
        var cbk5p = function() {
            var bf4j = be4i.Ct4x.apply(be4i, arguments);
            if (!bf4j || !bf4j[2]) return;
            var uj2x = a3x.lv8n(bf4j[0]),
                oZ0x = R4V[uj2x] || {};
            R4V[uj2x] = oZ0x;
            uj2x = bf4j[4] || bf4j[1];
            var BY4c = oZ0x[uj2x] || [];
            oZ0x[uj2x] = BY4c;
            BY4c.push({
                type: bf4j[1],
                func: bf4j[2],
                capt: !! bf4j[3],
                sfun: bf4j[5] || bf4j[2]
            });
            return bf4j.slice(0, 4)
        };
        return function() {
            var bf4j = cbk5p.apply(null, arguments);
            if ( !! bf4j) be4i.biQ4U.apply(be4i, bf4j);
            return this
        }
    }();
    h4l.mw9n = cY5d.mw9n = function() {
        var cbN5S = function() {
            var xq3x = arguments,
                uj2x = a3x.lv8n(xq3x[0]),
                oZ0x = R4V[uj2x],
                u4y = (xq3x[1] || "").toLowerCase(),
                d4h = xq3x[2];
            if (!oZ0x || !u4y || !d4h) return;
            oZ0x = oZ0x[u4y];
            if (!oZ0x) return;
            var cbV5a = !! xq3x[3],
                r4v = k4o.di6c(oZ0x, function(jl8d) {
                    return d4h == jl8d.sfun && cbV5a == jl8d.capt
                });
            if (r4v < 0) return;
            var jl8d = oZ0x.splice(r4v, 1)[0];
            return !jl8d ? null : [a3x.B4F(uj2x), jl8d.type, jl8d.func, jl8d.capt]
        };
        return function() {
            var bf4j = cbN5S.apply(null, arguments);
            if ( !! bf4j) {
                be4i.bdO3x.apply(be4i, bf4j);
                bKa0x(bf4j[0])
            }
            return this
        }
    }();
    h4l.hd7W = cY5d.hd7W = function() {
        var bKH0x = function() {
            var xq3x = arguments,
                uj2x = a3x.lv8n(xq3x[0]),
                oZ0x = R4V[uj2x],
                BY4c = (xq3x[1] || "").toLowerCase();
            if (!oZ0x || !BY4c) return;
            var F4J = a3x.B4F(uj2x);
            k4o.no9f(oZ0x[BY4c], function(jl8d, r4v, i4m) {
                be4i.bdO3x(F4J, jl8d.type, jl8d.func, jl8d.capt);
                i4m.splice(r4v, 1)
            });
            delete oZ0x[BY4c]
        };
        var cdb6V = function(F4J) {
            F4J = a3x.B4F(F4J);
            if (!F4J) return;
            var C4G = F4J.id;
            k4o.eC6w(R4V[C4G], function(i4m, u4y) {
                bKH0x(C4G, u4y)
            });
            delete R4V[C4G]
        };
        return function(F4J, u4y) {
            !u4y ? cdb6V(F4J) : bKH0x(F4J, u4y);
            bKa0x(F4J);
            return this
        }
    }();
    h4l.W4a = function() {
        var btY7R;
        var Ih6b = function(V4Z, F4J) {
            var br5w = V4Z.split(":");
            if (br5w.length > 1) {
                if (!btY7R) btY7R = {
                    c: a3x.bE5J,
                    d: a3x.t4x,
                    a: a3x.gh7a
                };
                var Ii6c = btY7R[br5w[0]];
                if ( !! Ii6c) return !!Ii6c(F4J, br5w[1]);
                V4Z = br5w[1]
            }
            return !!a3x.gh7a(F4J, V4Z) || !! a3x.t4x(F4J, V4Z) || a3x.bE5J(F4J, V4Z)
        };
        return function(d4h) {
            if (!d4h) return null;
            var F4J = d4h.target || d4h.srcElement,
                dV6P = arguments[1];
            if (!dV6P) return F4J;
            if (k4o.fG7z(dV6P)) dV6P = Ih6b.g4k(null, dV6P);
            if (k4o.gG7z(dV6P)) {
                while (F4J) {
                    if ( !! dV6P(F4J)) return F4J;
                    F4J = F4J.parentNode
                }
                return null
            }
            return F4J
        }
    }();
    h4l.bh4l = function(d4h) {
        h4l.tr1x(d4h);
        h4l.cp5u(d4h);
        return this
    };
    h4l.tr1x = function(d4h) {
        if ( !! d4h) { !! d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.cp5u = function(d4h) {
        if ( !! d4h) { !! d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cFK2x = function() {
        var qQ0x = !1;
        var cdn6h = function() {
            if (qQ0x) return;
            qQ0x = !0;
            h4l.s4w(document, "click", cdp6j, !0)
        };
        var cdp6j = function(d4h) {
            var F4J = h4l.W4a(d4h),
                cds6m = a3x.t4x(F4J, "stopped");
            if (cds6m == "true") {
                h4l.bh4l(d4h);
                a3x.t4x(F4J, "stopped", "false")
            }
        };
        return function(d4h) {
            if (!d4h) return;
            if (d4h.type == "click") {
                h4l.bh4l(d4h);
                return
            }
            cdn6h();
            a3x.t4x(h4l.W4a(d4h), "stopped", "true")
        }
    }();
    h4l.jB8t = function(d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.oy9p().scrollLeft
    };
    h4l.mf9W = function(d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.oy9p().scrollTop
    };
    h4l.z4D = cY5d.z4D = function(F4J, u4y, e4i) {
        var bf4j = be4i.Ct4x(F4J, u4y);
        if ( !! bf4j) be4i.bjh4l(bf4j[0], bf4j[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function() {
        return R4V
    };
    cY5d.isChange = !0
})();
(function() {
    var o = !0,
        w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function(a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {
                    toString: 1
                }, f).toString != m) p = function(a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0,
                    b, h, n;
                (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function(a, f) {
                    var c = {}, b = m.call(a) == "[object Function]",
                        d;
                    for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function(a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !! a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }, u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }, G = function(a) {
                    var f = '"',
                        b = 0,
                        d = a.length,
                        h = d > 10 && s,
                        n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                f = f + L[e];
                                break;
                            default:
                                if (e < 32) {
                                    f = f + ("\\u00" + u(2, e.toString(16)));
                                    break
                                }
                                f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }, E = function(a, b, c, d, h, n, e) {
                    var g = b[a],
                        i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                            if (z) {
                                k = t(g / 864e5);
                                for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                k = 1 + k - z(i, j);
                                l = (g % 864e5 + 864e5) % 864e5;
                                q = t(l / 36e5) % 24;
                                s = t(l / 6e4) % 60;
                                v = t(l / 1e3) % 60;
                                l = l % 1e3
                            } else {
                                i = g.getUTCFullYear();
                                j = g.getUTCMonth();
                                k = g.getUTCDate();
                                q = g.getUTCHours();
                                s = g.getUTCMinutes();
                                v = g.getUTCSeconds();
                                l = g.getUTCMilliseconds()
                            }
                            g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                        } else g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w) return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]") return "" + g;
                    if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]") return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o), j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
                    else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    }, b, A, j = function() {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function() {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function(a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function(a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function(a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
                        else C(d, function(a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p");
    if (N4R.nj9a.trident0) return;
    JSON.parse = JSON.parse.eB6v(function(d4h) {
        var cI5N = d4h.args[0] || "";
        if (cI5N.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cI5N + ")")
        }
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        em6g = c4g("nej.g"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        be4i = c4g("nej.h"),
        cY5d = c4g("nej.x"),
        Ij6d, bhO4S = {}, R4V = document.createDocumentFragment();
    a3x.lv8n = cY5d.lv8n = function(F4J) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return;
        var C4G = !! F4J.id ? F4J.id : "auto-id-" + k4o.Oe8W(16);
        F4J.id = C4G;
        if (a3x.B4F(C4G) != F4J) bhO4S[C4G] = F4J;
        return C4G
    };
    a3x.B4F = cY5d.B4F = function(F4J) {
        var f4j = bhO4S["" + F4J];
        if ( !! f4j) return f4j;
        if (!k4o.fG7z(F4J) && !k4o.wg2x(F4J)) return F4J;
        return document.getElementById(F4J)
    };
    a3x.dk6e = cY5d.dk6e = function(F4J, dZ6T) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return null;
        var i4m = be4i.bjx4B(F4J);
        if ( !! dZ6T) k4o.no9f(i4m, function(f4j, r4v) {
            if (!a3x.bE5J(f4j, dZ6T)) i4m.splice(r4v, 1)
        });
        return i4m
    };
    a3x.H4L = cY5d.H4L = function(F4J, fK7D) {
        F4J = a3x.B4F(F4J);
        return !F4J ? null : be4i.bjO4S(F4J, fK7D.trim())
    };
    a3x.bKU1x = cY5d.bKU1x = function(F4J) {
        F4J = a3x.B4F(F4J);
        if ( !! F4J) {
            F4J = F4J.parentNode;
            while ( !! F4J) {
                if (F4J.scrollHeight > F4J.clientHeight) break;
                F4J = F4J.parentNode
            }
            if ( !! F4J) return F4J
        }
        var oZ0x = document.body.scrollHeight,
            BY4c = document.documentElement.scrollHeight;
        return BY4c >= oZ0x ? document.documentElement : document.body
    };
    a3x.oy9p = function() {
        var bKV1x = function(i4m) {
            var o4s = 0;
            k4o.bd4h(i4m, function(eE6y) {
                if (!eE6y) return;
                if (!o4s) {
                    o4s = eE6y
                } else {
                    o4s = Math.min(o4s, eE6y)
                }
            });
            return o4s
        };
        return function(wK2x) {
            var Il6f = wK2x || document,
                BC4G = Il6f.body,
                Bw4A = Il6f.documentElement,
                o4s = {
                    scrollTop: Math.max(BC4G.scrollTop, Bw4A.scrollTop),
                    scrollLeft: Math.max(BC4G.scrollLeft, Bw4A.scrollLeft),
                    clientWidth: bKV1x([BC4G.clientWidth, BC4G.offsetWidth, Bw4A.clientWidth, Bw4A.offsetWidth]),
                    clientHeight: bKV1x([BC4G.clientHeight, BC4G.offsetHeight, Bw4A.clientHeight, Bw4A.offsetHeight])
                };
            o4s.scrollWidth = Math.max(o4s.clientWidth, BC4G.scrollWidth, Bw4A.scrollWidth);
            o4s.scrollHeight = Math.max(o4s.clientHeight, BC4G.scrollHeight, Bw4A.scrollHeight);
            return o4s
        }
    }();
    a3x.cFD2x = function(fo6i, oV0x) {
        var o4s = NEJ.X({}, oV0x),
            bKW1x = fo6i.width / fo6i.height,
            bcG2x = oV0x.width / oV0x.height;
        if (bKW1x > bcG2x && oV0x.height > fo6i.height) {
            o4s.height = fo6i.height;
            o4s.width = o4s.height * bcG2x
        }
        if (bKW1x < bcG2x && oV0x.width > fo6i.width) {
            o4s.width = fo6i.width;
            o4s.height = o4s.width / bcG2x
        }
        return o4s
    };
    a3x.cFB2x = function() {
        var dh6b = /\s+/;
        var vE2x = {
            left: function() {
                return 0
            },
            center: function(hx7q, oV0x) {
                return (hx7q.width - oV0x.width) / 2
            },
            right: function(hx7q, oV0x) {
                return hx7q.width - oV0x.width
            },
            top: function() {
                return 0
            },
            middle: function(hx7q, oV0x) {
                return (hx7q.height - oV0x.height) / 2
            },
            bottom: function(hx7q, oV0x) {
                return hx7q.height - oV0x.height
            }
        };
        return function(hx7q, oV0x, nJ9A) {
            var o4s = {}, br5w = (nJ9A || "").split(dh6b),
                gx7q = vE2x[br5w[1]] || vE2x.middle,
                gS7L = vE2x[br5w[0]] || vE2x.center;
            o4s.top = gx7q(hx7q, oV0x);
            o4s.left = gS7L(hx7q, oV0x);
            return o4s
        }
    }();
    a3x.tN2x = cY5d.tN2x = function(F4J, dZ6T) {
        be4i.bnO5T(F4J, dZ6T || a3x.t4x(F4J, "hover") || "js-hover");
        return this
    };
    a3x.Ip6j = cY5d.Ip6j = function(F4J) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return;
        be4i.bov5A(F4J)
    };
    a3x.cdz6t = cY5d.cdz6t = function() {
        var R4V = {}, bKZ1x = 2;
        var cei6c = function(C4G, dZ6T, d4h) {
            R4V[C4G] = [h4l.jB8t(d4h), h4l.mf9W(d4h)];
            a3x.y4C(C4G, dZ6T)
        };
        var cem6g = function(C4G, dZ6T, d4h) {
            var bM5R = R4V[C4G];
            if (!k4o.eJ6D(bM5R)) return;
            var ceC6w = Math.abs(h4l.jB8t(d4h) - bM5R[0]),
                cga7T = Math.abs(h4l.mf9W(d4h) - bM5R[1]);
            if (ceC6w > bKZ1x || cga7T > bKZ1x) boI5N(C4G, dZ6T)
        };
        var boI5N = function(C4G, dZ6T) {
            if (k4o.eJ6D(R4V[C4G])) {
                R4V[C4G] = -1;
                a3x.x4B(C4G, dZ6T)
            }
        };
        return function(F4J, dZ6T) {
            var C4G = a3x.lv8n(F4J);
            if (!C4G || R4V[C4G] != null) return;
            R4V[C4G] = -1;
            dZ6T = dZ6T || a3x.t4x(C4G, "highlight") || "js-highlight";
            h4l.s4w(C4G, "touchstart", cei6c.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchmove", cem6g.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchend", boI5N.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchcancel", boI5N.g4k(null, C4G, dZ6T))
        }
    }();
    a3x.Bd4h = cY5d.Bd4h = function() {
        var cgb7U = function(C4G, dZ6T, ciR7K) {
            var F4J = a3x.B4F(C4G),
                d4h = {
                    clazz: dZ6T,
                    target: F4J
                };
            if (a3x.bE5J(F4J, dZ6T)) {
                d4h.toggled = !1;
                a3x.x4B(F4J, dZ6T)
            } else {
                d4h.toggled = !0;
                a3x.y4C(F4J, dZ6T)
            }
            ciR7K.call(null, d4h)
        };
        return function(F4J, e4i) {
            F4J = a3x.B4F(F4J);
            if ( !! F4J) {
                var im8e = {
                    ontoggle: bs5x,
                    clazz: "js-toggle",
                    element: F4J.parentNode
                };
                if (k4o.fG7z(e4i)) {
                    var f4j = a3x.B4F(e4i); !! f4j ? im8e.element = f4j : im8e.clazz = e4i
                } else {
                    NEJ.EX(im8e, e4i);
                    im8e.element = a3x.B4F(im8e.element)
                }
                var C4G = a3x.lv8n(im8e.element);
                h4l.s4w(F4J, "click", cgb7U.g4k(null, C4G, im8e.clazz, im8e.ontoggle || bs5x))
            }
            return this
        }
    }();
    a3x.mP9G = cY5d.mP9G = function(F4J, e4i) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return;
        var fl6f = 0,
            dZ6T = "js-focus";
        if (k4o.wg2x(e4i)) {
            fl6f = e4i
        } else if (k4o.fG7z(e4i)) {
            dZ6T = e4i
        } else if (k4o.lw8o(e4i)) {
            fl6f = e4i.mode || fl6f;
            dZ6T = e4i.clazz || dZ6T
        }
        var D4H = parseInt(a3x.t4x(F4J, "mode"));
        if (!isNaN(D4H)) fl6f = D4H;
        D4H = a3x.t4x(F4J, "focus");
        if ( !! D4H) dZ6T = D4H;
        be4i.bri6c(F4J, fl6f, dZ6T);
        return this
    };
    a3x.dg6a = function() {
        var bz5E = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fB7u, fK7D, bI5N) {
            var F4J = document.createElement(fB7u);
            NEJ.X(F4J, bz5E[fB7u.toLowerCase()]);
            if ( !! fK7D) F4J.className = fK7D;
            bI5N = a3x.B4F(bI5N);
            if ( !! bI5N) bI5N.appendChild(F4J);
            return F4J
        }
    }();
    a3x.bdk2x = function() {
        var ckz8r = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ckR8J = function(V4Z) {
            V4Z = V4Z.trim();
            if (!V4Z) return a3x.dg6a("iframe");
            var eK6E;
            try {
                eK6E = document.createElement('<iframe name="' + V4Z + '"></iframe>');
                eK6E.frameBorder = 0
            } catch (e) {
                eK6E = a3x.dg6a("iframe");
                eK6E.name = V4Z
            }
            return eK6E
        };
        return function(e4i) {
            e4i = e4i || bb4f;
            var eK6E = ckR8J(e4i.name || "");
            if (!e4i.visible) eK6E.style.display = "none";
            if (k4o.gG7z(e4i.onload)) h4l.s4w(eK6E, "load", function(d4h) {
                if (!eK6E.src) return;
                h4l.hd7W(eK6E, "load");
                e4i.onload(d4h)
            });
            var bI5N = e4i.parent;
            if (k4o.gG7z(bI5N)) {
                try {
                    bI5N(eK6E)
                } catch (e) {}
            } else {
                (a3x.B4F(bI5N) || document.body).appendChild(eK6E)
            }
            var cS5X = e4i.src || ckz8r();
            window.setTimeout(function() {
                eK6E.src = cS5X
            }, 0);
            return eK6E
        }
    }();
    a3x.cJ5O = cY5d.cJ5O = function() {
        var bNW1x = function(xJ3x) {
            xJ3x.src = em6g.bkx4B
        };
        var bOw1x = function(eh6b) {
            eh6b.src = "about:blank"
        };
        return function(F4J, cml8d) {
            F4J = a3x.B4F(F4J);
            if (!F4J) return this;
            if (!cml8d) h4l.hd7W(F4J);
            delete bhO4S[F4J.id];
            var fB7u = F4J.tagName;
            if (fB7u == "IFRAME") {
                bOw1x(F4J)
            } else if (fB7u == "IMG") {
                bNW1x(F4J)
            } else if ( !! F4J.getElementsByTagName) {
                k4o.bd4h(F4J.getElementsByTagName("img"), bNW1x);
                k4o.bd4h(F4J.getElementsByTagName("iframe"), bOw1x)
            }
            if ( !! F4J.parentNode) {
                F4J.parentNode.removeChild(F4J)
            }
            return this
        }
    }();
    a3x.mY9P = cY5d.mY9P = function(F4J) {
        F4J = a3x.B4F(F4J);
        if ( !! F4J) R4V.appendChild(F4J);
        return this
    };
    a3x.bOO1x = cY5d.bOO1x = function(F4J) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return;
        k4o.no9f(F4J.childNodes, function(f4j) {
            a3x.cJ5O(f4j)
        })
    };
    a3x.Iv6p = cY5d.Iv6p = function() {
        var dZ6T, gK7D = /\s+/;
        var cns8k = function() {
            if ( !! dZ6T) return;
            dZ6T = a3x.tO2x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a3x.bOQ1x()
        };
        return function(F4J, e4i) {
            F4J = a3x.B4F(F4J);
            if (!F4J) return;
            cns8k();
            e4i = e4i || bb4f;
            var bI5N = F4J.parentNode;
            if (!a3x.bE5J(bI5N, dZ6T)) {
                bI5N = a3x.dg6a("span", dZ6T);
                F4J.insertAdjacentElement("beforeBegin", bI5N);
                bI5N.appendChild(F4J)
            }
            var bOR1x = e4i.nid || "",
                f4j = a3x.H4L(bI5N, bOR1x || dZ6T + "-show")[0];
            if (!f4j) {
                var dY6S = ((e4i.clazz || "") + " " + bOR1x).trim();
                dY6S = dZ6T + "-show" + (!dY6S ? "" : " ") + dY6S;
                f4j = a3x.dg6a(e4i.tag || "span", dY6S);
                bI5N.appendChild(f4j)
            }
            var dY6S = e4i.clazz;
            if ( !! dY6S) {
                dY6S = (dY6S || "").trim().split(gK7D)[0] + "-parent";
                a3x.y4C(bI5N, dY6S)
            }
            return f4j
        }
    }();
    a3x.t4x = cY5d.t4x = function() {
        var beN3x = {}, fB7u = "data-",
            dh6b = /\-(.{1})/gi;
        var Gd5i = function(F4J) {
            var C4G = a3x.lv8n(F4J);
            if ( !! beN3x[C4G]) return;
            var bz5E = {};
            k4o.bd4h(F4J.attributes, function(f4j) {
                var J4N = f4j.nodeName;
                if (J4N.indexOf(fB7u) != 0) return;
                J4N = J4N.replace(fB7u, "").replace(dh6b, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz5E[J4N] = f4j.nodeValue || ""
            });
            beN3x[C4G] = bz5E
        };
        return function(F4J, J4N, D4H) {
            F4J = a3x.B4F(F4J);
            if (!F4J) return null;
            var bcn2x = F4J.dataset;
            if (!bcn2x) {
                Gd5i(F4J);
                bcn2x = beN3x[F4J.id]
            }
            if (D4H !== undefined) bcn2x[J4N] = D4H;
            return bcn2x[J4N]
        }
    }();
    a3x.gh7a = cY5d.gh7a = function(F4J, V4Z, D4H) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return "";
        if (D4H !== undefined && !! F4J.setAttribute) F4J.setAttribute(V4Z, D4H);
        return be4i.btl6f(F4J, V4Z)
    };
    a3x.nH9y = function(dT6N) {
        var rz0x = document.createElement("div");
        rz0x.innerHTML = dT6N;
        var i4m = a3x.dk6e(rz0x);
        return i4m.length > 1 ? rz0x : i4m[0]
    };
    a3x.cnH8z = cY5d.cnH8z = function(F4J) {
        F4J = a3x.B4F(F4J);
        return !F4J ? "" : be4i.bfH3x(F4J)
    };
    a3x.bPb2x = function(Cu4y) {
        Cu4y = (Cu4y || "").trim();
        return !Cu4y ? null : be4i.bfQ3x(Cu4y)
    };
    a3x.cod8V = function(cG5L, u4y) {
        cG5L = cG5L || "";
        switch (u4y) {
            case "xml":
                cG5L = a3x.bPb2x(cG5L);
                break;
            case "json":
                try {
                    cG5L = JSON.parse(cG5L)
                } catch (ex) {
                    cG5L = null
                }
                break
        }
        return cG5L
    };
    a3x.hO7H = cY5d.hO7H = function() {
        var coh8Z = function(F4J) {
            return F4J == document.body || F4J == document.documentElement
        };
        return function(ea6U, nb9S) {
            ea6U = a3x.B4F(ea6U);
            if (!ea6U) return null;
            nb9S = a3x.B4F(nb9S) || null;
            var o4s = {
                x: 0,
                y: 0
            }, bhJ4N, do6i, bci2x;
            while ( !! ea6U && ea6U != nb9S) {
                bhJ4N = coh8Z(ea6U);
                do6i = bhJ4N ? 0 : ea6U.scrollLeft;
                bci2x = parseInt(a3x.df5k(ea6U, "borderLeftWidth")) || 0;
                o4s.x += ea6U.offsetLeft + bci2x - do6i;
                do6i = bhJ4N ? 0 : ea6U.scrollTop;
                bci2x = parseInt(a3x.df5k(ea6U, "borderTopWidth")) || 0;
                o4s.y += ea6U.offsetTop + bci2x - do6i;
                ea6U = ea6U.offsetParent
            }
            return o4s
        }
    }();
    a3x.nn9e = cY5d.nn9e = function(F4J) {
        var bi4m = a3x.hO7H(F4J);
        window.scrollTo(bi4m.x, bi4m.y);
        return this
    };
    a3x.cEv2x = function(sF1x) {
        sF1x = (sF1x || "").trim();
        return be4i.bFT9K(sF1x)
    };
    a3x.cok8c = cY5d.cok8c = function(F4J, V4Z, bz5E) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return this;
        var D4H = be4i.bGJ0x(V4Z, bz5E);
        if (!D4H) return this;
        a3x.ba4e(F4J, "transform", D4H);
        return this
    };
    a3x.eY6S = cY5d.eY6S = function(F4J, bz5E) {
        F4J = a3x.B4F(F4J);
        if ( !! F4J) k4o.eC6w(bz5E, function(D4H, V4Z) {
            a3x.ba4e(F4J, V4Z, D4H)
        });
        return this
    };
    a3x.coo8g = cY5d.coo8g = function(ge7X, e4i) {
        ge7X = a3x.B4F(ge7X);
        if (!ge7X) return {
            start: 0,
            end: 0
        };
        if (k4o.wg2x(e4i)) e4i = {
            start: e4i,
            end: e4i
        };
        if (e4i != null) {
            if (e4i.end == null) e4i.end = e4i.start || 0;
            be4i.boW5b(ge7X, e4i)
        } else {
            e4i = be4i.bqL6F(ge7X)
        }
        return e4i
    };
    a3x.ba4e = cY5d.ba4e = function(F4J, V4Z, D4H) {
        F4J = a3x.B4F(F4J);
        if ( !! F4J) be4i.bkE4I(F4J, V4Z, D4H);
        return this
    };
    a3x.df5k = cY5d.df5k = function(F4J, V4Z) {
        F4J = a3x.B4F(F4J);
        if (!F4J) return "";
        var hc7V = !window.getComputedStyle ? F4J.currentStyle || bb4f : window.getComputedStyle(F4J, null);
        return hc7V[be4i.bGK0x(V4Z)] || ""
    };
    a3x.bPk2x = function() {
        var dh6b = /[\s\r\n]+/gi;
        return function(ch5m) {
            ch5m = (ch5m || "").trim().replace(dh6b, " ");
            if (!ch5m) return;
            var f4j = a3x.dg6a("style");
            document.head.appendChild(f4j);
            be4i.bpq5v(f4j, be4i.cBQ2x(ch5m));
            return f4j
        }
    }();
    a3x.bPl2x = function(yu3x) {
        try {
            yu3x = yu3x.trim();
            if ( !! yu3x) return (new Function(yu3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a3x.tO2x = function() {
        var dh6b = /#<.*?>/g,
            gJ7C = +(new Date);
        return function(kh8Z) {
            if (!Ij6d) Ij6d = [];
            var fK7D = "auto-" + gJ7C++;
            Ij6d.push(kh8Z.replace(dh6b, fK7D));
            return fK7D
        }
    }();
    a3x.bOQ1x = function() {
        if ( !! Ij6d) {
            a3x.bPk2x(Ij6d.join(""));
            Ij6d = null
        }
        return this
    };
    a3x.cEq2x = function(ch5m, kh8Z) {
        ch5m = a3x.B4F(ch5m);
        return !ch5m ? null : be4i.bqi6c(ch5m, kh8Z)
    };
    a3x.y4C = cY5d.y4C = function() {
        be4i.bjP4T.apply(be4i, arguments);
        return this
    };
    a3x.x4B = cY5d.x4B = function() {
        be4i.bkd4h.apply(be4i, arguments);
        return this
    };
    a3x.fb6V = cY5d.fb6V = function() {
        be4i.Np8h.apply(be4i, arguments);
        return this
    };
    a3x.bE5J = cY5d.bE5J = function() {
        return be4i.bmV5a.apply(be4i, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cY5d.isChange = !0
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        be4i = c4g("nej.h"),
        k4o = c4g("nej.u");
    var Gx6r = function(j4n, u4y) {
        try {
            u4y = u4y.toLowerCase();
            if (j4n === null) return u4y == "null";
            if (j4n === undefined) return u4y == "undefined";
            return bb4f.toString.call(j4n).toLowerCase() == "[object " + u4y + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gG7z = function(j4n) {
        return Gx6r(j4n, "function")
    };
    k4o.fG7z = function(j4n) {
        return Gx6r(j4n, "string")
    };
    k4o.wg2x = function(j4n) {
        return Gx6r(j4n, "number")
    };
    k4o.cEj2x = function(j4n) {
        return Gx6r(j4n, "boolean")
    };
    k4o.GY6S = function(j4n) {
        return Gx6r(j4n, "date")
    };
    k4o.eJ6D = function(j4n) {
        return Gx6r(j4n, "array")
    };
    k4o.lw8o = function(j4n) {
        return Gx6r(j4n, "object")
    };
    k4o.fy6s = function() {
        var dh6b = /[^\x00-\xfff]/g;
        return function(bo5t) {
            return ("" + (bo5t || "")).replace(dh6b, "**").length
        }
    }();
    k4o.di6c = function(i4m, p4t) {
        var dV6P = k4o.gG7z(p4t) ? p4t : function(D4H) {
                return D4H === p4t
            }, r4v = k4o.eC6w(i4m, dV6P);
        return r4v != null ? r4v : -1
    };
    k4o.cEe2x = function() {
        var bQd2x;
        var OS8K = function(i4m, oD9u, oA9r) {
            if (oD9u > oA9r) return -1;
            var DO5T = Math.ceil((oD9u + oA9r) / 2),
                o4s = bQd2x(i4m[DO5T], DO5T, i4m);
            if (o4s == 0) return DO5T;
            if (o4s < 0) return OS8K(i4m, oD9u, DO5T - 1);
            return OS8K(i4m, DO5T + 1, oA9r)
        };
        return function(i4m, Ii6c) {
            bQd2x = Ii6c || bs5x;
            return OS8K(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.no9f = function(i4m, cK5P, P4T) {
        if (!i4m || !i4m.length || !k4o.gG7z(cK5P)) return null;
        for (var i = i4m.length - 1; i >= 0; i--) if ( !! cK5P.call(P4T, i4m[i], i, i4m)) return i;
        return null
    };
    k4o.bd4h = function(i4m, cK5P, P4T) {
        if (!i4m || !i4m.length || !k4o.gG7z(cK5P)) return this;
        if ( !! i4m.forEach) {
            i4m.forEach(cK5P, P4T);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++) cK5P.call(P4T, i4m[i], i, i4m);
        return this
    };
    k4o.eC6w = function(i4m, cK5P, P4T) {
        if (!i4m || !k4o.gG7z(cK5P)) return null;
        if (i4m.length != null) {
            if (i4m.length > 0) for (var i = 0, l = i4m.length; i < l; i++) if ( !! cK5P.call(P4T, i4m[i], i, i4m)) return i
        }
        if (k4o.lw8o(i4m)) {
            for (var x in i4m) if (i4m.hasOwnProperty(x) && !! cK5P.call(P4T, i4m[x], x, i4m)) return x
        }
        return null
    };
    k4o.cqe9V = function(jg8Y, cqP9G, e4i) {
        jg8Y = jg8Y || [];
        e4i = e4i || bb4f;
        var bQx2x = !! e4i.union,
            wy2x = !! e4i.begin,
            bbQ2x = e4i.compare,
            crm9d = bQx2x && wy2x ? k4o.no9f : k4o.bd4h;
        crm9d(cqP9G, function(p4t) {
            if ( !! bbQ2x) bbQ2x = bbQ2x.ew6q(p4t);
            var r4v = k4o.di6c(jg8Y, bbQ2x || p4t);
            if (r4v >= 0) jg8Y.splice(r4v, 1);
            if (bQx2x) jg8Y[wy2x ? "unshift" : "push"](p4t)
        });
        return jg8Y
    };
    k4o.Fl5q = function(bz5E, bo5t) {
        if (!bz5E || !bo5t || !bo5t.replace) return bo5t || "";
        return bo5t.replace(bz5E.r, function($1) {
            var o4s = bz5E[!bz5E.i ? $1.toLowerCase() : $1];
            return o4s != null ? o4s : $1
        })
    };
    k4o.dG6A = function() {
        var bz5E = {
            r: /\<|\>|\<|\>|\&|\r|\n|\s|\'|\"/g,
            "<": "<",
            ">": ">",
            "&": "&",
            " ": " ",
            '"': """,
            "'": "'",
            "\n": "<br/>",
            "\r": "",
            "<": "<",
            ">": ">"
        };
        return function(bo5t) {
            return k4o.Fl5q(bz5E, bo5t)
        }
    }();
    k4o.Ay4C = function() {
        var bz5E = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "<": "<",
            ">": ">",
            "&": "&",
            " ": " ",
            "'": "'",
            """: '"',
            "<br/>": "\n"
        };
        return function(bo5t) {
            return k4o.Fl5q(bz5E, bo5t)
        }
    }();
    k4o.if7Y = function() {
        var bz5E = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }, crU9L = ["上午", "下午"],
            csn9e = ["A.M.", "P.M."],
            bpC5H = ["日", "一", "二", "三", "四", "五", "六"],
            ctA0x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cuc0x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var OU8M = function(gR7K) {
            gR7K = parseInt(gR7K) || 0;
            return (gR7K < 10 ? "0" : "") + gR7K
        };
        var cuw0x = function(pV0x) {
            return pV0x < 12 ? 0 : 1
        };
        return function(bA5F, IB6v, cuO0x) {
            if (!bA5F || !IB6v) return "";
            bA5F = k4o.bbD2x(bA5F);
            bz5E.yyyy = bA5F.getFullYear();
            bz5E.yy = ("" + bz5E.yyyy).substr(2);
            bz5E.M = bA5F.getMonth() + 1;
            bz5E.MM = OU8M(bz5E.M);
            bz5E.eM = cuc0x[bz5E.M - 1];
            bz5E.cM = ctA0x[bz5E.M - 1];
            bz5E.d = bA5F.getDate();
            bz5E.dd = OU8M(bz5E.d);
            bz5E.H = bA5F.getHours();
            bz5E.HH = OU8M(bz5E.H);
            bz5E.m = bA5F.getMinutes();
            bz5E.mm = OU8M(bz5E.m);
            bz5E.s = bA5F.getSeconds();
            bz5E.ss = OU8M(bz5E.s);
            bz5E.ms = bA5F.getMilliseconds();
            bz5E.w = bpC5H[bA5F.getDay()];
            var bSl3x = cuw0x(bz5E.H);
            bz5E.ct = crU9L[bSl3x];
            bz5E.et = csn9e[bSl3x];
            if ( !! cuO0x) {
                bz5E.H = bz5E.H % 12
            }
            return k4o.Fl5q(bz5E, IB6v)
        }
    }();
    k4o.bbD2x = function(bA5F) {
        var da5f = bA5F;
        if (k4o.fG7z(bA5F)) da5f = new Date(Date.parse(bA5F));
        if (!k4o.GY6S(bA5F)) da5f = new Date(bA5F);
        return da5f
    };
    k4o.Ip6j = function(cxD1x, cyg1x) {
        return (new Number(cxD1x)).toFixed(cyg1x)
    };
    k4o.bte6Y = function() {
        var gK7D = /([^\/:])\/.*$/,
            ku8m = /\/[^\/]+$/,
            HA6u = /[#\?]/,
            btt6n = location.href.split(/[?#]/)[0],
            sO1x = document.createElement("a");
        var btX7Q = function(jE8w) {
            return (jE8w || "").indexOf("://") > 0
        };
        var bTI4M = function(jE8w) {
            return (jE8w || "").split(HA6u)[0].replace(ku8m, "/")
        };
        var cCs2x = function(jE8w, fT7M) {
            if (jE8w.indexOf("/") == 0) return fT7M.replace(gK7D, "$1") + jE8w;
            return bTI4M(fT7M) + jE8w
        };
        btt6n = bTI4M(btt6n);
        return function(jE8w, fT7M) {
            jE8w = (jE8w || "").trim();
            if (!btX7Q(fT7M)) fT7M = btt6n;
            if (!jE8w) return fT7M;
            if (btX7Q(jE8w)) return jE8w;
            jE8w = cCs2x(jE8w, fT7M);
            sO1x.href = jE8w;
            jE8w = sO1x.href;
            return btX7Q(jE8w) ? jE8w : sO1x.getAttribute("href", 4)
        }
    }();
    k4o.cCu2x = function() {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y4c) {
            if (dh6b.test(Y4c || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bUI4M = function(G4K, im8e) {
        if (!G4K) return im8e;
        var V4Z = G4K.tagName.toLowerCase(),
            i4m = a3x.dk6e(G4K);
        if (!i4m || !i4m.length) {
            im8e[V4Z] = G4K.textContent || G4K.text || "";
            return im8e
        }
        var ck5p = {};
        im8e[V4Z] = ck5p;
        k4o.bd4h(i4m, function(f4j) {
            k4o.bUI4M(f4j, ck5p)
        });
        return im8e
    };
    k4o.cDa2x = function(Cu4y) {
        try {
            return k4o.bUI4M(a3x.bPb2x(Cu4y), {})
        } catch (ex) {
            return null
        }
    };
    k4o.Pm8e = function(ib7U, Pt8l) {
        var im8e = {};
        k4o.bd4h((ib7U || "").split(Pt8l), function(V4Z) {
            var bbt2x = V4Z.split("=");
            if (!bbt2x || !bbt2x.length) return;
            var J4N = bbt2x.shift();
            if (!J4N) return;
            im8e[decodeURIComponent(J4N)] = decodeURIComponent(bbt2x.join("="))
        });
        return im8e
    };
    k4o.uX2x = function(gw7p, Pt8l, cCU2x) {
        if (!gw7p) return "";
        var br5w = [];
        for (var x in gw7p) {
            br5w.push(encodeURIComponent(x) + "=" + ( !! cCU2x ? encodeURIComponent(gw7p[x]) : gw7p[x]))
        }
        return br5w.join(Pt8l || ",")
    };
    k4o.hv7o = function(bv5A) {
        return k4o.Pm8e(bv5A, "&")
    };
    k4o.cE5J = function(gw7p) {
        return k4o.uX2x(gw7p, "&", !0)
    };
    k4o.cCZ2x = function(gw7p) {
        return be4i.HV6P(gw7p)
    };
    k4o.cFH2x = function(i4m, dV6P) {
        var o4s = {};
        k4o.bd4h(i4m, function(p4t) {
            var J4N = p4t;
            if ( !! dV6P) {
                J4N = dV6P(p4t)
            }
            o4s[J4N] = p4t
        });
        return o4s
    };
    k4o.cDb2x = function(gR7K, gc7V) {
        var cCS2x = ("" + gR7K).length,
            cCR2x = Math.max(1, parseInt(gc7V) || 0),
            do6i = cCR2x - cCS2x;
        if (do6i > 0) {
            gR7K = (new Array(do6i + 1)).join("0") + gR7K
        }
        return "" + gR7K
    };
    k4o.bbo2x = function(gw7p, V4Z) {
        if (!k4o.eJ6D(V4Z)) {
            try {
                delete gw7p[V4Z]
            } catch (e) {
                gw7p[V4Z] = undefined
            }
            return this
        }
        k4o.bd4h(V4Z, k4o.bbo2x.g4k(k4o, gw7p));
        return this
    };
    k4o.Oe8W = function() {
        var bUH4L = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq5v) {
            bq5v = bq5v || 10;
            var o4s = [];
            for (var i = 0, bUG4K; i < bq5v; ++i) {
                bUG4K = Math.floor(Math.random() * bUH4L.length);
                o4s.push(bUH4L.charAt(bUG4K))
            }
            return o4s.join("")
        }
    }();
    k4o.Ad4h = function(fF7y, fo6i) {
        return Math.floor(Math.random() * (fo6i - fF7y) + fF7y)
    };
    k4o.oh9Y = function(bq5v) {
        bq5v = Math.max(0, Math.min(bq5v || 8, 30));
        var fF7y = Math.pow(10, bq5v - 1),
            fo6i = fF7y * 10;
        return k4o.Ad4h(fF7y, fo6i).toString()
    };
    k4o.bbn2x = function() {
        var gJ7C = +(new Date);
        return function() {
            return "" + gJ7C++
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        oG9x;
    if ( !! N4R.cH5M) return;
    N4R.cH5M = NEJ.C();
    oG9x = N4R.cH5M.prototype;
    N4R.cH5M.A4E = function(e4i) {
        e4i = e4i || {};
        var cz5E = !! this.BD4H && this.BD4H.shift();
        if (!cz5E) {
            cz5E = new this(e4i);
            this.cCO2x = (this.cCO2x || 0) + 1
        }
        cz5E.bl5q(e4i);
        return cz5E
    };
    N4R.cH5M.T4X = function() {
        var Pw8o = function(p4t, r4v, i4m) {
            p4t.T4X();
            i4m.splice(r4v, 1)
        };
        return function(cz5E) {
            if (!cz5E) return null;
            if (!k4o.eJ6D(cz5E)) {
                if (!(cz5E instanceof this)) {
                    var fK7D = cz5E.constructor;
                    if ( !! fK7D.T4X) fK7D.T4X(cz5E);
                    return null
                }
                if (cz5E == this.ff6Z) delete this.ff6Z;
                if (cz5E == this.Ae4i) delete this.Ae4i;
                cz5E.bD5I();
                if (!this.BD4H) this.BD4H = [];
                if (k4o.di6c(this.BD4H, cz5E) < 0) {
                    this.BD4H.push(cz5E)
                }
                return null
            }
            k4o.no9f(cz5E, Pw8o, this)
        }
    }();
    N4R.cH5M.gr7k = function(e4i) {
        e4i = e4i || {};
        if (!this.ff6Z) this.ff6Z = this.A4E(e4i);
        return this.ff6Z
    };
    N4R.cH5M.bUF4J = function(e4i, rt0x) {
        e4i = e4i || {};
        if ( !! rt0x && !! this.Ae4i) {
            this.Ae4i.T4X();
            delete this.Ae4i
        }
        if (!this.Ae4i) {
            this.Ae4i = this.A4E(e4i)
        } else {
            this.Ae4i.bl5q(e4i)
        }
        return this.Ae4i
    };
    oG9x.cx5C = function() {
        var gJ7C = +(new Date);
        return function() {
            this.id = gJ7C++;
            this.lW9N = {};
            this.bUE4I = {}
        }
    }();
    oG9x.bl5q = function(e4i) {
        this.bjI4M(e4i)
    };
    oG9x.bD5I = function() {
        this.hd7W();
        this.IJ6D()
    };
    oG9x.bX5c = function() {
        var gJ7C = +(new Date);
        var cCL2x = function(bf4j) {
            if (!bf4j || bf4j.length < 3) return;
            this.bUE4I["de-" + gJ7C++] = bf4j;
            h4l.s4w.apply(h4l, bf4j)
        };
        return function(i4m) {
            k4o.bd4h(i4m, cCL2x, this)
        }
    }();
    oG9x.IJ6D = function() {
        var cCt2x = function(bf4j, J4N, bz5E) {
            delete bz5E[J4N];
            h4l.mw9n.apply(h4l, bf4j)
        };
        return function() {
            k4o.eC6w(this.bUE4I, cCt2x)
        }
    }();
    oG9x.cDf2x = function(dV6P) {
        dV6P = dV6P || bs5x;
        k4o.eC6w(this, function(DZ5e, J4N, bz5E) {
            if ( !! DZ5e && !! DZ5e.T4X && !dV6P(DZ5e)) {
                delete bz5E[J4N];
                DZ5e.T4X()
            }
        })
    };
    oG9x.T4X = function() {
        this.constructor.T4X(this)
    };
    oG9x.bkb4f = function(u4y) {
        var d4h = this.lW9N[u4y.toLowerCase()];
        return !!d4h && d4h !== bs5x
    };
    oG9x.s4w = function(u4y, d4h) {
        this.xp3x.apply(this, arguments);
        return this
    };
    oG9x.mw9n = function(u4y, d4h) {
        var u4y = (u4y || "").toLowerCase(),
            ec6W = this.lW9N[u4y];
        if (!k4o.eJ6D(ec6W)) {
            if (ec6W == d4h) delete this.lW9N[u4y];
            return
        }
        k4o.no9f(ec6W, function(et6n, r4v, i4m) {
            if (et6n == d4h) i4m.splice(r4v, 1)
        })
    };
    oG9x.xp3x = function(u4y, d4h) {
        if ( !! u4y && k4o.gG7z(d4h)) this.lW9N[u4y.toLowerCase()] = d4h;
        return this
    };
    oG9x.bjI4M = function() {
        var cCn2x = function(d4h, u4y) {
            this.xp3x(u4y, d4h)
        };
        return function(ec6W) {
            k4o.eC6w(ec6W, cCn2x, this);
            return this
        }
    }();
    oG9x.hd7W = function() {
        var bko4s = function(d4h, u4y) {
            this.hd7W(u4y)
        };
        return function(u4y) {
            var u4y = (u4y || "").toLowerCase();
            if ( !! u4y) {
                delete this.lW9N[u4y]
            } else {
                k4o.eC6w(this.lW9N, bko4s, this)
            }
            return this
        }
    }();
    oG9x.bkp4t = function(u4y, d4h) {
        if (!u4y || !k4o.gG7z(d4h)) return this;
        u4y = u4y.toLowerCase();
        var ec6W = this.lW9N[u4y];
        if (!ec6W) {
            this.lW9N[u4y] = d4h;
            return this
        }
        if (!k4o.eJ6D(ec6W)) {
            this.lW9N[u4y] = [ec6W]
        }
        this.lW9N[u4y].push(d4h);
        return this
    };
    oG9x.z4D = function(u4y) {
        var d4h = this.lW9N[(u4y || "").toLowerCase()];
        if (!d4h) return this;
        var bf4j = fx6r.slice.call(arguments, 1);
        if (!k4o.eJ6D(d4h)) return d4h.apply(this, bf4j);
        k4o.bd4h(d4h, function(dt6n) {
            try {
                dt6n.apply(this, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N4R.bba2x = function() {
        var R4V = {};
        return function(C4G, fK7D, e4i) {
            var fj6d = fK7D.cCm2x;
            if (!fj6d) {
                fj6d = k4o.Oe8W(10);
                fK7D.cCm2x = fj6d
            }
            var J4N = C4G + "-" + fj6d,
                cz5E = R4V[J4N];
            if ( !! e4i && !cz5E) {
                cz5E = fK7D.A4E(e4i);
                cz5E.T4X = cz5E.T4X.eB6v(function(d4h) {
                    delete R4V[J4N];
                    delete cz5E.T4X
                });
                R4V[J4N] = cz5E
            }
            return cz5E
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gy7r = function() {
        var da5f = new Date,
            cCl2x = +da5f,
            blH5M = 864e5;
        var cCj2x = function(V4Z) {
            var rl0x = document.cookie,
                sx1x = "\\b" + V4Z + "=",
                baW2x = rl0x.search(sx1x);
            if (baW2x < 0) return "";
            baW2x += sx1x.length - 2;
            var xm3x = rl0x.indexOf(";", baW2x);
            if (xm3x < 0) xm3x = rl0x.length;
            return rl0x.substring(baW2x, xm3x) || ""
        };
        return function(V4Z, j4n) {
            if (j4n === undefined) return cCj2x(V4Z);
            if (u.fG7z(j4n)) {
                if ( !! j4n) {
                    document.cookie = V4Z + "=" + j4n + ";";
                    return j4n
                }
                j4n = {
                    expires: -100
                }
            }
            j4n = j4n || o;
            var rl0x = V4Z + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                da5f.setTime(cCl2x + j4n.expires * blH5M);
                j4n.expires = da5f.toGMTString()
            }
            rl0x += u.uX2x(j4n, ";");
            document.cookie = rl0x
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        it8l = c4g("nej.c"),
        em6g = c4g("nej.g"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        N4R = c4g("nej.ut.j"),
        k4o = c4g("nej.u"),
        b4f;
    if ( !! N4R.IK6E) return;
    N4R.IK6E = NEJ.C();
    b4f = N4R.IK6E.O4S(I4M.cH5M);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.pj0x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pj0x, e4i);
        var CP4T = it8l.B4F("csrf");
        if ((/^\/[^\/]/.test(this.pj0x.url) || this.pj0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !! CP4T.cookie && !! CP4T.param) {
            var bv5A = encodeURIComponent(CP4T.param) + "=" + encodeURIComponent(v4z.gy7r(CP4T.cookie) || ""),
                Pt8l = this.pj0x.url.indexOf("?") < 0 ? "?" : "&";
            this.pj0x.url += Pt8l + bv5A
        }
        this.baU2x = e4i.headers || {};
        var bo5t = this.baU2x[em6g.yg3x];
        if (bo5t == null) this.baU2x[em6g.yg3x] = em6g.cil7e
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.Af4j;
        delete this.pj0x;
        delete this.baU2x
    };
    b4f.cCi2x = function(bo5t) {
        var bz5E = {
            r: /\<|\>/g,
            "<": "<",
            ">": ">"
        };
        if (!this.pj0x.noescape) {
            return k4o.Fl5q(bz5E, bo5t)
        } else {
            return bo5t
        }
    };
    b4f.uT2x = function(d4h) {
        var ex6r = d4h.status;
        if (ex6r == -1) {
            this.z4D("onerror", {
                code: em6g.bBG8y,
                message: "请求[" + this.pj0x.url + "]超时！"
            });
            return
        }
        if (("" + ex6r).indexOf("2") != 0) {
            this.z4D("onerror", {
                data: ex6r,
                code: em6g.bie4i,
                message: "服务器返回异常状态[" + ex6r + "]!",
                extData: d4h.result
            });
            return
        }
        this.z4D("onload", a3x.cod8V(this.cCi2x(d4h.result), this.pj0x.type))
    };
    b4f.co5t = bs5x;
    b4f.bpF5K = function(j4n) {
        var Y4c = this.pj0x.url;
        if (!Y4c) {
            this.z4D("onerror", {
                code: em6g.bua7T,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pj0x.data = j4n == null ? null : j4n;
            var d4h = {
                request: this.pj0x,
                headers: this.baU2x
            };
            try {
                this.z4D("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co5t(d4h)
        } catch (e) {
            this.z4D("onerror", {
                code: em6g.bie4i,
                message: "请求[" + Y4c + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b4f.ks8k = bs5x
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        be4i = c4g("nej.h"),
        em6g = c4g("nej.g"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut.j"),
        R4V = {}, PQ8I;
    if ( !! N4R.baO2x) return;
    N4R.baO2x = NEJ.C();
    PQ8I = N4R.baO2x.O4S(N4R.IK6E);
    PQ8I.bD5I = function() {
        this.bG5L();
        window.clearTimeout(this.ed6X);
        delete this.ed6X;
        try {
            this.sk0x.onreadystatechange = bs5x;
            this.sk0x.abort()
        } catch (e) {}
        delete this.sk0x
    };
    PQ8I.co5t = function() {
        var cCh2x = function(D4H, J4N) {
            this.sk0x.setRequestHeader(J4N, D4H)
        };
        return function(e4i) {
            var gm7f = e4i.request,
                ph0x = e4i.headers;
            this.sk0x = be4i.bra6U();
            if (ph0x[em6g.yg3x] === em6g.EK5P) {
                delete ph0x[em6g.yg3x];
                this.sk0x.upload.onprogress = this.gv7o.g4k(this, 1);
                if (gm7f.data.tagName === "FORM") gm7f.data = new FormData(gm7f.data)
            }
            this.sk0x.onreadystatechange = this.gv7o.g4k(this, 2);
            if (gm7f.timeout != 0) {
                this.ed6X = window.setTimeout(this.gv7o.g4k(this, 3), gm7f.timeout)
            }
            this.sk0x.open(gm7f.method, gm7f.url, !gm7f.sync);
            k4o.eC6w(ph0x, cCh2x, this);
            if ( !! this.pj0x.cookie && "withCredentials" in this.sk0x) this.sk0x.withCredentials = !0;
            this.sk0x.send(gm7f.data)
        }
    }();
    PQ8I.gv7o = function(u4y) {
        switch (u4y) {
            case 1:
                this.z4D("onuploading", arguments[1]);
                break;
            case 2:
                if (this.sk0x.readyState == 4) this.uT2x({
                    status: this.sk0x.status,
                    result: this.sk0x.responseText || ""
                });
                break;
            case 3:
                this.uT2x({
                    status: -1
                });
                break
        }
    };
    PQ8I.ks8k = function() {
        this.uT2x({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var PT8L = {}, baM2x = [],
        bUv4z = /\s+/g,
        gJ7C = +(new Date),
        IL6F, bS5X, hE7x;
    var Eb5g = function() {
        var gK7D = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            ku8m = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            HA6u = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            btg6a = /^new\s+/,
            cCd2x = /['"]/;
        var cBZ2x = function(D4H) {
            if (gK7D.test(D4H)) return;
            D4H = D4H.split(".")[0].trim();
            if (!D4H || cCd2x.test(D4H)) return;
            D4H = D4H.replace(btg6a, "");
            try {
                if (HA6u.test(D4H)) return;
                hE7x[D4H] = 1
            } catch (e) {}
        };
        return function(bo5t) {
            bo5t = bo5t || "";
            if (!bo5t || gK7D.test(bo5t)) return;
            var br5w = bo5t.split(ku8m);
            for (var i = 0, l = br5w.length; i < l; i++) cBZ2x(br5w[i])
        }
    }();
    var cBY2x = function(dJ6D) {
        if (dJ6D[2] != "in") throw "bad for loop statement: " + dJ6D.join(" ");
        baM2x.push(dJ6D[1]);
        Eb5g(dJ6D[3]);
        return "var __HASH__" + dJ6D[1] + " = " + dJ6D[3] + "," + dJ6D[1] + "," + dJ6D[1] + "_count=0;" + "if (!!__HASH__" + dJ6D[1] + ")" + "for(var " + dJ6D[1] + "_key in __HASH__" + dJ6D[1] + "){" + dJ6D[1] + " = __HASH__" + dJ6D[1] + "[" + dJ6D[1] + "_key];" + "if (typeof(" + dJ6D[1] + ')=="function") continue;' + dJ6D[1] + "_count++;"
    };
    var cBS2x = function() {
        var dJ6D = baM2x[baM2x.length - 1];
        return "}; if(!__HASH__" + dJ6D + "||!" + dJ6D + "_count){"
    };
    var cBP2x = function() {
        baM2x.pop();
        return "};"
    };
    var cBO2x = function(dJ6D) {
        if (dJ6D[2] != "as") throw "bad for list loop statement: " + dJ6D.join(" ");
        var Qe8W = dJ6D[1].split("..");
        if (Qe8W.length > 1) {
            Eb5g(Qe8W[0]);
            Eb5g(Qe8W[1]);
            return "for(var " + dJ6D[3] + "," + dJ6D[3] + "_index=0," + dJ6D[3] + "_beg=" + Qe8W[0] + "," + dJ6D[3] + "_end=" + Qe8W[1] + "," + dJ6D[3] + "_length=parseInt(" + dJ6D[3] + "_end-" + dJ6D[3] + "_beg+1);" + dJ6D[3] + "_index<" + dJ6D[3] + "_length;" + dJ6D[3] + "_index++){" + dJ6D[3] + " = " + dJ6D[3] + "_beg+" + dJ6D[3] + "_index;"
        } else {
            Eb5g(dJ6D[1]);
            return "for(var __LIST__" + dJ6D[3] + " = " + dJ6D[1] + "," + dJ6D[3] + "," + dJ6D[3] + "_index=0," + dJ6D[3] + "_length=__LIST__" + dJ6D[3] + ".length;" + dJ6D[3] + "_index<" + dJ6D[3] + "_length;" + dJ6D[3] + "_index++){" + dJ6D[3] + " = __LIST__" + dJ6D[3] + "[" + dJ6D[3] + "_index];"
        }
    };
    var cBL2x = function(dJ6D) {
        if (!dJ6D || !dJ6D.length) return;
        dJ6D.shift();
        var V4Z = dJ6D[0].split("(")[0];
        return "var " + V4Z + " = function" + dJ6D.join("").replace(V4Z, "") + "{var __OUT=[];"
    };
    var cBI2x = function(dJ6D) {
        if (!dJ6D[1]) throw "bad include statement: " + dJ6D.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var buF7y = function(kb8T, dJ6D) {
        Eb5g(dJ6D.slice(1).join(" "));
        return kb8T
    };
    var cBH2x = function(dJ6D) {
        return buF7y("if(", dJ6D)
    };
    var cBC1x = function(dJ6D) {
        return buF7y("}else if(", dJ6D)
    };
    var cBB1x = function(dJ6D) {
        return buF7y("var ", dJ6D)
    };
    bS5X = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cBH2x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cBC1x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cBY2x,
                pmin: 3
            },
            forelse: {
                pfix: cBS2x
            },
            "/for": {
                pfix: cBP2x
            },
            list: {
                pfix: cBO2x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cBB1x,
                sfix: ";"
            },
            macro: {
                pfix: cBL2x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    IL6F = !0
                }
            },
            "/trim": {
                pfix: function() {
                    IL6F = null
                }
            },
            inline: {
                pfix: cBI2x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kb8T) {
                return (kb8T || "") + "" + gJ7C
            },
            "default": function(D4H, kg8Y) {
                return D4H || kg8Y
            }
        }
    };
    var cBy1x = function() {
        var cBx1x = /\\([\{\}])/g;
        return function(bo5t, jG8y) {
            bo5t = bo5t.replace(cBx1x, "$1");
            var dJ6D = bo5t.slice(1, - 1).split(bUv4z),
                bg4k = bS5X.def[dJ6D[0]];
            if (!bg4k) {
                baz2x(bo5t, jG8y);
                return
            }
            if ( !! bg4k.pmin && bg4k.pmin >= dJ6D.length) throw "Statement needs more parameters:" + bo5t;
            jG8y.push( !! bg4k.pfix && typeof bg4k.pfix != "string" ? bg4k.pfix(dJ6D) : bg4k.pfix || "");
            if ( !! bg4k.sfix) {
                if (dJ6D.length <= 1) {
                    if ( !! bg4k.pdft) jG8y.push(bg4k.pdft)
                } else {
                    for (var i = 1, l = dJ6D.length; i < l; i++) {
                        if (i > 1) jG8y.push(" ");
                        jG8y.push(dJ6D[i])
                    }
                }
                jG8y.push(bg4k.sfix)
            }
        }
    }();
    var bUm4q = function(IP6J, jG8y) {
        if (!IP6J || !IP6J.length) return;
        if (IP6J.length == 1) {
            var bfq3x = IP6J.pop();
            Eb5g(bfq3x);
            jG8y.push(bfq3x == "" ? '""' : bfq3x);
            return
        }
        var bfu3x = IP6J.pop().split(":");
        jG8y.push("__MDF['" + bfu3x.shift() + "'](");
        bUm4q(IP6J, jG8y);
        if (bfu3x.length > 0) {
            var bf4j = bfu3x.join(":");
            Eb5g(bf4j);
            jG8y.push("," + bf4j)
        }
        jG8y.push(")")
    };
    var baz2x = function(bo5t, jG8y) {
        if (!bo5t) return;
        var xb3x = bo5t.split("\n");
        if (!xb3x || !xb3x.length) return;
        for (var i = 0, l = xb3x.length, hu7n; i < l; i++) {
            hu7n = xb3x[i];
            if ( !! IL6F) {
                hu7n = hu7n.trim();
                if (!hu7n) continue
            }
            cBp1x(hu7n, jG8y);
            if ( !! IL6F && i < l - 1) jG8y.push("__OUT.push('\\n');")
        }
    };
    var cBp1x = function() {
        var cBl1x = /\|\|/g,
            cBc1x = /#@@#/g;
        return function(bo5t, jG8y) {
            var Qr8j = "}",
                Qs8k = -1,
                bq5v = bo5t.length,
                wy2x, fR7K, IS6M, bai1x, Qz8r;
            while (Qs8k + Qr8j.length < bq5v) {
                wy2x = "${";
                fR7K = "}";
                IS6M = bo5t.indexOf(wy2x, Qs8k + Qr8j.length);
                if (IS6M < 0) break;
                if (bo5t.charAt(IS6M + 2) == "%") {
                    wy2x = "${%";
                    fR7K = "%}"
                }
                bai1x = bo5t.indexOf(fR7K, IS6M + wy2x.length);
                if (bai1x < 0) break;
                baf1x(bo5t.substring(Qs8k + Qr8j.length, IS6M), jG8y);
                Qz8r = bo5t.substring(IS6M + wy2x.length, bai1x).replace(cBl1x, "#@@#").split("|");
                for (var i = 0, l = Qz8r.length; i < l; Qz8r[i] = Qz8r[i].replace(cBc1x, "||"), i++);
                jG8y.push("__OUT.push(");
                bUm4q(Qz8r, jG8y);
                jG8y.push(");");
                Qr8j = fR7K;
                Qs8k = bai1x
            }
            baf1x(bo5t.substring(Qs8k + Qr8j.length), jG8y)
        }
    }();
    var baf1x = function() {
        var bz5E = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cBa1x = function(bo5t) {
            return (bo5t || "").replace(bz5E.r, function($1) {
                return bz5E[$1] || $1
            })
        };
        return function(bo5t, jG8y) {
            if (!bo5t) return;
            jG8y.push("__OUT.push('" + cBa1x(bo5t) + "');")
        }
    }();
    var cAZ1x = function() {
        var cAY1x = /\t/g,
            cAX1x = /\n/g,
            cAT1x = /\r\n?/g;
        var bUd4h = function(bo5t, wy2x) {
            var r4v = bo5t.indexOf("}", wy2x + 1);
            while (bo5t.charAt(r4v - 1) == "\\") {
                r4v = bo5t.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var cAO1x = function() {
            var br5w = [],
                GL6F = arguments[0];
            for (var x in GL6F) {
                x = (x || "").trim();
                if (!x) continue;
                br5w.push(x + "=$v('" + x + "')")
            }
            return br5w.length > 0 ? "var " + br5w.join(",") + ";" : ""
        };
        return function(bo5t) {
            hE7x = {};
            bo5t = bo5t.replace(cAT1x, "\n").replace(cAY1x, "    ");
            var rM0x = ["if(!__CTX) return '';", ""];
            rM0x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rM0x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rM0x.push("__OUT=[];");
            var GR6L = -1,
                bq5v = bo5t.length;
            var nc9T, IY6S, QI8A, QQ9H, Ao4s, QS9J, bir4v, QU9L;
            while (GR6L + 1 < bq5v) {
                nc9T = GR6L;
                nc9T = bo5t.indexOf("{", nc9T + 1);
                while (nc9T >= 0) {
                    IY6S = bUd4h(bo5t, nc9T);
                    QI8A = bo5t.substring(nc9T, IY6S);
                    QQ9H = QI8A.match(bS5X.blk);
                    if ( !! QQ9H) {
                        Ao4s = QQ9H[1].length + 1;
                        QS9J = bo5t.indexOf("}", nc9T + Ao4s);
                        if (QS9J >= 0) {
                            bir4v = QS9J - nc9T - Ao4s <= 0 ? "{/" + QQ9H[1] + "}" : QI8A.substr(Ao4s + 1);
                            Ao4s = bo5t.indexOf(bir4v, QS9J + 1);
                            if (Ao4s >= 0) {
                                baz2x(bo5t.substring(GR6L + 1, nc9T), rM0x);
                                QU9L = bo5t.substring(QS9J + 1, Ao4s);
                                switch (QQ9H[1]) {
                                    case "cdata":
                                        baf1x(QU9L, rM0x);
                                        break;
                                    case "minify":
                                        baf1x(QU9L.replace(cAX1x, " ").replace(bUv4z, " "), rM0x);
                                        break;
                                    case "eval":
                                        if ( !! QU9L) rM0x.push("__OUT.push((function(){" + QU9L + "})());");
                                        break
                                }
                                nc9T = GR6L = Ao4s + bir4v.length - 1
                            }
                        }
                    } else if (bo5t.charAt(nc9T - 1) != "$" && bo5t.charAt(nc9T - 1) != "\\" && QI8A.substr(QI8A.charAt(1) == "/" ? 2 : 1).search(bS5X.tag) == 0) {
                        break
                    }
                    nc9T = bo5t.indexOf("{", nc9T + 1)
                }
                if (nc9T < 0) break;
                IY6S = bUd4h(bo5t, nc9T);
                if (IY6S < 0) break;
                baz2x(bo5t.substring(GR6L + 1, nc9T), rM0x);
                cBy1x(bo5t.substring(nc9T, IY6S + 1), rM0x);
                GR6L = IY6S
            }
            baz2x(bo5t.substring(GR6L + 1), rM0x);
            rM0x.push(';return __OUT.join("");');
            rM0x[1] = cAO1x(hE7x);
            hE7x = null;
            return new Function("__CTX", "__MDF", rM0x.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gJ7C
    };
    TrimPath.merge = function() {
        var QW9N = {};
        TrimPath.dump = function() {
            return {
                func: QW9N,
                text: PT8L
            }
        };
        return function(fj6d, j4n, jM8E) {
            try {
                j4n = j4n || {};
                if (!QW9N[fj6d] && !PT8L[fj6d]) return "";
                if (!QW9N[fj6d]) {
                    QW9N[fj6d] = cAZ1x(PT8L[fj6d]);
                    delete PT8L[fj6d]
                }
                if ( !! jM8E) {
                    for (var x in bS5X.ext) if (!jM8E[x]) jM8E[x] = bS5X.ext[x]
                }
                return QW9N[fj6d](j4n, jM8E || bS5X.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cAN1x = +(new Date);
        return function(bo5t, fj6d) {
            if (!bo5t) return "";
            fj6d = fj6d || "ck_" + cAN1x++;
            PT8L[fj6d] = bo5t;
            return fj6d
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        eu6o = {}, bUc4g = {};
    a3x.Ja6U = TrimPath.seed;
    a3x.bZ5e = function() {
        var bUb4f = function(C4G) {
            return !a3x.iI8A ? "" : a3x.iI8A(C4G)
        };
        return function(fj6d, j4n, jM8E) {
            j4n = NEJ.X(NEJ.X({}, bUc4g), j4n);
            j4n.inline = bUb4f;
            jM8E = NEJ.X(NEJ.X({}, eu6o), jM8E);
            jM8E.rand = k4o.oh9Y;
            jM8E.format = k4o.if7Y;
            jM8E.escape = k4o.dG6A;
            jM8E.inline = bUb4f;
            return TrimPath.merge(fj6d, j4n, jM8E)
        }
    }();
    a3x.es6m = function(bo5t, cAK1x) {
        if (!bo5t) return "";
        var fj6d, F4J = a3x.B4F(bo5t);
        if ( !! F4J) {
            fj6d = F4J.id;
            bo5t = F4J.value || F4J.innerText;
            if (!cAK1x) a3x.cJ5O(F4J)
        }
        return TrimPath.parse(bo5t, fj6d)
    };
    a3x.dI6C = function(bI5N, fj6d, j4n, jM8E) {
        bI5N = a3x.B4F(bI5N);
        if ( !! bI5N) bI5N.innerHTML = a3x.bZ5e(fj6d, j4n, jM8E);
        return this
    };
    a3x.cDh2x = function(bz5E) {
        NEJ.X(eu6o, bz5E)
    };
    a3x.cAF1x = function(bz5E) {
        NEJ.X(bUc4g, bz5E)
    };
    c4g("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var dv6p = NEJ.P("nej.p"),
        N4R = window,
        lk8c = dv6p.HP6J,
        bTX4b = lk8c.ipad || lk8c.iphone;
    if (!bTX4b && !! N4R.requestAnimationFrame && !! N4R.cancelRequestAnimationFrame) return;
    var kb8T = dv6p.ds6m.prefix.pro;
    if (!bTX4b && !! N4R[kb8T + "RequestAnimationFrame"] && !! N4R[kb8T + "CancelRequestAnimationFrame"]) {
        N4R.requestAnimationFrame = N4R[kb8T + "RequestAnimationFrame"];
        N4R.cancelRequestAnimationFrame = N4R[kb8T + "CancelRequestAnimationFrame"];
        return
    }
    var ZF1x = lk8c.desktop ? 80 : lk8c.ios ? 50 : 30;
    N4R.requestAnimationFrame = function(cK5P) {
        return window.setTimeout(function() {
            try {
                cK5P(+(new Date))
            } catch (ex) {}
        }, 1e3 / ZF1x)
    };
    N4R.cancelRequestAnimationFrame = function(C4G) {
        window.clearTimeout(C4G);
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        be4i = c4g("nej.h"),
        cY5d = c4g("nej.x"),
        ZE1x = c4g("nej.ut.j.cb"),
        gi7b;
    if ( !! a3x.rG0x) return;
    a3x.rG0x = cY5d.rG0x = function() {
        var R4V = {}, gK7D = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d4h) {
            var C4G = decodeURIComponent(d4h.target),
                u4y = d4h.type.toLowerCase();
            var dt6n = R4V[C4G + "-on" + u4y];
            if ( !! dt6n) {
                try {
                    dt6n(d4h)
                } catch (e) {}
                return
            }
            var cN5S = R4V[C4G + "-tgt"];
            if ( !! cN5S && gK7D.test(u4y)) {
                bTT4X(cN5S, d4h)
            }
        };
        var bki4m = function(e4i) {
            var bI5N = a3x.B4F(e4i.parent) || document.body,
                dT6N = a3x.bZ5e(gi7b, e4i);
            bI5N.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dT6N)
        };
        var bTT4X = function(C4G, d4h) {
            var u4y = d4h.type.toLowerCase();
            requestAnimationFrame(function() {
                h4l.z4D(C4G, u4y)
            })
        };
        var cAx1x = function(hT7M) {
            return !!hT7M && !! hT7M.inited && !! hT7M.inited()
        };
        var Re9V = function(C4G) {
            var br5w = [document.embeds[C4G], a3x.B4F(C4G), document[C4G], window[C4G]],
                r4v = k4o.eC6w(br5w, cAx1x),
                hT7M = br5w[r4v],
                bku4y = C4G + "-count";
            R4V[bku4y]++;
            if ( !! hT7M || R4V[bku4y] > 100) {
                R4V[C4G](hT7M);
                delete R4V[C4G];
                delete R4V[bku4y];
                return
            }
            window.setTimeout(Re9V.g4k(null, C4G), 300)
        };
        var cAw1x = function(e4i) {
            var C4G = e4i.id,
                cl5q = e4i.params;
            if (!cl5q) {
                cl5q = {};
                e4i.params = cl5q
            }
            var hE7x = cl5q.flashvars || "";
            hE7x += (!hE7x ? "" : "&") + ("id=" + C4G);
            if (!e4i.hidden && ( !! e4i.target || be4i.bdB3x(cl5q.wmode))) {
                var hN7G = a3x.lv8n(e4i.target) || a3x.lv8n(e4i.parent),
                    ZA1x = k4o.bbn2x();
                ZE1x["cb" + ZA1x] = bTT4X.g4k(null, hN7G);
                hE7x += "&onevent=nej.ut.j.cb.cb" + ZA1x;
                R4V[C4G + "-tgt"] = hN7G
            }
            cl5q.flashvars = hE7x;
            k4o.eC6w(e4i, function(D4H, J4N) {
                if (k4o.gG7z(D4H) && J4N != "onready") {
                    R4V[C4G + "-" + J4N] = D4H
                }
            })
        };
        return function(e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src) return;
            var C4G = "flash_" + k4o.bbn2x();
            e4i.id = C4G;
            cAw1x(e4i);
            bki4m(e4i);
            if (!e4i.onready) return;
            R4V[C4G] = e4i.onready;
            R4V[C4G + "-count"] = 0;
            Re9V(C4G)
        }
    }();
    gi7b = a3x.es6m('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&¶ms||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cY5d.isChange = !0
})();
(function() {
    var c4g = NEJ.P,
        it8l = c4g("nej.c"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut.j"),
        ZE1x = c4g("nej.ut.j.cb"),
        R4V = {}, gJ7C = +(new Date),
        bkK4O;
    if ( !! N4R.blj4n) return;
    ZE1x["ld" + gJ7C] = function(J4N, cG5L) {
        var jY8Q = R4V[J4N];
        if (!jY8Q) return;
        delete R4V[J4N];
        jY8Q.uT2x({
            status: 200,
            result: cG5L
        })
    };
    ZE1x["er" + gJ7C] = function(J4N, ex6r) {
        var jY8Q = R4V[J4N];
        if (!jY8Q) return;
        delete R4V[J4N];
        jY8Q.uT2x({
            status: ex6r || 0
        })
    };
    N4R.blj4n = NEJ.C();
    bkK4O = N4R.blj4n.O4S(N4R.IK6E);
    bkK4O.co5t = function(e4i) {
        var hT7M = R4V.flash;
        if (k4o.eJ6D(hT7M)) {
            hT7M.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!hT7M) {
            R4V.flash = [this.co5t.g4k(this, e4i)];
            a3x.rG0x({
                hidden: !0,
                src: it8l.B4F("ajax.swf"),
                onready: function(hT7M) {
                    if (!hT7M) return;
                    var i4m = R4V.flash;
                    R4V.flash = hT7M;
                    k4o.no9f(i4m, function(dt6n) {
                        try {
                            dt6n()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Af4j = "swf-" + k4o.oh9Y();
        R4V[this.Af4j] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e4i.request);
        j4n.key = this.Af4j;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gJ7C;
        j4n.onloaded = "nej.ut.j.cb.ld" + gJ7C;
        var bTS4W = it8l.csE9v(j4n.url);
        if ( !! bTS4W) j4n.policyURL = bTS4W;
        hT7M.request(j4n)
    };
    bkK4O.ks8k = function() {
        delete R4V[this.Af4j];
        this.uT2x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        be4i = c4g("nej.h");
    be4i.bTP4T = function() {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kN8F) {
            kN8F = kN8F || "";
            if (dh6b.test(kN8F)) return RegExp.$1;
            return "*"
        }
    }();
    be4i.blR5W = function(j4n) {
        return j4n
    };
    be4i.blT5Y = function(Zu1x, e4i) {
        if (!Zu1x.postMessage) return;
        e4i = e4i || bb4f;
        Zu1x.postMessage(be4i.blR5W(e4i.data), be4i.bTP4T(e4i.origin))
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.fJ7C) return;
    N4R.fJ7C = NEJ.C();
    b4f = N4R.fJ7C.O4S(N4R.cH5M);
    b4f.cx5C = function() {
        this.S4W = {};
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.Rm9d = a3x.B4F(e4i.element) || window;
        this.bTO4S(e4i.event);
        this.cAo1x();
        this.z4D("oninit")
    };
    b4f.bD5I = function() {
        var GW6Q = function(D4H, J4N, bz5E) {
            if (!k4o.eJ6D(D4H)) {
                k4o.bbo2x(this.Rm9d, J4N)
            }
            delete bz5E[J4N]
        };
        return function() {
            this.bG5L();
            k4o.eC6w(this.S4W, GW6Q, this);
            delete this.Rm9d
        }
    }();
    b4f.Zq1x = function(F4J, u4y) {
        F4J = a3x.B4F(F4J);
        return F4J == this.Rm9d && (!u4y || !! this.S4W["on" + u4y])
    };
    b4f.bTO4S = function(d4h) {
        if (k4o.fG7z(d4h)) {
            var V4Z = "on" + d4h;
            if (!this.S4W[V4Z]) {
                this.S4W[V4Z] = this.cAk1x.g4k(this, d4h)
            }
            this.bTM4Q(d4h);
            return
        }
        if (k4o.eJ6D(d4h)) {
            k4o.bd4h(d4h, this.bTO4S, this)
        }
    };
    b4f.bTM4Q = function(u4y) {
        var d4h = "on" + u4y,
            dt6n = this.Rm9d[d4h],
            bTL4P = this.S4W[d4h];
        if (dt6n != bTL4P) {
            this.Zp1x(u4y);
            if ( !! dt6n && dt6n != bs5x) this.bTJ4N(u4y, dt6n);
            this.Rm9d[d4h] = bTL4P
        }
    };
    b4f.bTJ4N = function(u4y, dt6n, czW1x) {
        var i4m = this.S4W[u4y];
        if (!i4m) {
            i4m = [];
            this.S4W[u4y] = i4m
        }
        if (k4o.gG7z(dt6n)) {
            !czW1x ? i4m.push(dt6n) : i4m.unshift(dt6n)
        }
    };
    b4f.Zp1x = function(u4y, dt6n) {
        var i4m = this.S4W[u4y];
        if (!i4m || !i4m.length) return;
        if (!dt6n) {
            delete this.S4W[u4y];
            return
        }
        k4o.no9f(i4m, function(D4H, r4v, Jh6b) {
            if (dt6n === D4H) {
                Jh6b.splice(r4v, 1);
                return !0
            }
        })
    };
    b4f.cAk1x = function(u4y, d4h) {
        d4h = d4h || {
            noargs: !0
        };
        d4h.type = u4y;
        this.z4D("ondispatch", d4h);
        if ( !! d4h.stopped) return;
        k4o.bd4h(this.S4W[u4y], function(dt6n) {
            try {
                dt6n(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b4f.cAo1x = function() {
        var bpm5r = function(d4h) {
            var bf4j = d4h.args,
                u4y = bf4j[1].toLowerCase();
            if (this.Zq1x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                this.bTM4Q(u4y);
                this.bTJ4N(u4y, bf4j[2], bf4j[3]);
                this.z4D("oneventadd", {
                    type: u4y,
                    listener: bf4j[2]
                })
            }
        };
        var czV1x = function(d4h) {
            var bf4j = d4h.args,
                u4y = bf4j[1].toLowerCase();
            if (this.Zq1x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                this.Zp1x(u4y, bf4j[2])
            }
        };
        var bko4s = function(d4h) {
            var bf4j = d4h.args,
                u4y = (bf4j[1] || "").toLowerCase();
            if (this.Zq1x(bf4j[0])) {
                if ( !! u4y) {
                    this.Zp1x(u4y);
                    return
                }
                k4o.eC6w(this.S4W, function(D4H, J4N) {
                    if (k4o.eJ6D(D4H)) {
                        this.Zp1x(J4N)
                    }
                }, this)
            }
        };
        var czS1x = function(d4h) {
            var bf4j = d4h.args,
                u4y = bf4j[1].toLowerCase();
            if (this.Zq1x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                bf4j[0]["on" + u4y].apply(bf4j[0], bf4j.slice(2))
            }
        };
        return function() {
            if ( !! this.czQ1x) return;
            this.czQ1x = true;
            h4l.s4w = h4l.s4w.eB6v(bpm5r.g4k(this));
            h4l.mw9n = h4l.mw9n.eB6v(czV1x.g4k(this));
            h4l.hd7W = h4l.hd7W.eB6v(bko4s.g4k(this));
            h4l.z4D = h4l.z4D.eB6v(czS1x.g4k(this))
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        be4i = c4g("nej.h"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut");
    if (N4R.nj9a.trident) return;
    if ( !! window.postMessage) {
        be4i.blR5W = be4i.blR5W.eB6v(function(d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var J4N = "MSG|",
        jZ8R = [];
    var czP1x = function() {
        var V4Z = unescape(window.name || "").trim();
        if (!V4Z || V4Z.indexOf(J4N) != 0) return;
        window.name = "";
        var o4s = k4o.Pm8e(V4Z.replace(J4N, ""), "|"),
            kN8F = (o4s.origin || "").toLowerCase();
        if ( !! kN8F && kN8F != "*" && location.href.toLowerCase().indexOf(kN8F) != 0) return;
        h4l.z4D(window, "message", {
            data: JSON.parse(o4s.data || "null"),
            source: window.frames[o4s.self] || o4s.self,
            origin: be4i.bTP4T(o4s.ref || document.referrer)
        })
    };
    var czJ1x = function() {
        var Zf1x;
        var czI1x = function(bz5E, r4v, i4m) {
            if (k4o.di6c(Zf1x, bz5E.w) < 0) {
                Zf1x.push(bz5E.w);
                i4m.splice(r4v, 1);
                bz5E.w.name = bz5E.d
            }
        };
        return function() {
            Zf1x = [];
            k4o.no9f(jZ8R, czI1x);
            Zf1x = null
        }
    }();
    be4i.blT5Y = function() {
        var czH1x = function(j4n) {
            var o4s = {};
            j4n = j4n || bb4f;
            o4s.origin = j4n.origin || "";
            o4s.ref = location.href;
            o4s.self = j4n.source;
            o4s.data = JSON.stringify(j4n.data);
            return J4N + k4o.uX2x(o4s, "|", !0)
        };
        return be4i.blT5Y.eB6v(function(d4h) {
            d4h.stopped = !0;
            var bf4j = d4h.args;
            jZ8R.unshift({
                w: bf4j[0],
                d: escape(czH1x(bf4j[1]))
            })
        })
    }();
    I4M.fJ7C.A4E({
        element: window,
        event: "message"
    });
    window.setInterval(czJ1x, 100);
    window.setInterval(czP1x, 20)
})();
(function() {
    var c4g = NEJ.P,
        be4i = c4g("nej.h"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j");
    v4z.czB1x = function() {
        var gL7E = window.name || "_parent",
            czA1x = {
                gx7q: window.top,
                gL7E: window,
                bI5N: window.parent
            };
        return function(cN5S, e4i) {
            if (typeof cN5S == "string") {
                cN5S = czA1x[cN5S] || window.frames[cN5S];
                if (!cN5S) return this
            }
            var j4n = NEJ.X({
                origin: "*",
                source: gL7E
            }, e4i);
            be4i.blT5Y(cN5S, j4n);
            return this
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        it8l = c4g("nej.c"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        R4V = {}, Zb1x;
    if ( !! N4R.bqV6P) return;
    N4R.bqV6P = NEJ.C();
    Zb1x = N4R.bqV6P.O4S(N4R.IK6E);
    Zb1x.cx5C = function() {
        var eV6P = "NEJ-AJAX-DATA:",
            Gd5i = !1;
        var brd6X = function(d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eV6P) != 0) return;
            j4n = JSON.parse(j4n.replace(eV6P, ""));
            var jY8Q = R4V[j4n.key];
            if (!jY8Q) return;
            delete R4V[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jY8Q.uT2x(j4n)
        };
        var brh6b = function() {
            if (!Gd5i) {
                Gd5i = !0;
                h4l.s4w(window, "message", brd6X)
            }
        };
        return function() {
            this.cD5I();
            brh6b()
        }
    }();
    Zb1x.co5t = function(e4i) {
        var gm7f = e4i.request,
            jY8Q = it8l.cjL7E(gm7f.url),
            eh6b = R4V[jY8Q];
        if (k4o.eJ6D(eh6b)) {
            eh6b.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!eh6b) {
            R4V[jY8Q] = [this.co5t.g4k(this, e4i)];
            a3x.bdk2x({
                src: jY8Q,
                visible: !1,
                onload: function(d4h) {
                    var i4m = R4V[jY8Q];
                    R4V[jY8Q] = h4l.W4a(d4h).contentWindow;
                    k4o.no9f(i4m, function(dt6n) {
                        try {
                            dt6n()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Af4j = "frm-" + k4o.oh9Y();
        R4V[this.Af4j] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gm7f);
        j4n.key = this.Af4j;
        j4n.headers = e4i.headers;
        v4z.czB1x(R4V[jY8Q], {
            data: j4n
        })
    };
    Zb1x.ks8k = function() {
        delete R4V[this.Af4j];
        this.uT2x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        em6g = c4g("nej.g"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        R4V = {}, Jk6e;
    if ( !! N4R.brw6q) return;
    N4R.brw6q = NEJ.C();
    Jk6e = N4R.brw6q.O4S(N4R.IK6E);
    Jk6e.cx5C = function() {
        var eV6P = "NEJ-UPLOAD-RESULT:",
            Gd5i = !1;
        var brd6X = function(d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eV6P) != 0) return;
            j4n = JSON.parse(j4n.replace(eV6P, ""));
            var jY8Q = R4V[j4n.key];
            if (!jY8Q) return;
            delete R4V[j4n.key];
            jY8Q.uT2x(decodeURIComponent(j4n.result))
        };
        var brh6b = function() {
            if (!Gd5i) {
                Gd5i = !0;
                h4l.s4w(window, "message", brd6X)
            }
        };
        return function() {
            this.cD5I();
            brh6b()
        }
    }();
    Jk6e.bD5I = function() {
        this.bG5L();
        a3x.cJ5O(this.brP6J);
        delete this.brP6J;
        window.clearTimeout(this.ed6X);
        delete this.ed6X
    };
    Jk6e.uT2x = function(cG5L) {
        var Q4U;
        try {
            Q4U = JSON.parse(cG5L);
            this.z4D("onload", Q4U)
        } catch (e) {
            this.z4D("onerror", {
                code: em6g.bYx5C,
                message: cG5L
            })
        }
    };
    Jk6e.co5t = function() {
        var czp1x = function() {
            var mx9o, cG5L;
            try {
                var mx9o = this.brP6J.contentWindow.document.body,
                    cG5L = mx9o.innerText || mx9o.textContent
            } catch (e) {
                return
            }
            this.uT2x(cG5L)
        };
        var bsu6o = function(Y4c, fl6f, rl0x) {
            v4z.bn5s(Y4c, {
                type: "json",
                method: "POST",
                cookie: rl0x,
                mode: parseInt(fl6f) || 0,
                onload: function(j4n) {
                    if (!this.ed6X) return;
                    this.z4D("onuploading", j4n);
                    this.ed6X = window.setTimeout(bsu6o.g4k(this, Y4c, fl6f, rl0x), 1e3)
                }.g4k(this),
                onerror: function(cb5g) {
                    if (!this.ed6X) return;
                    this.ed6X = window.setTimeout(bsu6o.g4k(this, Y4c, fl6f, rl0x), 1e3)
                }.g4k(this)
            })
        };
        return function(e4i) {
            var gm7f = e4i.request,
                ph0x = e4i.headers,
                fc6W = gm7f.data,
                V4Z = "fom-" + k4o.oh9Y();
            R4V[V4Z] = this;
            fc6W.target = V4Z;
            fc6W.method = "POST";
            fc6W.enctype = em6g.EK5P;
            fc6W.encoding = em6g.EK5P;
            var Y4c = fc6W.action || "",
                lE9v = Y4c.indexOf("?") <= 0 ? "?" : "&";
            fc6W.action = Y4c + lE9v + "_proxy_=form";
            this.brP6J = a3x.bdk2x({
                name: V4Z,
                onload: function(d4h) {
                    var eh6b = h4l.W4a(d4h);
                    h4l.s4w(eh6b, "load", czp1x.g4k(this));
                    fc6W.submit();
                    var bTC4G = (fc6W.nej_query || bb4f).value;
                    if (!bTC4G) return;
                    var fl6f = (fc6W.nej_mode || bb4f).value,
                        rl0x = (fc6W.nej_cookie || bb4f).value == "true";
                    this.ed6X = window.setTimeout(bsu6o.g4k(this, bTC4G, fl6f, rl0x), 100)
                }.g4k(this)
            })
        }
    }();
    Jk6e.ks8k = function() {
        this.z4D("onerror", {
            code: em6g.cel6f,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        be4i = c4g("nej.h"),
        N4R = c4g("nej.ut.j");
    be4i.bra6U = function() {
        return new XMLHttpRequest
    };
    be4i.bti6c = function(fl6f, YZ1x, e4i) {
        var bz5E = !! YZ1x ? {
            2: N4R.brw6q
        } : {
            2: N4R.bqV6P,
            3: N4R.blj4n
        };
        return (bz5E[fl6f] || N4R.baO2x).A4E(e4i)
    }
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        be4i = c4g("nej.h");
    if (N4R.nj9a.trident) return;
    be4i.bra6U = function() {
        var NG8y = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var czj1x = function() {
            for (var i = 0, l = NG8y.length; i < l; i++) {
                try {
                    return new ActiveXObject(NG8y[i])
                } catch (e) {}
            }
            return null
        };
        return be4i.bra6U.eB6v(function(d4h) {
            if ( !! window.XMLHttpRequest) return;
            d4h.stopped = !0;
            d4h.value = czj1x()
        })
    }();
    be4i.bti6c = function() {
        var Fs5x = {
            0: 2,
            1: 3
        };
        return be4i.bti6c.eB6v(function(d4h) {
            var bf4j = d4h.args,
                fl6f = bf4j[0] || 0;
            bf4j[0] = !! bf4j[1] ? 2 : Fs5x[fl6f] || fl6f
        })
    }()
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        be4i = c4g("nej.h"),
        em6g = c4g("nej.g"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        of9W = {}, Ih6b = bs5x;
    v4z.ks8k = function(fj6d) {
        var R4V = of9W[fj6d];
        if (!R4V) return this;
        R4V.req.ks8k();
        return this
    };
    v4z.YY1x = function(dV6P) {
        Ih6b = dV6P || bs5x;
        return this
    };
    v4z.bn5s = function() {
        var jA8s = (location.protocol + "//" + location.host).toLowerCase();
        var czf1x = function(Y4c) {
            var kN8F = k4o.cCu2x(Y4c);
            return !!kN8F && kN8F != jA8s
        };
        var cza1x = function(ph0x) {
            return (ph0x || bb4f)[em6g.yg3x] == em6g.EK5P
        };
        var cyZ1x = function(e4i) {
            var YZ1x = cza1x(e4i.headers);
            if (!czf1x(e4i.url) && !YZ1x) return N4R.baO2x.A4E(e4i);
            return be4i.bti6c(e4i.mode, YZ1x, e4i)
        };
        var GW6Q = function(fj6d) {
            var R4V = of9W[fj6d];
            if (!R4V) return;
            if ( !! R4V.req) R4V.req.T4X();
            delete of9W[fj6d]
        };
        var bTB4F = function(fj6d, u4y) {
            var R4V = of9W[fj6d];
            if (!R4V) return;
            GW6Q(fj6d);
            try {
                var d4h = {
                    type: u4y,
                    result: arguments[2]
                };
                Ih6b(d4h);
                if (!d4h.stopped)(R4V[u4y] || bs5x)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yB3x = function(fj6d, j4n) {
            bTB4F(fj6d, "onload", j4n)
        };
        var AE4I = function(fj6d, cb5g) {
            bTB4F(fj6d, "onerror", cb5g)
        };
        return function(Y4c, e4i) {
            e4i = e4i || {};
            var fj6d = k4o.oh9Y(),
                R4V = {
                    onload: e4i.onload || bs5x,
                    onerror: e4i.onerror || bs5x
                };
            of9W[fj6d] = R4V;
            e4i.onload = yB3x.g4k(null, fj6d);
            e4i.onerror = AE4I.g4k(null, fj6d);
            if ( !! e4i.query) {
                var lE9v = Y4c.indexOf("?") < 0 ? "?" : "&",
                    bv5A = e4i.query;
                if (k4o.lw8o(bv5A)) bv5A = k4o.cE5J(bv5A);
                if ( !! bv5A) Y4c += lE9v + bv5A
            }
            e4i.url = Y4c;
            R4V.req = cyZ1x(e4i);
            R4V.req.bpF5K(e4i.data);
            return fj6d
        }
    }();
    v4z.gQ7J = function(fc6W, e4i) {
        var fr6l = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(fr6l, e4i);
        fr6l.data = fc6W;
        fr6l.method = "POST";
        fr6l.timeout = 0;
        fr6l.headers[em6g.yg3x] = em6g.EK5P;
        return v4z.bn5s(fc6W.action, fr6l)
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        em6g = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        N4R = c4g("nej.ut.j"),
        mn9e, gO7H = 6e4;
    if ( !! N4R.Ry9p) return;
    N4R.Ry9p = NEJ.C();
    mn9e = N4R.Ry9p.O4S(I4M.cH5M);
    mn9e.cx5C = function() {
        this.cD5I();
        this.Rz9q = {
            onerror: this.cyT1x.g4k(this),
            onloaded: this.cyS1x.g4k(this)
        };
        if (!this.constructor.S4W) this.constructor.S4W = {
            loaded: {}
        }
    };
    mn9e.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.Jn6h = e4i.version;
        this.beG3x = e4i.timeout;
        this.Rz9q.version = this.Jn6h;
        this.Rz9q.timeout = this.beG3x
    };
    mn9e.bTz3x = function(J4N) {
        delete this.constructor.S4W[J4N]
    };
    mn9e.AH4L = function(J4N) {
        return this.constructor.S4W[J4N]
    };
    mn9e.bTy3x = function(J4N, j4n) {
        this.constructor.S4W[J4N] = j4n
    };
    mn9e.YN1x = bs5x;
    mn9e.bTx3x = function(gm7f) {
        h4l.hd7W(gm7f)
    };
    mn9e.bfF3x = function(gm7f) {
        gm7f.src = this.lB9s;
        document.head.appendChild(gm7f)
    };
    mn9e.AN4R = function() {
        var R4V = this.AH4L(this.lB9s);
        if (!R4V) return;
        window.clearTimeout(R4V.timer);
        this.bTx3x(R4V.request);
        delete R4V.bind;
        delete R4V.timer;
        delete R4V.request;
        this.bTz3x(this.lB9s);
        this.AH4L("loaded")[this.lB9s] = !0
    };
    mn9e.YG1x = function(V4Z) {
        var R4V = this.AH4L(this.lB9s);
        if (!R4V) return;
        var i4m = R4V.bind;
        this.AN4R();
        if ( !! i4m && i4m.length > 0) {
            var cz5E;
            while (i4m.length) {
                cz5E = i4m.shift();
                try {
                    cz5E.z4D(V4Z, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cz5E.T4X()
            }
        }
    };
    mn9e.eI6C = function(cb5g) {
        this.YG1x("onerror", cb5g)
    };
    mn9e.bTu3x = function() {
        this.YG1x("onloaded")
    };
    mn9e.cyw1x = function(Y4c) {
        this.constructor.A4E(this.Rz9q).Jr6l(Y4c)
    };
    mn9e.bTq3x = function(cb5g) {
        var R4V = this.AH4L(this.wl2x);
        if (!R4V) return;
        if ( !! cb5g) R4V.error++;
        R4V.loaded++;
        if (R4V.loaded < R4V.total) return;
        this.bTz3x(this.wl2x);
        this.z4D(R4V.error > 0 ? "onerror" : "onloaded")
    };
    mn9e.cyT1x = function(cb5g) {
        this.bTq3x(!0)
    };
    mn9e.cyS1x = function() {
        this.bTq3x()
    };
    mn9e.Jr6l = function(Y4c) {
        Y4c = k4o.bte6Y(Y4c);
        if (!Y4c) {
            this.z4D("onerror", {
                code: em6g.bua7T,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.lB9s = Y4c;
        if ( !! this.Jn6h) this.lB9s += (this.lB9s.indexOf("?") < 0 ? "?" : "&") + this.Jn6h;
        if (this.AH4L("loaded")[this.lB9s]) {
            try {
                this.z4D("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T4X();
            return this
        }
        var R4V = this.AH4L(this.lB9s),
            gm7f;
        if ( !! R4V) {
            R4V.bind.unshift(this);
            R4V.timer = window.clearTimeout(R4V.timer)
        } else {
            gm7f = this.YN1x();
            R4V = {
                request: gm7f,
                bind: [this]
            };
            this.bTy3x(this.lB9s, R4V);
            h4l.s4w(gm7f, "load", this.bTu3x.g4k(this));
            h4l.s4w(gm7f, "error", this.eI6C.g4k(this, {
                code: em6g.bie4i,
                message: "无法加载指定资源文件[" + this.lB9s + "]！"
            }))
        }
        if (this.beG3x != 0) R4V.timer = window.setTimeout(this.eI6C.g4k(this, {
            code: em6g.bBG8y,
            message: "指定资源文件[" + this.lB9s + "]载入超时！"
        }), this.beG3x || gO7H);
        if ( !! gm7f) this.bfF3x(gm7f);
        this.z4D("onloading");
        return this
    };
    mn9e.bTp3x = function(i4m) {
        if (!i4m || !i4m.length) {
            this.z4D("onerror", {
                code: em6g.bua7T,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wl2x = k4o.oh9Y();
        var R4V = {
            error: 0,
            loaded: 0,
            total: i4m.length
        };
        this.bTy3x(this.wl2x, R4V);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                R4V.total--;
                continue
            }
            this.cyw1x(i4m[i])
        }
        this.z4D("onloading");
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        be4i = c4g("nej.h"),
        N4R = c4g("nej.ut.j"),
        RK9B;
    if ( !! N4R.bgu3x) return;
    N4R.bgu3x = NEJ.C();
    RK9B = N4R.bgu3x.O4S(N4R.Ry9p);
    RK9B.YN1x = function() {
        var eK6E = a3x.dg6a("iframe");
        eK6E.width = 0;
        eK6E.height = 0;
        eK6E.style.display = "none";
        return eK6E
    };
    RK9B.bfF3x = function(gm7f) {
        gm7f.src = this.lB9s;
        document.body.appendChild(gm7f)
    };
    RK9B.eI6C = function(cb5g) {
        var eK6E = (this.AH4L(this.lB9s) || bb4f).request;
        this.YG1x("onerror", cb5g);
        be4i.bdz3x(eK6E)
    };
    RK9B.bTu3x = function() {
        var mx9o = null,
            eK6E = (this.AH4L(this.lB9s) || bb4f).request;
        try {
            mx9o = eK6E.contentWindow.document.body
        } catch (ex) {}
        this.YG1x("onloaded", mx9o);
        be4i.bdz3x(eK6E)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut.j"),
        bgv3x;
    if ( !! N4R.Yw1x) return;
    N4R.Yw1x = NEJ.C();
    bgv3x = N4R.Yw1x.O4S(N4R.Ry9p);
    bgv3x.YN1x = function() {
        return a3x.dg6a("link")
    };
    bgv3x.bfF3x = function(gm7f) {
        gm7f.href = this.lB9s;
        document.head.appendChild(gm7f)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut.j"),
        Yu1x;
    if ( !! N4R.Yt1x) return;
    N4R.Yt1x = NEJ.C();
    Yu1x = N4R.Yt1x.O4S(N4R.Ry9p);
    Yu1x.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.bTn3x = e4i.async;
        this.bgO3x = e4i.charset;
        this.Rz9q.async = !1;
        this.Rz9q.charset = this.bgO3x
    };
    Yu1x.YN1x = function() {
        var gm7f = a3x.dg6a("script");
        if (this.bTn3x != null) gm7f.async = !! this.bTn3x;
        if (this.bgO3x != null) gm7f.charset = this.bgO3x;
        return gm7f
    };
    Yu1x.bTx3x = function(gm7f) {
        a3x.cJ5O(gm7f)
    }
})();
(function() {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        N4R = c4g("nej.ut.j");
    v4z.cyj1x = function(Y4c, e4i) {
        N4R.Yt1x.A4E(e4i).Jr6l(Y4c);
        return this
    };
    v4z.cyi1x = function(i4m, e4i) {
        N4R.Yt1x.A4E(e4i).bTp3x(i4m);
        return this
    };
    v4z.cDn2x = function(Y4c, e4i) {
        N4R.Yw1x.A4E(e4i).Jr6l(Y4c);
        return this
    };
    v4z.cyf1x = function(i4m, e4i) {
        N4R.Yw1x.A4E(e4i).bTp3x(i4m);
        return this
    };
    v4z.bTm3x = function(Y4c, e4i) {
        N4R.bgu3x.A4E(e4i).Jr6l(Y4c);
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        R4V = {}, tv1x = +(new Date) + "-";
    a3x.cZ5e = function() {
        var cF5K = 0;
        var RL9C = function() {
            if (cF5K > 0) return;
            cF5K = 0;
            h4l.z4D(document, "templateready");
            h4l.hd7W(document, "templateready")
        };
        var Yq1x = function(ge7X, e4i) {
            var cS5X = a3x.t4x(ge7X, "src");
            if (!cS5X) return;
            e4i = e4i || bb4f;
            var fT7M = e4i.root;
            if (!fT7M) {
                fT7M = ge7X.ownerDocument.location.href
            } else {
                fT7M = k4o.bte6Y(fT7M)
            }
            cS5X = cS5X.split(",");
            k4o.bd4h(cS5X, function(D4H, r4v, i4m) {
                i4m[r4v] = k4o.bte6Y(D4H, fT7M)
            });
            return cS5X
        };
        var cyd1x = function(ge7X, e4i) {
            if (!ge7X) return;
            var cS5X = Yq1x(ge7X, e4i);
            if ( !! cS5X) v4z.cyf1x(cS5X, {
                version: a3x.t4x(ge7X, "version")
            });
            a3x.bPk2x(ge7X.value)
        };
        var cxX1x = function(D4H) {
            cF5K--;
            a3x.bPl2x(D4H);
            RL9C()
        };
        var cxW1x = function(ge7X, e4i) {
            if (!ge7X) return;
            var cS5X = Yq1x(ge7X, e4i),
                eQ6K = ge7X.value;
            if ( !! cS5X) {
                cF5K++;
                var e4i = {
                    version: a3x.t4x(ge7X, "version"),
                    onloaded: cxX1x.g4k(null, eQ6K)
                };
                window.setTimeout(v4z.cyi1x.g4k(v4z, cS5X, e4i), 0);
                return
            }
            a3x.bPl2x(eQ6K)
        };
        var cxV1x = function(mx9o) {
            cF5K--;
            a3x.cZ5e(mx9o);
            RL9C()
        };
        var cxU1x = function(ge7X, e4i) {
            if (!ge7X) return;
            var cS5X = Yq1x(ge7X, e4i)[0];
            if ( !! cS5X) {
                cF5K++;
                var e4i = {
                    version: a3x.t4x(ge7X, "version"),
                    onloaded: cxV1x
                };
                window.setTimeout(v4z.bTm3x.g4k(v4z, cS5X, e4i), 0)
            }
        };
        var cxT1x = function(C4G, cG5L) {
            cF5K--;
            a3x.Jw6q(C4G, cG5L || "");
            RL9C()
        };
        var cxQ1x = function(ge7X, e4i) {
            if (!ge7X || !ge7X.id) return;
            var C4G = ge7X.id,
                cS5X = Yq1x(ge7X, e4i)[0];
            if ( !! cS5X) {
                cF5K++;
                var Y4c = cS5X + (cS5X.indexOf("?") < 0 ? "?" : "&") + (a3x.t4x(ge7X, "version") || ""),
                    e4i = {
                        type: "text",
                        method: "GET",
                        onload: cxT1x.g4k(null, C4G)
                    };
                window.setTimeout(v4z.bn5s.g4k(v4z, Y4c, e4i), 0)
            }
        };
        var cxP1x = function(f4j, e4i) {
            var u4y = f4j.name.toLowerCase();
            switch (u4y) {
                case "jst":
                    a3x.es6m(f4j, !0);
                    return;
                case "txt":
                    a3x.Jw6q(f4j.id, f4j.value || "");
                    return;
                case "ntp":
                    a3x.iu8m(f4j.value || "", f4j.id);
                    return;
                case "js":
                    cxW1x(f4j, e4i);
                    return;
                case "css":
                    cyd1x(f4j, e4i);
                    return;
                case "html":
                    cxU1x(f4j, e4i);
                    return;
                case "res":
                    cxQ1x(f4j, e4i);
                    return
            }
        };
        I4M.fJ7C.A4E({
            element: document,
            event: "templateready",
            oneventadd: RL9C
        });
        return function(F4J, e4i) {
            F4J = a3x.B4F(F4J);
            if ( !! F4J) {
                var i4m = F4J.tagName == "TEXTAREA" ? [F4J] : F4J.getElementsByTagName("textarea");
                k4o.bd4h(i4m, function(f4j) {
                    cxP1x(f4j, e4i)
                });
                a3x.cJ5O(F4J, !0)
            }
            RL9C();
            return this
        }
    }();
    a3x.Jw6q = function(J4N, D4H) {
        R4V[J4N] = D4H || "";
        return this
    };
    a3x.iI8A = function(J4N) {
        return R4V[J4N] || ""
    };
    a3x.iu8m = function(F4J, J4N) {
        J4N = J4N || k4o.oh9Y();
        F4J = a3x.B4F(F4J) || F4J;
        a3x.Jw6q(tv1x + J4N, F4J);
        a3x.mY9P(F4J);
        return J4N
    };
    a3x.dy6s = function(J4N) {
        if (!J4N) return null;
        J4N = tv1x + J4N;
        var D4H = a3x.iI8A(J4N);
        if (!D4H) return null;
        if (k4o.fG7z(D4H)) {
            D4H = a3x.nH9y(D4H);
            a3x.Jw6q(J4N, D4H)
        }
        return D4H.cloneNode(!0)
    };
    a3x.AS4W = function() {
        var Ih6b = function(D4H, J4N) {
            return J4N == "offset" || J4N == "limit"
        };
        return function(i4m, p4t, e4i) {
            var br5w = [];
            if (!i4m || !i4m.length || !p4t) return br5w;
            e4i = e4i || bb4f;
            var dr6l = i4m.length,
                jT8L = parseInt(e4i.offset) || 0,
                fR7K = Math.min(dr6l, jT8L + (parseInt(e4i.limit) || dr6l)),
                cq5v = {
                    total: i4m.length,
                    range: [jT8L, fR7K]
                };
            NEJ.X(cq5v, e4i, Ih6b);
            for (var i = jT8L, cz5E; i < fR7K; i++) {
                cq5v.index = i;
                cq5v.data = i4m[i];
                cz5E = p4t.A4E(cq5v);
                var C4G = cz5E.FB5G();
                R4V[C4G] = cz5E;
                cz5E.T4X = cz5E.T4X.eB6v(function(C4G, cz5E) {
                    delete R4V[C4G];
                    delete cz5E.T4X
                }.g4k(null, C4G, cz5E));
                br5w.push(cz5E)
            }
            return br5w
        }
    }();
    a3x.bTd3x = function(C4G) {
        return R4V[C4G]
    };
    a3x.cDo2x = function(dY6S, e4i) {
        e4i = e4i || bb4f;
        a3x.cZ5e(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function() {
            dY6S.A4E().z4D("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function() {
        return R4V
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        N4R = c4g("nej.ui"),
        b4f;
    if ( !! N4R.ei6c) return;
    N4R.ei6c = NEJ.C();
    b4f = N4R.ei6c.O4S(I4M.cH5M);
    b4f.cx5C = function() {
        this.cD5I();
        a3x.bOQ1x();
        this.ce5j();
        this.bW5b()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.cxC1x(e4i.clazz);
        this.bTb3x(e4i.parent)
    };
    b4f.bD5I = function() {
        this.bG5L();
        this.bSZ3x();
        delete this.gg7Z;
        a3x.mY9P(this.n4r);
        a3x.x4B(this.n4r, this.bjR4V);
        delete this.bjR4V
    };
    b4f.ce5j = bs5x;
    b4f.bW5b = function() {
        if (!this.cd5i) this.Jz6t();
        this.n4r = a3x.dy6s(this.cd5i);
        if (!this.n4r) this.n4r = a3x.dg6a("div", this.mb9S);
        a3x.y4C(this.n4r, this.mb9S)
    };
    b4f.Jz6t = bs5x;
    b4f.cxC1x = function(dZ6T) {
        this.bjR4V = dZ6T || "";
        a3x.y4C(this.n4r, this.bjR4V)
    };
    b4f.cxx1x = function() {
        if (!this.mb9S) return;
        a3x.y4C(this.gg7Z, this.mb9S + "-parent")
    };
    b4f.bSZ3x = function() {
        if (!this.mb9S) return;
        a3x.x4B(this.gg7Z, this.mb9S + "-parent")
    };
    b4f.lQ9H = function() {
        return this.n4r
    };
    b4f.bTb3x = function(bI5N) {
        if (!this.n4r) return this;
        this.bSZ3x();
        if (k4o.gG7z(bI5N)) {
            this.gg7Z = bI5N(this.n4r)
        } else {
            this.gg7Z = a3x.B4F(bI5N);
            if ( !! this.gg7Z) this.gg7Z.appendChild(this.n4r)
        }
        this.cxx1x();
        return this
    };
    b4f.L4P = function() {
        if (!this.gg7Z || !this.n4r || this.n4r.parentNode == this.gg7Z) return this;
        this.gg7Z.appendChild(this.n4r);
        return this
    };
    b4f.bu5z = function() {
        a3x.mY9P(this.n4r);
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        be4i = c4g("nej.h"),
        N4R = c4g("nej.ui"),
        vV2x, bSW3x;
    if ( !! N4R.Sc9T) return;
    N4R.Sc9T = NEJ.C();
    vV2x = N4R.Sc9T.O4S(N4R.ei6c);
    bSW3x = N4R.Sc9T.cs5x;
    vV2x.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.xp3x("oncontentready", e4i.oncontentready || this.cxo1x.g4k(this));
        this.cxn1x = !! e4i.nohack;
        this.cxk1x = !! e4i.destroyable;
        this.JC6w(e4i.content)
    };
    vV2x.bD5I = function() {
        this.z4D("onbeforerecycle");
        this.bG5L();
        this.XT0x();
        this.JC6w("");
        a3x.eY6S(this.n4r, {
            top: "",
            left: ""
        })
    };
    vV2x.cxo1x = bs5x;
    vV2x.JD6x = bs5x;
    vV2x.XT0x = function() {
        a3x.mY9P(this.n4r);
        if ( !! this.oi9Z) {
            this.oi9Z = be4i.bgs3x(this.n4r);
            delete this.oi9Z
        }
    };
    vV2x.JC6w = function(bo5t) {
        if (!this.n4r || !this.AW4a || bo5t == null) return this;
        bo5t = bo5t || "";
        k4o.fG7z(bo5t) ? this.AW4a.innerHTML = bo5t : this.AW4a.appendChild(bo5t);
        this.z4D("oncontentready", this.AW4a);
        return this
    };
    vV2x.gF7y = function(bi4m) {
        var D4H = bi4m.top;
        if (D4H != null) {
            D4H += "px";
            a3x.ba4e(this.n4r, "top", D4H);
            a3x.ba4e(this.oi9Z, "top", D4H)
        }
        var D4H = bi4m.left;
        if (D4H != null) {
            D4H += "px";
            a3x.ba4e(this.n4r, "left", D4H);
            a3x.ba4e(this.oi9Z, "left", D4H)
        }
        return this
    };
    vV2x.L4P = function() {
        a3x.ba4e(this.n4r, "visibility", "hidden");
        bSW3x.L4P.apply(this, arguments);
        this.JD6x();
        a3x.ba4e(this.n4r, "visibility", "");
        if (!this.cxn1x) {
            this.oi9Z = be4i.oi9Z(this.n4r)
        }
        return this
    };
    vV2x.bu5z = function() {
        this.cxk1x ? this.T4X() : this.XT0x();
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ui"),
        AX4b;
    if ( !! N4R.XP0x) return;
    N4R.XP0x = NEJ.C();
    AX4b = N4R.XP0x.O4S(N4R.ei6c);
    AX4b.bl5q = function(e4i) {
        this.So9f();
        this.bm5r(this.cxj1x(e4i));
        this.cc5h.onbeforerecycle = this.T4X.g4k(this);
        this.pb0x = this.blJ5O()
    };
    AX4b.bD5I = function() {
        this.z4D("onbeforerecycle");
        this.bG5L();
        delete this.cc5h;
        a3x.mY9P(this.n4r);
        var AZ4d = this.pb0x;
        if ( !! AZ4d) {
            delete this.pb0x;
            AZ4d.T4X()
        }
    };
    AX4b.blJ5O = bs5x;
    AX4b.cxj1x = function(e4i) {
        var o4s = {};
        k4o.eC6w(e4i, function(p4t, J4N) {
            this.cc5h.hasOwnProperty(J4N) ? this.cc5h[J4N] = p4t : o4s[J4N] = p4t
        }, this);
        return o4s
    };
    AX4b.So9f = function() {
        this.cc5h = {
            clazz: "",
            parent: null,
            content: this.n4r,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    AX4b.L4P = function() {
        if ( !! this.pb0x) this.pb0x.L4P();
        this.z4D("onaftershow");
        return this
    };
    AX4b.bu5z = function() {
        if ( !! this.pb0x) this.pb0x.bu5z();
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        em6g = c4g("nej.g"),
        be4i = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ui"),
        Sq9h, bSV3x;
    if ( !! N4R.JE6y) return;
    var iZ8R = a3x.tO2x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em6g.bkx4B + ");}");
    N4R.JE6y = NEJ.C();
    Sq9h = N4R.JE6y.O4S(N4R.ei6c);
    bSV3x = N4R.JE6y.cs5x;
    Sq9h.bl5q = function(e4i) {
        this.bm5r(e4i);
        var bo5t = e4i.content || " ";
        k4o.fG7z(bo5t) ? this.n4r.innerHTML = bo5t : this.n4r.appendChild(bo5t)
    };
    Sq9h.bD5I = function() {
        this.bG5L();
        this.n4r.innerHTML = " "
    };
    Sq9h.ce5j = function() {
        this.mb9S = iZ8R
    };
    Sq9h.L4P = function() {
        be4i.bgn3x(this.n4r);
        bSV3x.L4P.apply(this, arguments);
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ut"),
        vP2x;
    if ( !! N4R.vN2x) return;
    N4R.vN2x = NEJ.C();
    vP2x = N4R.vN2x.O4S(N4R.cH5M);
    vP2x.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.cxh0x = !! e4i.overflow;
        this.n4r = a3x.B4F(e4i.body);
        this.Bb4f = a3x.B4F(e4i.view) || a3x.bKU1x(this.n4r);
        this.bSU3x = a3x.B4F(e4i.mbar) || this.n4r;
        this.XE0x = parseInt(e4i.direction) || 0;
        if ( !! e4i.isRelative) {
            this.n4r.style.position = "relative";
            this.bnf5k = true;
            this.bnn5s()
        }
        this.bX5c([
            [document, "mouseup", this.bns5x.g4k(this)],
            [document, "mousemove", this.bnL5Q.g4k(this)],
            [this.bSU3x, "mousedown", this.Sz9q.g4k(this)]
        ])
    };
    vP2x.bnn5s = function() {
        if ( !! this.bnf5k) {
            this.JH6B = a3x.hO7H(this.n4r, this.Bb4f);
            this.JH6B.x -= parseInt(a3x.df5k(this.n4r, "left")) || 0;
            this.JH6B.y -= parseInt(a3x.df5k(this.n4r, "top")) || 0
        }
    };
    vP2x.bD5I = function() {
        this.bG5L();
        delete this.n4r;
        delete this.bSU3x;
        delete this.Bb4f
    };
    vP2x.bnZ5e = function() {
        return {
            x: Math.max(this.Bb4f.clientWidth, this.Bb4f.scrollWidth) - this.n4r.offsetWidth,
            y: Math.max(this.Bb4f.clientHeight, this.Bb4f.scrollHeight) - this.n4r.offsetHeight
        }
    };
    vP2x.Sz9q = function(d4h) {
        h4l.bh4l(d4h);
        if ( !! this.hP7I) return;
        this.hP7I = {
            x: h4l.jB8t(d4h),
            y: h4l.mf9W(d4h)
        };
        this.bSS3x = this.bnZ5e();
        this.z4D("ondragstart", d4h)
    };
    vP2x.bnL5Q = function(d4h) {
        if (!this.hP7I) return;
        var bi4m = {
            x: h4l.jB8t(d4h),
            y: h4l.mf9W(d4h)
        };
        var py0x = bi4m.x - this.hP7I.x,
            pz0x = bi4m.y - this.hP7I.y,
            D4H = {
                top: (parseInt(a3x.df5k(this.n4r, "top")) || 0) + pz0x,
                left: (parseInt(a3x.df5k(this.n4r, "left")) || 0) + py0x
            };
        if (this.bnf5k) {
            this.bnn5s();
            D4H.top = D4H.top + this.JH6B.y;
            D4H.left = D4H.left + this.JH6B.x
        }
        this.hP7I = bi4m;
        this.gF7y(D4H)
    };
    vP2x.bns5x = function(d4h) {
        if (!this.hP7I) return;
        delete this.bSS3x;
        delete this.hP7I;
        this.z4D("ondragend", this.boP5U())
    };
    vP2x.gF7y = function(d4h) {
        if (!this.cxh0x) {
            var bSR3x = this.bSS3x || this.bnZ5e();
            d4h.top = Math.min(bSR3x.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bSR3x.x, Math.max(0, d4h.left))
        }
        var ch5m = this.n4r.style;
        if (this.bnf5k) {
            this.bnn5s();
            d4h.top = d4h.top - this.JH6B.y;
            d4h.left = d4h.left - this.JH6B.x
        }
        if (this.XE0x == 0 || this.XE0x == 2) ch5m.top = d4h.top + "px";
        if (this.XE0x == 0 || this.XE0x == 1) ch5m.left = d4h.left + "px";
        this.z4D("onchange", d4h);
        return this
    };
    vP2x.boP5U = function() {
        return {
            left: parseInt(a3x.df5k(this.n4r, "left")) || 0,
            top: parseInt(a3x.df5k(this.n4r, "top")) || 0
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = NEJ.P("nej.e"),
        h4l = NEJ.P("nej.v"),
        k4o = NEJ.P("nej.u"),
        I4M = NEJ.P("nej.ut"),
        N4R = NEJ.P("nej.ui"),
        iZ8R, gi7b, b4f, K4O;
    if ( !! N4R.XA0x) return;
    N4R.XA0x = NEJ.C();
    b4f = N4R.XA0x.O4S(N4R.Sc9T);
    K4O = N4R.XA0x.cs5x;
    b4f.cx5C = function() {
        this.se0x = {};
        this.kQ8I = {
            onchange: this.bnL5Q.g4k(this)
        };
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.cwZ0x(e4i.mask);
        this.cwV0x(e4i.align);
        this.Bg4k(e4i.title);
        if (!e4i.draggable) return;
        this.iX8P = I4M.vN2x.A4E(this.kQ8I)
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.qN0x;
        delete this.SE9v;
        if ( !! this.Bh4l) {
            this.Bh4l.T4X();
            delete this.Bh4l
        }
        if ( !! this.iX8P) {
            this.iX8P.T4X();
            delete this.iX8P
        }
    };
    b4f.ce5j = function() {
        this.mb9S = iZ8R;
        this.cd5i = gi7b
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.dk6e(this.n4r);
        this.AW4a = i4m[1];
        this.kQ8I.mbar = i4m[0];
        this.kQ8I.body = this.n4r;
        h4l.s4w(i4m[2], "mousedown", this.cwU0x.g4k(this));
        h4l.s4w(this.kQ8I.mbar, "mousedown", this.Sz9q.g4k(this));
        this.bSP3x = a3x.dk6e(this.kQ8I.mbar)[0]
    };
    b4f.cwU0x = function(d4h) {
        h4l.bh4l(d4h);
        this.z4D("onclose", d4h);
        if (!d4h.stopped) {
            this.bu5z()
        }
    };
    b4f.Sz9q = function(d4h) {
        h4l.z4D(document, "click")
    };
    b4f.bnL5Q = function(d4h) {
        if (!this.oi9Z) return;
        a3x.eY6S(this.oi9Z, {
            top: d4h.top + "px",
            left: d4h.left + "px"
        })
    };
    b4f.JD6x = function() {
        var et6n = [function() {
            return 0
        }, function(om9d, mB9s, bi4m, J4N) {
            if (J4N == "top" && window.top != window.self) {
                var Xw0x = 0,
                    Gj5o = 0;
                if (top.g_topBarHeight) Xw0x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Gj5o = top.g_bottomBarHeight;
                if (om9d.top <= Xw0x) {
                    var brI6C = Math.max(0, (mB9s.height - (Xw0x - om9d.top) - Gj5o - bi4m.height) / 2);
                    return brI6C + Xw0x
                } else {
                    var brI6C = Math.max(0, (mB9s.height - Gj5o - bi4m.height) / 2);
                    return brI6C + om9d.top
                }
            }
            return Math.max(0, om9d[J4N] + (mB9s[io8g[J4N]] - bi4m[io8g[J4N]]) / 2)
        }, function(om9d, mB9s, bi4m, J4N) {
            return om9d[J4N] + (mB9s[io8g[J4N]] - bi4m[io8g[J4N]])
        }],
            cwI0x = ["left", "top"],
            io8g = {
                left: "width",
                top: "height"
            };
        return function() {
            var D4H = {}, ch5m = this.n4r.style,
                jD8v = a3x.oy9p(),
                om9d = {
                    left: jD8v.scrollLeft,
                    top: jD8v.scrollTop
                }, mB9s = {
                    width: jD8v.clientWidth,
                    height: jD8v.clientHeight
                }, bi4m = {
                    width: this.n4r.offsetWidth,
                    height: this.n4r.offsetHeight
                }, do6i = {
                    left: jD8v.clientWidth - this.n4r.offsetWidth,
                    top: jD8v.clientHeight - this.n4r.offsetHeight
                };
            k4o.bd4h(cwI0x, function(J4N, r4v) {
                var dt6n = et6n[this.qN0x[r4v]];
                if (!dt6n) return;
                D4H[J4N] = dt6n(om9d, mB9s, bi4m, J4N)
            }, this);
            this.gF7y(D4H)
        }
    }();
    b4f.cwH0x = function() {
        if (!this.Bh4l) {
            if (!this.SE9v) return;
            this.se0x.parent = this.gg7Z;
            this.Bh4l = this.SE9v.A4E(this.se0x)
        }
        this.Bh4l.L4P()
    };
    b4f.XT0x = function() {
        if ( !! this.Bh4l) this.Bh4l.bu5z();
        K4O.XT0x.apply(this, arguments)
    };
    b4f.cwZ0x = function(kX8P) {
        if ( !! kX8P) {
            if (kX8P instanceof N4R.JE6y) {
                this.Bh4l = kX8P;
                return
            }
            if (k4o.gG7z(kX8P)) {
                this.SE9v = kX8P;
                return
            }
            this.SE9v = N4R.JE6y;
            if (k4o.fG7z(kX8P)) this.se0x.clazz = kX8P;
            return
        }
        this.SE9v = null
    };
    b4f.Bg4k = function(el6f, dT6N) {
        if ( !! this.bSP3x) {
            var bev3x = !dT6N ? "innerText" : "innerHTML";
            this.bSP3x[bev3x] = el6f || "标题"
        }
        return this
    };
    b4f.cwV0x = function() {
        var dh6b = /\s+/,
            cwF0x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            }, cwE0x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function(nJ9A) {
            this.qN0x = (nJ9A || "").split(dh6b);
            var ck5p = cwF0x[this.qN0x[0]];
            if (ck5p == null) ck5p = 1;
            this.qN0x[0] = ck5p;
            var ck5p = cwE0x[this.qN0x[1]];
            if (ck5p == null) ck5p = 1;
            this.qN0x[1] = ck5p;
            return this
        }
    }();
    b4f.L4P = function() {
        K4O.L4P.apply(this, arguments);
        this.cwH0x();
        return this
    };
    iZ8R = a3x.tO2x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gi7b = a3x.iu8m('<div class="' + iZ8R + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        bsy6s;
    if ( !! N4R.Xv0x) return;
    N4R.Xv0x = NEJ.C();
    bsy6s = N4R.Xv0x.O4S(N4R.XP0x);
    bsy6s.blJ5O = function() {
        return N4R.XA0x.A4E(this.cc5h)
    };
    bsy6s.So9f = function() {
        N4R.Xv0x.cs5x.So9f.apply(this, arguments);
        this.cc5h.mask = null;
        this.cc5h.title = "标题";
        this.cc5h.align = "";
        this.cc5h.draggable = !1;
        this.cc5h.onclose = null
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.ui"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.en6h = NEJ.C();
    b4f = m4q.en6h.O4S(bc4g.Xv0x);
    b4f.bl5q = function(e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bm5r(e4i)
    };
    b4f.dP6J = function(f4j, bH5M) {
        if (!f4j) return;
        a3x.ba4e(f4j, "display", !bH5M ? "none" : "");
        f4j.lastChild.innerText = bH5M || ""
    };
    b4f.dX6R = function(gH7A, cX5c, SG9x, SI9z) {
        var dY6S = "js-lock";
        if (cX5c === undefined) return a3x.bE5J(gH7A, dY6S);
        !cX5c ? a3x.x4B(gH7A, dY6S) : a3x.y4C(gH7A, dY6S);
        gH7A.firstChild.innerText = !cX5c ? SG9x : SI9z
    };
    m4q.en6h.L4P = function(e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined) e4i.mask = "m-mask";
        if (e4i.parent === undefined) e4i.parent = document.body;
        if (e4i.draggable === undefined) e4i.draggable = true; !! this.ff6Z && this.ff6Z.T4X();
        this.ff6Z = this.A4E(e4i);
        this.ff6Z.L4P(e4i);
        return this.ff6Z
    };
    m4q.en6h.bu5z = function() { !! this.ff6Z && this.ff6Z.T4X()
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.bud7W = NEJ.C();
    b4f = m4q.bud7W.O4S(m4q.en6h);
    K4O = m4q.bud7W.cs5x;
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        if (e4i.bubble === undefined) e4i.bubble = true;
        this.SK9B = e4i.bubble;
        this.qC0x = e4i.message || ""
    };
    b4f.ce5j = function() {
        this.cd5i = a3x.iu8m('<div class="lyct f-cb f-tc"></div>')
    };
    b4f.bW5b = function() {
        this.cg5l();
        h4l.s4w(this.n4r, "click", this.cM5R.g4k(this))
    };
    b4f.cM5R = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        if (f4j.href) h4l.cp5u(d4h);
        if (a3x.t4x(f4j, "action") == "close") this.bu5z();
        if (this.SK9B === !1) h4l.tr1x(d4h);
        this.z4D("onaction", a3x.t4x(f4j, "action"))
    };
    b4f.L4P = function() {
        K4O.L4P.call(this);
        this.n4r.innerHTML = this.qC0x
    };
    var gJ7C = a3x.es6m('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mZ9Q = function() {
        var eg6a;
        var cz5E;
        var bva7T = function(fp6j, U4Y) {
            if (k4o.gG7z(fp6j, "function") && fp6j(U4Y) != -1) cz5E.T4X()
        };
        var Bm4q = function() { !! cz5E && cz5E.bu5z()
        };
        return function(e4i) {
            clearTimeout(eg6a);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a3x.bZ5e(gJ7C, e4i);
            e4i.onaction = bva7T.g4k(null, e4i.action);
            if (e4i.mask === undefined) e4i.mask = true;
            if (e4i.draggable === undefined) e4i.draggable = true; !! cz5E && cz5E.T4X();
            cz5E = m4q.bud7W.A4E(e4i);
            cz5E.L4P();
            if (e4i.autoclose) eg6a = setTimeout(Bm4q.g4k(null), 2e3);
            return cz5E
        }
    }();
    l4p.fq6k = function(e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e4i.btntxt || "确定"
        }];
        var cz5E = l4p.mZ9Q(e4i);
        return cz5E
    };
    l4p.hi7b = function(e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e4i.btncc || "取消",
            style: e4i.ccstyle || ""
        }];
        var cz5E = l4p.mZ9Q(e4i);
        return cz5E
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u");
    a3x.cwD0x = function() {
        var gK7D = /[\r\n]/gi,
            R4V = {};
        var cwC0x = function(cI5N) {
            return (cI5N || "").replace(gK7D, "aa").length
        };
        var bSL3x = function(C4G) {
            var bg4k = R4V[C4G],
                bSK3x = a3x.B4F(C4G),
                qz0x = a3x.B4F(C4G + "-counter");
            if (!bSK3x || !bg4k) return;
            var d4h = {
                input: bSK3x.value
            };
            d4h.length = bg4k.onlength(d4h.input);
            d4h.delta = bg4k.max - d4h.length;
            bg4k.onchange(d4h);
            qz0x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function(F4J, e4i) {
            var C4G = a3x.lv8n(F4J);
            if (!C4G || !! R4V[C4G]) return;
            var bg4k = NEJ.X({}, e4i);
            bg4k.onchange = bg4k.onchange || bs5x;
            bg4k.onlength = cwC0x;
            if (!bg4k.max) {
                var bSJ3x = parseInt(a3x.gh7a(C4G, "maxlength")),
                    bSI3x = parseInt(a3x.t4x(C4G, "maxLength"));
                bg4k.max = bSJ3x || bSI3x || 100;
                if (!bSJ3x && !! bSI3x) bg4k.onlength = k4o.fy6s
            }
            R4V[C4G] = bg4k;
            h4l.s4w(C4G, "input", bSL3x.g4k(null, C4G));
            var f4j = a3x.Iv6p(C4G, {
                nid: bg4k.nid || "js-counter",
                clazz: bg4k.clazz
            });
            bg4k.xid = C4G + "-counter";
            f4j.id = bg4k.xid;
            bSL3x(C4G)
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        be4i = c4g("nej.h");
    be4i.beQ3x = function(F4J, dZ6T) {}
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        be4i = c4g("nej.h");
    if (N4R.nj9a.trident) return;
    be4i.beQ3x = function() {
        var R4V = {};
        var HZ6T = function(d4h) {
            var dm6g = h4l.W4a(d4h);
            if ( !! dm6g.value) return;
            a3x.ba4e(a3x.Iv6p(dm6g), "display", "none")
        };
        var Ez5E = function(d4h) {
            var dm6g = h4l.W4a(d4h);
            if ( !! dm6g.value) return;
            a3x.ba4e(a3x.Iv6p(dm6g), "display", "")
        };
        var cwx0x = function(dm6g, dZ6T) {
            var C4G = a3x.lv8n(dm6g),
                iU8M = a3x.Iv6p(dm6g, {
                    tag: "label",
                    clazz: dZ6T
                });
            iU8M.htmlFor = C4G;
            var cG5L = a3x.gh7a(dm6g, "placeholder") || "";
            iU8M.innerText = cG5L == "null" ? "" : cG5L;
            var ci5n = dm6g.offsetHeight + "px";
            a3x.eY6S(iU8M, {
                left: 0,
                display: !dm6g.value ? "" : "none"
            })
        };
        return be4i.beQ3x.eB6v(function(d4h) {
            d4h.stopped = !0;
            var bf4j = d4h.args,
                dm6g = a3x.B4F(bf4j[0]);
            if ( !! R4V[dm6g.id]) return;
            cwx0x(dm6g, bf4j[1]);
            R4V[dm6g.id] = !0;
            h4l.s4w(dm6g, "blur", Ez5E.g4k(null));
            h4l.s4w(dm6g, "focus", HZ6T.g4k(null))
        })
    }()
})();
(function() {
    var c4g = NEJ.P,
        be4i = c4g("nej.h"),
        a3x = c4g("nej.e"),
        cY5d = c4g("nej.x");
    a3x.gn7g = cY5d.gn7g = function(F4J, dZ6T) {
        be4i.beQ3x(F4J, a3x.t4x(F4J, "holder") || dZ6T || "js-placeholder");
        return this
    };
    cY5d.isChange = !0
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        hL7E;
    if ( !! N4R.SM9D) return;
    N4R.SM9D = NEJ.C();
    hL7E = N4R.SM9D.O4S(N4R.cH5M);
    hL7E.cx5C = function() {
        this.cD5I();
        this.EI5N = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hL7E.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.gu7n = document.forms[e4i.form] || a3x.B4F(e4i.form);
        this.bX5c([
            [this.gu7n, "keypress", this.cwt0x.g4k(this)]
        ]);
        this.qC0x = e4i.message || {};
        this.qC0x.pass = this.qC0x.pass || " ";
        var fl6f = this.qd0x(this.gu7n, "focusMode", 1);
        if (!isNaN(fl6f)) {
            this.bSG3x = {
                mode: fl6f,
                clazz: e4i.focus
            }
        }
        this.Bo4s = e4i.holder;
        this.EI5N.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.EI5N.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.EI5N.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bSD3x = e4i.invalid || "js-invalid";
        this.cwo0x(e4i);
        this.gB7u();
        if ( !! this.Bp4t) this.Bp4t.focus()
    };
    hL7E.bD5I = function() {
        this.bG5L();
        delete this.qC0x;
        delete this.Bp4t;
        delete this.Fc5h;
        delete this.gu7n;
        delete this.bSB3x;
        delete this.SP9G
    };
    hL7E.qd0x = function(f4j, vY2x, u4y) {
        var D4H = a3x.t4x(f4j, vY2x);
        switch (u4y) {
            case 1:
                return parseInt(D4H);
            case 2:
                return (D4H || "").toLowerCase() == "true";
            case 3:
                return this.bgx3x(D4H)
        }
        return D4H
    };
    hL7E.Bt4x = function(D4H, u4y) {
        if (u4y == "date") return this.bgx3x(D4H);
        return parseInt(D4H)
    };
    hL7E.Xm0x = function() {
        var ku8m = /^button|submit|reset|image|hidden|file$/i;
        return function(f4j) {
            f4j = this.B4F(f4j) || f4j;
            var u4y = f4j.type;
            return !!f4j.name && !ku8m.test(f4j.type || "")
        }
    }();
    hL7E.cwk0x = function() {
        var ku8m = /^hidden$/i;
        return function(f4j) {
            if (this.Xm0x(f4j)) return !0;
            f4j = this.B4F(f4j) || f4j;
            var u4y = f4j.type || "";
            return ku8m.test(u4y)
        }
    }();
    hL7E.bgx3x = function() {
        var dh6b = /[-\/]/;
        var cwj0x = function(D4H) {
            if (!D4H) return "";
            D4H = D4H.split(dh6b);
            D4H.push(D4H.shift());
            return D4H.join("/")
        };
        return function(D4H) {
            if ((D4H || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cwj0x(D4H))
        }
    }();
    hL7E.cwt0x = function(d4h) {
        if (d4h.keyCode != 13) return;
        this.z4D("onenter", d4h)
    };
    hL7E.cwi0x = function(C4G, V4Z) {
        var rA0x = this.SP9G[V4Z],
            D4H = this.qd0x(C4G, V4Z);
        if (!D4H || !rA0x) return;
        this.Xk0x(C4G, rA0x);
        this.bho3x(C4G, V4Z, D4H)
    };
    hL7E.cwb0x = function(C4G, V4Z) {
        try {
            var bSx3x = this.qd0x(C4G, V4Z);
            if (!bSx3x) return;
            var D4H = new RegExp(bSx3x);
            this.bho3x(C4G, V4Z, D4H);
            this.Xk0x(C4G, this.SP9G[V4Z])
        } catch (e) {}
    };
    hL7E.cvY0x = function(C4G, V4Z) {
        var rA0x = this.SP9G[V4Z];
        if ( !! rA0x && this.qd0x(C4G, V4Z, 2)) this.Xk0x(C4G, rA0x)
    };
    hL7E.bhE4I = function(C4G, V4Z, D4H) {
        D4H = parseInt(D4H);
        if (isNaN(D4H)) return;
        this.bho3x(C4G, V4Z, D4H);
        this.Xk0x(C4G, this.SP9G[V4Z])
    };
    hL7E.bSv3x = function(C4G, V4Z) {
        this.bhE4I(C4G, V4Z, this.qd0x(C4G, V4Z))
    };
    hL7E.bSt3x = function(C4G, V4Z) {
        this.bhE4I(C4G, V4Z, a3x.gh7a(C4G, V4Z))
    };
    hL7E.bSs3x = function(C4G, V4Z, u4y) {
        var D4H = this.Bt4x(this.qd0x(C4G, V4Z), this.qd0x(C4G, "type"));
        this.bhE4I(C4G, V4Z, D4H)
    };
    hL7E.cvT0x = function() {
        var gK7D = /^input|textarea$/i;
        var HZ6T = function(d4h) {
            this.qh0x(h4l.W4a(d4h))
        };
        var Ez5E = function(d4h) {
            var f4j = h4l.W4a(d4h);
            if (!this.qd0x(f4j, "ignore", 2)) {
                this.bSr3x(f4j)
            }
        };
        return function(f4j) {
            if (this.qd0x(f4j, "autoFocus", 2)) this.Bp4t = f4j;
            var ql0x = a3x.gh7a(f4j, "placeholder");
            if ( !! ql0x && ql0x != "null") a3x.gn7g(f4j, this.Bo4s);
            if ( !! this.bSG3x && gK7D.test(f4j.tagName)) a3x.mP9G(f4j, this.bSG3x);
            var C4G = a3x.lv8n(f4j);
            this.cvY0x(C4G, "required");
            this.cwi0x(C4G, "type");
            this.cwb0x(C4G, "pattern");
            this.bSt3x(C4G, "maxlength");
            this.bSt3x(C4G, "minlength");
            this.bSv3x(C4G, "maxLength");
            this.bSv3x(C4G, "minLength");
            this.bSs3x(C4G, "min");
            this.bSs3x(C4G, "max");
            var V4Z = f4j.name;
            this.qC0x[V4Z + "-tip"] = this.qd0x(f4j, "tip");
            this.qC0x[V4Z + "-error"] = this.qd0x(f4j, "message");
            this.qh0x(f4j);
            var by5D = this.Fc5h[C4G],
                j4n = (by5D || bb4f).data || bb4f,
                Tf9W = this.qd0x(f4j, "counter", 2);
            if (Tf9W && (j4n.maxlength || j4n.maxLength)) {
                a3x.cwD0x(C4G, {
                    nid: this.EI5N.tp.nid,
                    clazz: "js-counter"
                })
            }
            if ( !! by5D && gK7D.test(f4j.tagName)) {
                this.bX5c([
                    [f4j, "focus", HZ6T.g4k(this)],
                    [f4j, "blur", Ez5E.g4k(this)]
                ])
            } else if (this.qd0x(f4j, "focus", 2)) {
                this.bX5c([
                    [f4j, "focus", HZ6T.g4k(this)]
                ])
            }
        }
    }();
    hL7E.cwo0x = function() {
        var Gk5p = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bgx3x(v))
            }
        };
        var cvO0x = {
            required: function(f4j) {
                var u4y = f4j.type,
                    cvN0x = !f4j.value,
                    cvM0x = (u4y == "checkbox" || u4y == "radio") && !f4j.checked;
                if (cvM0x || cvN0x) return -1
            },
            type: function(f4j, e4i) {
                var dh6b = this.bSB3x[e4i.type],
                    eQ6K = f4j.value.trim(),
                    cvG0x = !! dh6b.test && !dh6b.test(eQ6K),
                    cvC0x = k4o.gG7z(dh6b) && !dh6b.call(this, eQ6K);
                if (cvG0x || cvC0x) return -2
            },
            pattern: function(f4j, e4i) {
                if (!e4i.pattern.test(f4j.value)) return -3
            },
            maxlength: function(f4j, e4i) {
                if (f4j.value.length > e4i.maxlength) return -4
            },
            minlength: function(f4j, e4i) {
                if (f4j.value.length < e4i.minlength) return -5
            },
            maxLength: function(f4j, e4i) {
                if (k4o.fy6s(f4j.value) > e4i.maxLength) return -4
            },
            minLength: function(f4j, e4i) {
                if (k4o.fy6s(f4j.value) < e4i.minLength) return -5
            },
            min: function(f4j, e4i) {
                var gR7K = this.Bt4x(f4j.value, e4i.type);
                if (isNaN(gR7K) || gR7K < e4i.min) return -6
            },
            max: function(f4j, e4i) {
                var gR7K = this.Bt4x(f4j.value, e4i.type);
                if (isNaN(gR7K) || gR7K > e4i.max) return -7
            }
        };
        return function(e4i) {
            this.bSB3x = NEJ.X(NEJ.X({}, Gk5p), e4i.type);
            this.SP9G = NEJ.X(NEJ.X({}, cvO0x), e4i.attr)
        }
    }();
    hL7E.Xk0x = function(C4G, yV3x) {
        if (!k4o.gG7z(yV3x)) return;
        var by5D = this.Fc5h[C4G];
        if (!by5D || !by5D.func) {
            by5D = by5D || {};
            by5D.func = [];
            this.Fc5h[C4G] = by5D
        }
        by5D.func.push(yV3x)
    };
    hL7E.bho3x = function(C4G, V4Z, D4H) {
        if (!V4Z) return;
        var by5D = this.Fc5h[C4G];
        if (!by5D || !by5D.data) {
            by5D = by5D || {};
            by5D.data = {};
            this.Fc5h[C4G] = by5D
        }
        by5D.data[V4Z] = D4H
    };
    hL7E.bSr3x = function(f4j) {
        f4j = this.B4F(f4j) || f4j;
        var by5D = this.Fc5h[a3x.lv8n(f4j)];
        if (!f4j || !by5D || !this.Xm0x(f4j)) return !0;
        var o4s;
        k4o.eC6w(by5D.func, function(et6n) {
            o4s = et6n.call(this, f4j, by5D.data);
            return o4s != null
        }, this);
        if (o4s == null) {
            var d4h = {
                target: f4j,
                form: this.gu7n
            };
            this.z4D("oncheck", d4h);
            o4s = d4h.value
        }
        var d4h = {
            target: f4j,
            form: this.gu7n
        };
        if (o4s != null) {
            d4h.code = o4s;
            this.z4D("oninvalid", d4h);
            if (!d4h.stopped) {
                this.cvA0x(f4j, d4h.value || this.qC0x[f4j.name + o4s])
            }
        } else {
            this.z4D("onvalid", d4h);
            if (!d4h.stopped) this.cvz0x(f4j, d4h.value)
        }
        return o4s == null
    };
    hL7E.yT3x = function() {
        var cvy0x = function(bdR3x, bdQ3x) {
            return bdR3x == bdQ3x ? "block" : "none"
        };
        var cvv0x = function(f4j, u4y, bH5M) {
            var ql0x = bSi3x.call(this, f4j, u4y);
            if (!ql0x && !! bH5M) ql0x = a3x.Iv6p(f4j, this.EI5N[u4y]);
            return ql0x
        };
        var bSi3x = function(f4j, u4y) {
            var ql0x;
            if (u4y == "tp") ql0x = a3x.B4F(f4j.name + "-tip");
            if (!ql0x) ql0x = a3x.H4L(f4j.parentNode, this.EI5N[u4y].nid)[0];
            return ql0x
        };
        return function(f4j, bH5M, u4y) {
            f4j = this.B4F(f4j) || f4j;
            if (!f4j) return;
            u4y == "er" ? a3x.y4C(f4j, this.bSD3x) : a3x.x4B(f4j, this.bSD3x);
            var ql0x = cvv0x.call(this, f4j, u4y, bH5M);
            if ( !! ql0x && !! bH5M) ql0x.innerHTML = bH5M;
            k4o.eC6w(this.EI5N, function(D4H, J4N) {
                a3x.ba4e(bSi3x.call(this, f4j, J4N), "display", cvy0x(u4y, J4N))
            }, this)
        }
    }();
    hL7E.qh0x = function(f4j, bH5M) {
        this.yT3x(f4j, bH5M || this.qC0x[f4j.name + "-tip"], "tp");
        return this
    };
    hL7E.cvz0x = function(f4j, bH5M) {
        this.yT3x(f4j, bH5M || this.qC0x[f4j.name + "-pass"] || this.qC0x.pass, "ok");
        return this
    };
    hL7E.cvA0x = function(f4j, bH5M) {
        this.yT3x(f4j, bH5M || this.qC0x[f4j.name + "-error"], "er");
        return this
    };
    hL7E.iO8G = function() {
        var gK7D = /^(?:radio|checkbox)$/i;
        var cvs0x = function(D4H) {
            return D4H == null ? "" : D4H
        };
        var bSg3x = function(D4H, f4j) {
            if (gK7D.test(f4j.type || "")) {
                f4j.checked = D4H == f4j.value
            } else {
                f4j.value = cvs0x(D4H)
            }
        };
        return function(V4Z, D4H) {
            var f4j = this.B4F(V4Z);
            if (!f4j) return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bSg3x(D4H, f4j)
            } else {
                k4o.bd4h(f4j, bSg3x.g4k(null, D4H))
            }
            return this
        }
    }();
    hL7E.B4F = function(V4Z) {
        return this.gu7n.elements[V4Z]
    };
    hL7E.cDr2x = function() {
        return this.gu7n
    };
    hL7E.WX0x = function() {
        var gK7D = /^radio|checkbox$/i,
            ku8m = /^number|date$/;
        var cvo0x = function(bz5E, f4j) {
            var V4Z = f4j.name,
                D4H = f4j.value,
                by5D = bz5E[V4Z],
                u4y = this.qd0x(f4j, "type");
            if (ku8m.test(u4y)) D4H = this.Bt4x(D4H, u4y);
            if (gK7D.test(f4j.type) && !f4j.checked) {
                D4H = this.qd0x(f4j, "value");
                if (!D4H) return
            }
            if ( !! by5D) {
                if (!k4o.eJ6D(by5D)) {
                    by5D = [by5D];
                    bz5E[V4Z] = by5D
                }
                by5D.push(D4H)
            } else {
                bz5E[V4Z] = D4H
            }
        };
        return function() {
            var o4s = {};
            k4o.bd4h(this.gu7n.elements, function(f4j) {
                if (this.cwk0x(f4j)) cvo0x.call(this, o4s, f4j)
            }, this);
            return o4s
        }
    }();
    hL7E.JM6G = function() {
        var cvl0x = function(f4j) {
            if (this.Xm0x(f4j)) this.qh0x(f4j)
        };
        return function() {
            this.gu7n.reset();
            k4o.bd4h(this.gu7n.elements, cvl0x, this);
            return this
        }
    }();
    hL7E.cDt2x = function() {
        this.gu7n.submit();
        return this
    };
    hL7E.gB7u = function() {
        var cvj0x = function(f4j) {
            if (this.Xm0x(f4j)) this.cvT0x(f4j)
        };
        return function() {
            this.Fc5h = {};
            k4o.bd4h(this.gu7n.elements, cvj0x, this);
            return this
        }
    }();
    hL7E.cvi0x = function(f4j) {
        f4j = this.B4F(f4j) || f4j;
        if ( !! f4j) return this.bSr3x(f4j);
        var o4s = !0;
        k4o.bd4h(this.gu7n.elements, function(f4j) {
            var ll8d = this.cvi0x(f4j);
            o4s = o4s && ll8d
        }, this);
        return o4s
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.WS0x = NEJ.C();
    b4f = m4q.WS0x.O4S(m4q.en6h);
    K4O = m4q.WS0x.cs5x;
    b4f.bW5b = function() {
        this.cg5l();
        h4l.s4w(this.n4r, "click", this.cM5R.g4k(this));
        h4l.s4w(document, "mousewheel", this.BF4J.g4k(this));
        if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.BF4J.g4k(this))
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        if (e4i.jst) {
            this.n4r.innerHTML = a3x.bZ5e(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.n4r.appendChild(a3x.dy6s(e4i.ntp))
        } else if (e4i.txt) {
            this.n4r.innerHTML = a3x.iI8A(e4i.txt)
        } else if (e4i.html) {
            this.n4r.innerHTML = e4i.html
        }
        var Tu9l = this.n4r.getElementsByTagName("form");
        if (Tu9l.length) {
            this.gu7n = I4M.SM9D.A4E({
                form: Tu9l[0]
            })
        }
        this.Dy5D = a3x.dk6e(this.n4r)[0]
    };
    b4f.bD5I = function() {
        this.z4D("ondestroy");
        this.bG5L();
        this.n4r.innerHTML = "";
        delete this.Dy5D
    };
    b4f.cM5R = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action"),
            j4n = this.gu7n ? this.gu7n.WX0x() : null,
            d4h = {
                action: a3x.t4x(f4j, "action")
            };
        if (j4n) d4h.data = j4n;
        if (d4h.action) {
            this.z4D("onaction", d4h);
            if (d4h.stopped) return;
            this.bu5z()
        }
    };
    b4f.BF4J = function(d4h) {
        if (!this.Dy5D) return;
        h4l.bh4l(d4h);
        var do6i = d4h.wheelDelta || -d4h.detail;
        this.Dy5D.scrollTop -= do6i
    };
    l4p.kk8c = function(e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = e4i.parent || document.body;
        e4i.mask = e4i.mask || true;
        var AZ4d = m4q.WS0x.A4E(e4i);
        AZ4d.L4P();
        return AZ4d
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bSb3x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Ty9p = {}, DD5I = {};
    for (var i = 0, l = bSb3x.length, c; i < l; i++) {
        c = bSb3x.charAt(i);
        Ty9p[i] = c;
        DD5I[c] = i
    }
    var cvg0x = function(iv8n) {
        var r4v = 0,
            c, o4s = [];
        while (r4v < iv8n.length) {
            c = iv8n[r4v];
            if (c < 128) {
                o4s.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                o4s.push(String.fromCharCode((c & 31) << 6 | iv8n[r4v + 1] & 63));
                r4v += 2
            } else {
                o4s.push(String.fromCharCode((c & 15) << 12 | (iv8n[r4v + 1] & 63) << 6 | iv8n[r4v + 2] & 63));
                r4v += 3
            }
        }
        return o4s.join("")
    };
    var cvf0x = function() {
        var hu7n = /\r\n/g;
        return function(j4n) {
            j4n = j4n.replace(hu7n, "\n");
            var o4s = [],
                mz9q = String.fromCharCode(237);
            if (mz9q.charCodeAt(0) < 0) for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                c > 0 ? o4s.push(c) : o4s.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                if (c < 128) o4s.push(c);
                else if (c > 127 && c < 2048) o4s.push(c >> 6 | 192, c & 63 | 128);
                else o4s.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o4s
        }
    }();
    var JS7L = function(iv8n) {
        var r4v = 0,
            o4s = [],
            fl6f = iv8n.length % 3;
        if (fl6f == 1) iv8n.push(0, 0);
        if (fl6f == 2) iv8n.push(0);
        while (r4v < iv8n.length) {
            o4s.push(Ty9p[iv8n[r4v] >> 2], Ty9p[(iv8n[r4v] & 3) << 4 | iv8n[r4v + 1] >> 4], Ty9p[(iv8n[r4v + 1] & 15) << 2 | iv8n[r4v + 2] >> 6], Ty9p[iv8n[r4v + 2] & 63]);
            r4v += 3
        }
        if (fl6f == 1) o4s[o4s.length - 1] = o4s[o4s.length - 2] = "=";
        if (fl6f == 2) o4s[o4s.length - 1] = "=";
        return o4s.join("")
    };
    var bRZ3x = function() {
        var rt0x = /\n|\r|=/g;
        return function(j4n) {
            var r4v = 0,
                o4s = [];
            j4n = j4n.replace(rt0x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4) o4s.push(DD5I[j4n.charAt(i)] << 2 | DD5I[j4n.charAt(i + 1)] >> 4, (DD5I[j4n.charAt(i + 1)] & 15) << 4 | DD5I[j4n.charAt(i + 2)] >> 2, (DD5I[j4n.charAt(i + 2)] & 3) << 6 | DD5I[j4n.charAt(i + 3)]);
            var bq5v = o4s.length,
                fl6f = j4n.length % 4;
            if (fl6f == 2) o4s = o4s.slice(0, bq5v - 2);
            if (fl6f == 3) o4s = o4s.slice(0, bq5v - 1);
            return o4s
        }
    }();
    p.cDv2x = function(j4n) {
        return cvg0x(bRZ3x(j4n))
    };
    p.cvb0x = function(j4n) {
        var iv8n = bRZ3x(j4n),
            dr6l = iv8n.length,
            it8l;
        var r4v = 0;
        while (it8l = iv8n[r4v]) {
            if (it8l > 128) {
                iv8n[r4v] = it8l - 256
            }
            r4v++
        }
        return iv8n
    };
    p.cuZ0x = function(j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return JS7L(cvf0x(j4n))
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    m4q.bRX3x = NEJ.C();
    b4f = m4q.bRX3x.O4S(m4q.en6h);
    b4f.ce5j = function() {
        this.cd5i = "m-download-layer"
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.bkT4X = i4m[0];
        this.bkV4Z = i4m[1];
        this.bRW3x = i4m[2];
        v4z.bn5s("/client/version/get", {
            type: "json",
            onload: this.cuV0x.g4k(this)
        });
        if (N4R.HP6J.mac) {
            a3x.x4B(this.bkT4X.parentNode, "f-hide");
            a3x.y4C(this.bkV4Z.parentNode, "f-hide");
            a3x.y4C(this.bRW3x, "f-hide")
        } else {
            a3x.y4C(this.bkT4X.parentNode, "f-hide");
            a3x.x4B(this.bkV4Z.parentNode, "f-hide");
            a3x.x4B(this.bRW3x, "f-hide")
        }
    };
    b4f.bl5q = function(e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm5r(e4i);
        this.bX5c([
            [this.n4r, "click", this.bT5Y.g4k(this)]
        ]);
        this.ey6s = TYPE_MAP[e4i.type];
        this.gY7R = e4i.id
    };
    b4f.bD5I = function() {
        this.bG5L()
    };
    b4f.BH4L = function() {
        this.bu5z()
    };
    b4f.Ev5A = function(d4h) {
        this.z4D("onok", D4H);
        this.bu5z()
    };
    b4f.bT5Y = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        switch (a3x.t4x(f4j, "action")) {
            case "download":
                this.bu5z();
                window.open(a3x.t4x(f4j, "src"));
                break;
            case "orpheus":
                this.bu5z();
                location.href = "orpheus://" + k4o.cuZ0x(JSON.stringify({
                    type: this.ey6s,
                    id: this.gY7R,
                    cmd: "download"
                }));
                break
        }
    };
    b4f.cuV0x = function(d4h) {
        if ((d4h || bb4f).code == 200) {
            this.Jn6h = d4h.data;
            this.bkT4X.innerText = "V" + this.Jn6h.mac;
            this.bkV4Z.innerText = "V" + this.Jn6h.pc
        }
    };
    l4p.JU7N = function(e4i) {
        m4q.bRX3x.A4E(e4i).L4P()
    }
})();
(function() {
    var c4g = NEJ.P,
        l4p = c4g("nm.x");
    var FullscreenApi = {};
    var apiMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l4p.EA5F = FullscreenApi
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        k4o = c4g("nej.u"),
        q4u = c4g("nm.d"),
        bS5X = {};
    q4u.B4F = function(J4N) {
        return bS5X[J4N]
    };
    q4u.na9R = function(J4N, bg4k) {
        bS5X[J4N] = bg4k
    };
    q4u.fe6Y = function(j4n) {
        k4o.eC6w(j4n, function(p4t, J4N) {
            var bg4k = bS5X[J4N] || {};
            NEJ.X(bg4k, p4t);
            bS5X[J4N] = bg4k
        })
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        be4i = c4g("nej.h");
    be4i.Wx0x = function(J4N) {
        return localStorage.getItem(J4N)
    };
    be4i.Ww0x = function(J4N, D4H) {
        localStorage.setItem(J4N, D4H)
    };
    be4i.bmk5p = function(J4N) {
        localStorage.removeItem(J4N)
    };
    be4i.bml5q = function() {
        localStorage.clear()
    };
    be4i.cuU0x = function() {
        var o4s = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o4s.push(localStorage.key(i));
        return o4s
    };
    be4i.bmz5E = function() {
        (document.onstorageready || bs5x)()
    };
    be4i.bmQ5V = function() {
        return !0
    }
})();
(function() {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        it8l = c4g("nej.c"),
        be4i = c4g("nej.h"),
        tu1x;
    if (N4R.nj9a.trident || !! window.localStorage) return;
    var cuT0x = function() {
        var rz0x, eg6a;
        var bki4m = function() {
            rz0x = document.createElement("div");
            NEJ.X(rz0x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rz0x);
            rz0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it8l.B4F("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Re9V = function() {
            eg6a = window.clearTimeout(eg6a);
            var hT7M = rz0x.getElementsByTagName("object")[0];
            if ( !! hT7M.initStorage) {
                delete rz0x;
                tu1x = hT7M;
                tu1x.initStorage("nej-storage");
                (document.onstorageready || bs5x)();
                return
            }
            eg6a = window.setTimeout(Re9V, 500)
        };
        return function() {
            if ( !! tu1x) return;
            bki4m();
            Re9V()
        }
    }();
    be4i.Wx0x = be4i.Wx0x.eB6v(function(d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        d4h.value = tu1x.getItem(d4h.args[0])
    });
    be4i.Ww0x = be4i.Ww0x.eB6v(function(d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        var bf4j = d4h.args;
        tu1x.setItem(bf4j[0], bf4j[1])
    });
    be4i.bmk5p = be4i.bmk5p.eB6v(function(d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        tu1x.removeItem(d4h.args[0])
    });
    be4i.bml5q = be4i.bml5q.eB6v(function(d4h) {
        d4h.stopped = !0;
        if ( !! tu1x) tu1x.clear()
    });
    be4i.bmz5E = be4i.bmz5E.eB6v(function(d4h) {
        d4h.stopped = !0;
        cuT0x()
    });
    be4i.bmQ5V = be4i.bmQ5V.eB6v(function(d4h) {
        d4h.stopped = !0;
        d4h.value = !! tu1x
    })
})();
(function() {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        be4i = c4g("nej.h"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        R4V = {};
    v4z.uW2x = function(J4N, D4H) {
        var bRV3x = JSON.stringify(D4H);
        try {
            be4i.Ww0x(J4N, bRV3x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bRV3x != be4i.Wx0x(J4N)) R4V[J4N] = D4H;
        return this
    };
    v4z.sw1x = function(J4N) {
        var j4n = JSON.parse(be4i.Wx0x(J4N) || "null");
        return j4n == null ? R4V[J4N] : j4n
    };
    v4z.bRU3x = function(J4N, D4H) {
        var j4n = v4z.sw1x(J4N);
        if (j4n == null) {
            j4n = D4H;
            v4z.uW2x(J4N, j4n)
        }
        return j4n
    };
    v4z.JV7O = function(J4N) {
        delete R4V[J4N];
        be4i.bmk5p(J4N);
        return this
    };
    v4z.cDw2x = function() {
        var bnv5A = function(p4t, J4N, bz5E) {
            delete bz5E[J4N]
        };
        return function() {
            k4o.eC6w(R4V, bnv5A);
            be4i.bml5q();
            return this
        }
    }();
    v4z.cDx2x = function(o4s) {
        o4s = o4s || {};
        k4o.bd4h(be4i.cuU0x(), function(J4N) {
            o4s[J4N] = v4z.sw1x(J4N)
        });
        return o4s
    };
    I4M.fJ7C.A4E({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (be4i.bmQ5V()) {
                document.onstorageready()
            }
        }
    });
    var cuL0x = function() {
        var cuH0x = function(D4H, J4N, bz5E) {
            be4i.Ww0x(J4N, JSON.stringify(D4H));
            delete bz5E[J4N]
        };
        return function() {
            k4o.eC6w(R4V, cuH0x)
        }
    }();
    h4l.s4w(document, "storageready", cuL0x);
    be4i.bmz5E()
})();
(function() {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        JW7P;
    if ( !! N4R.bnM5R) return;
    N4R.bnM5R = NEJ.C();
    JW7P = N4R.bnM5R.O4S(N4R.cH5M);
    JW7P.cx5C = function() {
        var gJ7C = +(new Date),
            mR9I = "dat-" + gJ7C;
        return function() {
            this.cD5I();
            var R4V = this.constructor[mR9I];
            if (!R4V) {
                R4V = {};
                this.constructor[mR9I] = R4V
            }
            this.S4W = R4V
        }
    }();
    JW7P.B4F = function(J4N) {
        return this.S4W[J4N]
    };
    JW7P.na9R = function(J4N, D4H) {
        var nq9h = this.S4W[J4N];
        this.S4W[J4N] = D4H;
        h4l.z4D(localCache, "cachechange", {
            key: J4N,
            type: "set",
            oldValue: nq9h,
            newValue: D4H
        });
        return this
    };
    JW7P.cJ5O = function(J4N) {
        var nq9h = this.S4W[J4N];
        k4o.bbo2x(this.S4W, J4N);
        h4l.z4D(localCache, "cachechange", {
            key: J4N,
            type: "delete",
            oldValue: nq9h,
            newValue: undefined
        });
        return nq9h
    };
    JW7P.Wt0x = function(FT5Y) {
        return NEJ.Q(this.S4W, FT5Y)
    };
    window.localCache = N4R.bnM5R.A4E();
    N4R.fJ7C.A4E({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c4g = NEJ.P,
        fx6r = NEJ.R,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.ut"),
        mR9I = "dat-" + +(new Date),
        ny9p;
    if ( !! N4R.bof5k) return;
    N4R.bof5k = NEJ.C();
    ny9p = N4R.bof5k.O4S(N4R.cH5M);
    ny9p.cx5C = function() {
        this.cD5I();
        this.S4W = this.constructor[mR9I];
        if (!this.S4W) {
            this.S4W = {};
            this.S4W[mR9I + "-l"] = {};
            this.constructor[mR9I] = this.S4W
        }
    };
    ny9p.sh0x = function(J4N) {
        return this.S4W[J4N]
    };
    ny9p.qb0x = function(J4N, D4H) {
        this.S4W[J4N] = D4H
    };
    ny9p.ls8k = function(J4N, kg8Y) {
        var j4n = this.sh0x(J4N);
        if (j4n == null) {
            j4n = kg8Y;
            this.qb0x(J4N, j4n)
        }
        return j4n
    };
    ny9p.cuF0x = function(J4N) {
        if (J4N != null) {
            delete this.S4W[J4N];
            return
        }
        k4o.eC6w(this.S4W, function(p4t, J4N) {
            if (J4N == mR9I + "-l") return;
            this.cuF0x(J4N)
        }, this)
    };
    ny9p.cDz2x = function(J4N) {
        if ( !! v4z.JV7O) return v4z.JV7O(J4N)
    };
    ny9p.cuB0x = function(J4N) {
        if ( !! v4z.sw1x) return v4z.sw1x(J4N)
    };
    ny9p.cuA0x = function(J4N, D4H) {
        if ( !! v4z.uW2x) v4z.uW2x(J4N, D4H)
    };
    ny9p.FE5J = function(J4N, kg8Y) {
        var j4n = this.Ur0x(J4N);
        if (j4n == null) {
            j4n = kg8Y;
            this.wr2x(J4N, j4n)
        }
        return j4n
    };
    ny9p.Ur0x = function(J4N) {
        var j4n = this.sh0x(J4N);
        if (j4n != null) return j4n;
        j4n = this.cuB0x(J4N);
        if (j4n != null) this.qb0x(J4N, j4n);
        return j4n
    };
    ny9p.wr2x = function(J4N, D4H) {
        this.cuA0x(J4N, D4H);
        this.qb0x(J4N, D4H)
    };
    ny9p.bRM3x = function(J4N) {
        if (J4N != null) {
            delete this.S4W[J4N];
            if ( !! v4z.JV7O) v4z.JV7O(J4N);
            return
        }
        k4o.eC6w(this.S4W, function(p4t, J4N) {
            if (J4N == mR9I + "-l") return;
            this.bRM3x(J4N)
        }, this)
    };
    ny9p.cDA2x = function() {
        this.bRM3x();
        return this
    };
    ny9p.cDD2x = function(J4N) {
        var j4n = this.S4W[mR9I + "-l"];
        delete j4n[J4N]
    };
    ny9p.bpG5L = function(J4N) {
        var j4n = this.S4W[mR9I + "-l"],
            bf4j = fx6r.slice.call(arguments, 1);
        k4o.bd4h(j4n[J4N], function(cK5P) {
            try {
                cK5P.apply(null, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[J4N]
    };
    ny9p.bpP6J = function(J4N, cK5P) {
        cK5P = cK5P || bs5x;
        var i4m = this.S4W[mR9I + "-l"][J4N];
        if (!i4m) {
            i4m = [cK5P];
            this.S4W[mR9I + "-l"][J4N] = i4m;
            return !1
        }
        i4m.push(cK5P);
        return !0
    };
    ny9p.cuu0x = function(i4m, bi4m, gc7V) {
        if (!i4m) return !1;
        bi4m = parseInt(bi4m) || 0;
        gc7V = parseInt(gc7V) || 0;
        if (!gc7V) {
            if (!i4m.loaded) return !1;
            gc7V = i4m.length
        }
        if ( !! i4m.loaded) gc7V = Math.min(gc7V, i4m.length - bi4m);
        for (var i = 0; i < gc7V; i++) if (!i4m[bi4m + i]) return !1;
        return !0
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b4f, K4O;
    if ( !! N4R.Uv0x) return;
    N4R.Uv0x = NEJ.C();
    b4f = N4R.Uv0x.O4S(N4R.bof5k);
    K4O = N4R.Uv0x.cs5x;
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.wl2x = e4i.key || "id";
        this.bk4o = e4i.data || bb4f;
        this.cus0x = !! e4i.autogc;
        this.cuq0x(e4i.id)
    };
    b4f.bD5I = function() {
        this.bG5L();
        if ( !! this.ed6X) {
            this.bRJ3x()
        }
    };
    b4f.cuq0x = function(C4G) {
        var R4V;
        if ( !! C4G) {
            R4V = this.S4W[C4G];
            if (!R4V) {
                R4V = {};
                this.S4W[C4G] = R4V
            }
        }
        R4V = R4V || this.S4W;
        R4V.hash = R4V.hash || {};
        this.Uz0x = R4V
    };
    b4f.bRJ3x = function() {
        this.ed6X = window.clearTimeout(this.ed6X);
        var bz5E = {};
        k4o.eC6w(this.Uz0x, function(i4m, J4N) {
            if (J4N == "hash") return;
            if (!k4o.eJ6D(i4m)) return;
            k4o.bd4h(i4m, function(p4t) {
                if (!p4t) return;
                bz5E[p4t[this.wl2x]] = !0
            }, this)
        }, this);
        k4o.eC6w(this.Wa0x(), function(p4t, C4G, dO6I) {
            if (!bz5E[C4G]) {
                delete dO6I[C4G]
            }
        })
    };
    b4f.cuo0x = function() {
        if ( !! this.ed6X) {
            this.ed6X = window.clearTimeout(this.ed6X)
        }
        this.ed6X = window.setTimeout(this.bRJ3x.g4k(this), 150)
    };
    b4f.BV4Z = function(p4t, VZ0x) {
        p4t = this.bRI3x(p4t, VZ0x) || p4t;
        if (!p4t) return null;
        var J4N = p4t[this.wl2x];
        if (J4N != null) {
            var id7W = this.Wa0x()[J4N];
            if ( !! id7W) p4t = NEJ.X(id7W, p4t);
            this.Wa0x()[J4N] = p4t
        }
        delete p4t.bRF3x;
        return p4t
    };
    b4f.bRI3x = bs5x;
    b4f.brp6j = function(J4N, p4t) {
        if (!p4t) return;
        if (!k4o.eJ6D(p4t)) {
            var i4m = this.hD7w(J4N),
                p4t = this.BV4Z(p4t, J4N);
            if ( !! p4t) i4m.unshift(p4t);
            return
        }
        k4o.no9f(p4t, this.brp6j.g4k(this, J4N))
    };
    b4f.UD0x = function(J4N, cy5D) {
        var i4m = this.hD7w(J4N);
        i4m.length = Math.max(i4m.length, cy5D);
        this.brS6M(J4N);
        return this
    };
    b4f.kq8i = function(J4N) {
        return this.hD7w(J4N).length
    };
    b4f.brS6M = function(J4N, pg0x) {
        this.hD7w(J4N).loaded = pg0x != !1;
        return this
    };
    b4f.VW0x = function(J4N) {
        return !!this.hD7w(J4N).loaded
    };
    b4f.uu2x = function(J4N, i4m) {
        this.ut2x(J4N);
        this.bsL6F({
            key: J4N,
            offset: 0,
            limit: i4m.length + 1
        }, {
            list: i4m,
            total: i4m.length
        })
    };
    b4f.hD7w = function() {
        var Hc6W = function(J4N) {
            return (J4N || "") + (!J4N ? "" : "-") + "list"
        };
        return function(J4N) {
            var J4N = Hc6W(J4N),
                i4m = this.Uz0x[J4N];
            if (!i4m) {
                i4m = [];
                this.Uz0x[J4N] = i4m
            }
            return i4m
        }
    }();
    b4f.Wa0x = function() {
        var dO6I = this.Uz0x.hash;
        if (!dO6I) {
            dO6I = {};
            this.Uz0x.hash = dO6I
        }
        return dO6I
    };
    b4f.bsW6Q = function() {
        var Hc6W = function(e4i) {
            return "r-" + e4i.key
        };
        return function(e4i) {
            var iQ8I = NEJ.X({}, e4i),
                nX9O = Hc6W(iQ8I);
            if (!this.bpP6J(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.cuh0x.g4k(this, iQ8I);
                this.z4D("dopullrefresh", iQ8I)
            }
            return this
        }
    }();
    b4f.cuh0x = function(e4i, i4m) {
        this.brp6j(e4i.key, i4m);
        this.bpG5L(e4i.rkey, "onpullrefresh", e4i)
    };
    b4f.lK9B = function() {
        var Hc6W = function(e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function(e4i) {
            e4i = e4i || bb4f;
            var iQ8I = {
                key: "" + e4i.key || "",
                ext: e4i.ext || null,
                data: e4i.data || null,
                offset: parseInt(e4i.offset) || 0,
                limit: parseInt(e4i.limit) || 0
            }, i4m = this.hD7w(iQ8I.key);
            if (this.cuu0x(i4m, iQ8I.offset, iQ8I.limit)) {
                this.z4D("onlistload", iQ8I);
                return this
            }
            var nX9O = Hc6W(iQ8I);
            if (!this.bpP6J(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.bsL6F.g4k(this, iQ8I);
                this.z4D("doloadlist", iQ8I)
            }
            return this
        }
    }();
    b4f.bsL6F = function() {
        var GW6Q = function(p4t, r4v, i4m) {
            if ( !! p4t) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function(e4i, o4s) {
            e4i = e4i || bb4f;
            var J4N = e4i.key,
                bi4m = e4i.offset,
                bRE3x = this.hD7w(J4N);
            var i4m = o4s || [];
            if (!k4o.eJ6D(i4m)) {
                i4m = o4s.result || o4s.list || [];
                var cy5D = parseInt(o4s.total);
                if (!isNaN(cy5D) || cy5D > i4m.length) {
                    this.UD0x(J4N, cy5D)
                }
            }
            k4o.bd4h(i4m, function(p4t, r4v) {
                bRE3x[bi4m + r4v] = this.BV4Z(p4t, J4N)
            }, this);
            if (i4m.length < e4i.limit) {
                this.brS6M(J4N);
                k4o.no9f(bRE3x, GW6Q)
            }
            this.bpG5L(e4i.rkey, "onlistload", e4i)
        }
    }();
    b4f.ut2x = function() {
        var GW6Q = function(p4t, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function(J4N) {
            var i4m = this.hD7w(J4N);
            k4o.no9f(i4m, GW6Q);
            this.brS6M(J4N, !1);
            if (this.cus0x) {
                this.cuo0x()
            }
            return this
        }
    }();
    b4f.bRD3x = function(p4t, VZ0x) {
        return !p4t.bRF3x
    };
    b4f.eH6B = function(C4G) {
        return this.Wa0x()[C4G]
    };
    b4f.cDJ2x = function(C4G) {
        var p4t = this.eH6B(C4G);
        if ( !! p4t) p4t.bRF3x = !0
    };
    b4f.VU0x = function() {
        var Hc6W = function(e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function(e4i) {
            e4i = e4i || bb4f;
            var C4G = e4i[this.wl2x],
                iQ8I = {
                    id: C4G,
                    ext: e4i.ext,
                    data: e4i.data || {},
                    key: "" + e4i.key || ""
                };
            p4t = this.eH6B(C4G);
            iQ8I.data[this.wl2x] = C4G;
            if ( !! p4t && this.bRD3x(p4t, iQ8I.key)) {
                this.z4D("onitemload", iQ8I);
                return this
            }
            var nX9O = Hc6W(iQ8I);
            if (!this.bpP6J(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.cub0x.g4k(this, iQ8I);
                this.z4D("doloaditem", iQ8I)
            }
            return this
        }
    }();
    b4f.cub0x = function(e4i, p4t) {
        e4i = e4i || bb4f;
        this.BV4Z(p4t, e4i.key);
        this.bpG5L(e4i.rkey, "onitemload", e4i)
    };
    b4f.jw8o = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.zs4w.g4k(this, e4i);
        this.z4D("doadditem", e4i)
    };
    b4f.zs4w = function(e4i, p4t) {
        var J4N = e4i.key;
        p4t = this.BV4Z(p4t, J4N);
        if ( !! p4t) {
            var eV6P = 0,
                i4m = this.hD7w(J4N);
            if (!e4i.push) {
                eV6P = -1;
                var bi4m = e4i.offset || 0;
                i4m.splice(bi4m, 0, p4t)
            } else if (i4m.loaded) {
                eV6P = 1;
                i4m.push(p4t)
            } else {
                i4m.length++
            }
        }
        var d4h = {
            key: J4N,
            flag: eV6P,
            data: p4t,
            action: "add",
            ext: e4i.ext
        };
        this.z4D("onitemadd", d4h);
        return d4h
    };
    b4f.Kc7V = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.buf7Y.g4k(this, e4i);
        this.z4D("dodeleteitem", e4i)
    };
    b4f.buf7Y = function(e4i, bRC3x) {
        var p4t, J4N = e4i.key;
        if ( !! bRC3x) {
            p4t = this.eH6B(e4i.id) || null;
            var C4G = e4i.id,
                ctZ0x = this.wl2x,
                i4m = this.hD7w(J4N),
                r4v = k4o.di6c(i4m, function(id7W) {
                    return !!id7W && id7W[ctZ0x] == C4G
                });
            if (r4v >= 0) i4m.splice(r4v, 1)
        }
        var d4h = {
            key: J4N,
            data: p4t,
            action: "delete",
            ext: e4i.ext
        };
        this.z4D("onitemdelete", d4h);
        return d4h
    };
    b4f.VR0x = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.ctY0x.g4k(this, e4i);
        this.z4D("doupdateitem", e4i)
    };
    b4f.ctY0x = function(e4i, p4t) {
        var J4N = e4i.key;
        if ( !! p4t) p4t = this.BV4Z(p4t, J4N);
        var d4h = {
            key: J4N,
            data: p4t,
            action: "update",
            ext: e4i.ext
        };
        this.z4D("onitemupdate", d4h);
        return d4h
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.buP7I) return;
    N4R.buP7I = NEJ.C();
    b4f = N4R.buP7I.O4S(N4R.Uv0x);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.bjI4M({
            doloadlist: this.VQ0x.g4k(this),
            doloaditem: this.bve7X.g4k(this),
            doadditem: this.bRB3x.g4k(this),
            dodeleteitem: this.VP0x.g4k(this),
            doupdateitem: this.VO0x.g4k(this),
            dopullrefresh: this.bRA3x.g4k(this)
        })
    };
    b4f.VQ0x = bs5x;
    b4f.bRA3x = bs5x;
    b4f.bve7X = bs5x;
    b4f.bRB3x = bs5x;
    b4f.VP0x = bs5x;
    b4f.VO0x = bs5x
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        b4f, K4O;
    q4u.hG7z = NEJ.C();
    b4f = q4u.hG7z.O4S(I4M.buP7I);
    b4f.co5t = function() {
        var zg3x = location.protocol + "//" + location.host;
        var ctU0x = function(br5w, j4n) {
            var bz5E = {
                conf: {},
                data: {},
                urls: []
            };
            k4o.bd4h(br5w, function(J4N, r4v, i4m) {
                var bg4k = q4u.B4F(J4N);
                if (!bg4k) return;
                var bvV7O = bRz3x(bg4k.url, j4n[J4N]);
                bz5E.urls.push(bvV7O);
                bz5E.conf[bvV7O] = bg4k;
                bz5E.data[bvV7O] = JSON.stringify(j4n[J4N] == null ? "" : j4n[J4N])
            });
            return bz5E
        };
        var bRz3x = function(Y4c, j4n) {
            return Y4c.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bRy3x = function(bg4k, e4i, d4h) {
            h4l.z4D(window, "requesterror", d4h);
            if ( !! d4h.stopped) return;
            var Cb4f = bg4k.onerror || e4i.onerror;
            if (k4o.fG7z(Cb4f)) {
                this.z4D(Cb4f, d4h, e4i)
            } else {
                (Cb4f || bs5x).call(this, d4h, e4i)
            }
            var d4h = {
                result: d4h,
                option: e4i
            };
            this.z4D("onerror", d4h);
            if (!d4h.stopped)(bg4k.onmessage || bs5x).call(this, d4h.result.code, d4h.result)
        };
        var bRx3x = function(Q4U, bg4k, e4i) {
            var o4s = Q4U;
            if (k4o.gG7z(bg4k.format)) {
                o4s = bg4k.format.call(this, Q4U, e4i)
            }
            return o4s
        };
        var yB3x = function(Q4U, bg4k, e4i, uV2x) {
            if (k4o.gG7z(bg4k.beforeload)) {
                bg4k.beforeload.call(this, Q4U, e4i, bg4k)
            }
            if (Q4U && Q4U.code != null && Q4U.code != 200) {
                bRy3x.call(this, bg4k, e4i, {
                    key: e4i.key,
                    code: Q4U.code,
                    message: Q4U.message || "",
                    captchaId: Q4U.captchaId,
                    ext: Q4U
                });
                return
            }
            var o4s = Q4U;
            if (!uV2x) {
                o4s = bRx3x.call(this, Q4U, bg4k, e4i)
            } else if (k4o.gG7z(bg4k.format)) {
                var bwG7z = [];
                k4o.bd4h(uV2x.urls, function(Y4c) {
                    bwG7z.push(bRx3x.call(this, Q4U[Y4c], uV2x.conf[Y4c], e4i))
                }, this);
                bwG7z.push(e4i);
                o4s = bg4k.format.apply(this, bwG7z)
            }
            var ss1x = bg4k.onload || e4i.onload,
                bRv3x = bg4k.finaly || e4i.finaly || bs5x;
            if (k4o.fG7z(ss1x)) {
                bRv3x.call(this, this.z4D(ss1x, o4s), e4i)
            } else {
                bRv3x.call(this, (ss1x || bs5x).call(this, o4s), e4i)
            }
        };
        var AE4I = function(bg4k, e4i, cb5g) {
            bRy3x.call(this, bg4k, e4i, {
                key: e4i.key,
                code: cb5g.code || -1,
                message: cb5g.message || ""
            })
        };
        return function(bg4k, e4i) {
            if (k4o.fG7z(bg4k)) {
                bg4k = q4u.B4F(bg4k)
            }
            delete e4i.value;
            (bg4k.filter || bs5x).call(this, e4i, bg4k);
            var Q4U = e4i.value;
            if ( !! Q4U) {
                yB3x.call(this, Q4U, bg4k, e4i);
                return
            }
            var Y4c, j4n = e4i.data || bb4f,
                yR3x = {
                    cookie: !0,
                    type: bg4k.rtype || "json",
                    method: bg4k.type || "POST",
                    onerror: AE4I.g4k(this, bg4k, e4i),
                    noescape: bg4k.noescape
                };
            if (k4o.eJ6D(bg4k.url)) {
                var uV2x = ctU0x(bg4k.url, j4n);
                Y4c = zg3x + "/api/batch";
                yR3x.data = k4o.cE5J(uV2x.data);
                yR3x.onload = yB3x.ew6q(this, bg4k, e4i, uV2x);
                yR3x.headers = {
                    "batch-method": "POST"
                };
                delete uV2x.data
            } else {
                var kb8T = bg4k.url.indexOf(":") < 0 ? zg3x : "";
                Y4c = bRz3x(kb8T + bg4k.url, j4n);
                yR3x.data = k4o.cE5J(e4i.data);
                yR3x.onload = yB3x.ew6q(this, bg4k, e4i)
            }
            if (yR3x.method == "GET") yR3x.query = yR3x.data;
            return v4z.bn5s(Y4c, yR3x)
        }
    }();
    b4f.Ed5i = function() {
        var gK7D = /^get|list|pull$/i;
        return function(bRu3x, e4i) {
            var J4N = e4i.key,
                bg4k = q4u.B4F(J4N.split("-")[0] + "-" + bRu3x);
            if (gK7D.test(bRu3x) && J4N.indexOf("post-") < 0) bg4k.type = "GET";
            this.co5t(bg4k, e4i)
        }
    }();
    b4f.cDK2x = function(J4N, i4m) {
        var cy5D = i4m.length;
        this.bsL6F({
            key: J4N,
            offset: 0,
            limit: cy5D + 1
        }, {
            list: i4m,
            total: cy5D
        })
    };
    b4f.VQ0x = function(e4i) {
        this.Ed5i("list", e4i)
    };
    b4f.bve7X = function(e4i) {
        this.Ed5i("get", e4i)
    };
    b4f.bRA3x = function(e4i) {
        this.Ed5i("pull", e4i)
    };
    b4f.bRB3x = function(e4i) {
        this.Ed5i("add", e4i)
    };
    b4f.VP0x = function(e4i) {
        this.Ed5i("del", e4i)
    };
    b4f.VO0x = function(e4i) {
        this.Ed5i("update", e4i)
    };
    b4f.ctF0x = function(p4t) {
        this.BV4Z(p4t)
    };
    I4M.fJ7C.A4E({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        bfp3x = {}, b4f, K4O;
    var ui2x = function(o4s, e4i) {
        o4s.conf = e4i.conf;
        return o4s
    };
    q4u.fe6Y({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q4U, e4i) {
                return ui2x({
                    mv: Q4U
                }, e4i)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(o4s, e4i) {
                if ( !! o4s.songs && o4s.songs.length > 0) o4s.song = o4s.songs[0];
                else o4s.song = bfp3x;
                delete o4s.songs;
                return ui2x(o4s, e4i)
            },
            filter: function(e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: ui2x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: ui2x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(o4s, e4i) {
                o4s.playlist = o4s.result;
                delete o4s.result;
                return ui2x(o4s, e4i)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: ui2x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: ui2x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: ui2x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function(Q4U, e4i) {
                var ctE0x = {
                    id: e4i.data.radioId,
                    programs: Q4U.programs
                };
                return ui2x({
                    djradio: ctE0x
                }, e4i)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: ui2x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function(o4s, e4i) {
                var wH2x = {
                    lyric: "",
                    nolyric: true
                };
                if (o4s.code == 200 && o4s.lrc && o4s.lrc.lyric) {
                    wH2x.lyric = o4s.lrc.lyric;
                    wH2x.nolyric = false
                } else {
                    wH2x.nolyric = true
                }
                return ui2x({
                    lyric: wH2x
                }, e4i)
            }
        }
    });
    q4u.wI2x = NEJ.C();
    b4f = q4u.wI2x.O4S(q4u.hG7z);
    b4f.ctD0x = function(u4y, cT5Y) {
        return this.sh0x(this.VI0x(u4y, cT5Y))
    };
    b4f.UT0x = function(u4y, cT5Y, e4i) {
        e4i = e4i || {};
        var j4n = this.sh0x(this.VI0x(u4y, cT5Y));
        if (j4n && (u4y != 13 && u4y != 19 || e4i.conf && e4i.conf.useCache)) {
            this.z4D("onresourceload", u4y, cT5Y, j4n, e4i.conf);
            return
        }
        e4i.data = {
            id: cT5Y
        };
        e4i.onload = this.ctC0x.g4k(this, u4y, cT5Y);
        e4i.onerror = this.ctB0x.g4k(this, u4y, cT5Y);
        this.co5t("res-" + this.Cd4h(u4y) + "-get", e4i)
    };
    b4f.ctC0x = function(u4y, cT5Y, o4s) {
        var j4n = o4s[this.Cd4h(u4y)];
        this.qb0x(this.VI0x(u4y, cT5Y), j4n);
        this.z4D("onresourceload", u4y, cT5Y, j4n, o4s.conf)
    };
    b4f.ctB0x = function(u4y, cT5Y, o4s, e4i) {
        if (o4s.code != 404) {
            this.z4D("onresourceerror", u4y, cT5Y, o4s.code);
            return
        }
        this.qb0x(this.VI0x(u4y, cT5Y), bfp3x);
        this.z4D("onresourceload", u4y, cT5Y, bfp3x, e4i.conf)
    };
    b4f.cDL2x = function(u4y, e4i) {
        this.co5t("res-" + this.Cd4h(u4y) + "-play", e4i)
    };
    b4f.VI0x = function(u4y, cT5Y) {
        return "res-" + this.Cd4h(u4y) + "-" + cT5Y
    };
    b4f.Cd4h = function(u4y) {
        var bz5E = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz5E[u4y]
    };
    q4u.wI2x.Ke7X = function(u4y, cT5Y) {
        if (!this.ff6Z) this.ff6Z = q4u.wI2x.A4E({});
        return this.ff6Z.ctD0x(u4y, cT5Y)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        bgf3x = /^[1-9][0-9]*$/,
        b4f, K4O;
    var LOCAL_LOG_KEY = "local-log";
    q4u.fe6Y({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q4u.hR7K = NEJ.C();
    b4f = q4u.hR7K.O4S(q4u.hG7z);
    b4f.fu6o = function(U4Y, bg4k) {
        if (!U4Y || !bg4k) return;
        if (k4o.fG7z(bg4k)) {
            try {
                bg4k = JSON.parse(bg4k)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a3x)
                }
            }
        }
        if (!k4o.lw8o(bg4k)) return;
        this.co5t("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U4Y,
                    json: bg4k
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U4Y + ", json=" + JSON.stringify(bg4k))
        }
    };
    b4f.VC0x = function(nI9z) {
        if (!k4o.eJ6D(nI9z)) return;
        this.co5t("bi-batch-log", {
            data: {
                logs: JSON.stringify(nI9z)
            }
        })
    };
    b4f.bRn3x = function(bg4k) {
        if (!bg4k || !bg4k.type || !bg4k.rid) return;
        var nP9G = bg4k.type;
        if (bgf3x.test(nP9G)) {
            nP9G = this.Cd4h(nP9G)
        }
        if (!nP9G) return;
        if (nP9G == "playlist") nP9G = "list";
        this.fu6o("search", {
            type: nP9G,
            id: bg4k.rid || null,
            keyword: bg4k.keyword || null
        })
    };
    b4f.UX0x = function() {
        var cto0x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bg4k) {
            if (!bg4k || !bg4k.type || !bg4k.rid) return;
            if (bg4k.play === undefined) bg4k.play = true;
            var nP9G = bg4k.type;
            if (bgf3x.test(nP9G)) {
                nP9G = this.Cd4h(nP9G)
            }
            if (!nP9G) return;
            if (nP9G == "playlist") nP9G = "list";
            var Q4U = {
                id: bg4k.rid,
                type: nP9G
            };
            if (nP9G == "song" && bg4k.source) {
                Q4U.source = this.bRl3x(bg4k.source);
                if ( !! bg4k.sourceid) Q4U.sourceid = bg4k.sourceid
            }
            this.fu6o(!bg4k.play ? "addto" : "play", Q4U);
            if (nP9G == "song" && bg4k.hash && bg4k.hash.match(cto0x)) {
                this.fu6o(!bg4k.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b4f.bgy3x = function(C4G, bA5F, ea6U, Fe5j) {
        var Q4U = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cth0x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q4U.id = C4G;
        Q4U.time = Math.round(bA5F);
        Q4U.end = k4o.fG7z(Fe5j) ? Fe5j : cth0x[Fe5j] || "";
        if (ea6U && ea6U.fid) {
            Q4U.source = this.bRl3x(ea6U.fid);
            Q4U.sourceId = ea6U.fdata
        }
        this.fu6o("play", Q4U)
    };
    b4f.bRj3x = function(u4y, cT5Y) {
        if (!u4y || !cT5Y) return;
        if (bgf3x.test(u4y)) u4y = this.Cd4h(u4y);
        if (u4y != "playlist" && u4y != "dj") return;
        var bg4k = q4u.B4F("plus-" + u4y + "-count");
        if (!bg4k) return !1;
        this.co5t(bg4k, {
            data: {
                id: cT5Y
            }
        });
        var R4V = this.ls8k("play-hist-" + u4y, []);
        if (k4o.di6c(R4V, cT5Y) < 0) {
            R4V.push(cT5Y);
            return !0
        }
        return !1
    };
    b4f.Cd4h = function(u4y) {
        var bz5E = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz5E[u4y]
    };
    b4f.bRl3x = function(Kf7Y) {
        var bz5E = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz5E[Kf7Y]
    };
    b4f.bRh3x = function(hk7d) {
        var nI9z = this.FE5J(LOCAL_LOG_KEY, []);
        nI9z.unshift(hk7d);
        if (nI9z.length > 200) {
            nI9z.length = 200
        }
        this.wr2x(LOCAL_LOG_KEY, nI9z)
    };
    b4f.cta0x = function() {
        return this.Ur0x(LOCAL_LOG_KEY)
    };
    b4f.ej6d = function(Q4U) {
        this.fu6o("play", Q4U)
    };
    var bRf3x = q4u.hR7K.gr7k();
    l4p.tc1x = function() {
        bRf3x.fu6o.apply(bRf3x, arguments)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        m4q = c4g("nm.l"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d");
    var FullscreenApi = l4p.EA5F || {};
    if (!q4u.wI2x) return;
    var R4V = q4u.wI2x.A4E({
        onresourceload: csW0x
    });
    var tX2x = q4u.hR7K.gr7k();

    function csW0x(u4y, cT5Y, j4n, bg4k) {
        var i4m = [];
        switch (parseInt(u4y)) {
            case 2:
                i4m = j4n;
                break;
            case 13:
                i4m = j4n.tracks;
                break;
            case 18:
                i4m.push(j4n);
                break;
            case 19:
                i4m = j4n.songs;
                break;
            case 21:
                if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                    l4p.Vl0x(j4n.data.id, j4n.mp.fee);
                    return
                }
                break
        }
        if (l4p.Kg7Z(i4m, true, null, u4y == 19 ? {
            source: "album",
            sourceid: cT5Y
        } : null) == 0) {
            return
        }
        l4p.fq6k({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bg4k.message
        })
    }
    function csV0x(d4h, rY0x, yo3x, eu6o) {
        eu6o = eu6o || {};
        if (d4h.action == "ok") {
            if (yo3x) {
                location.dispatch2("/payfee?songId=" + yo3x)
            } else {
                location.dispatch2("/payfee?fee=" + rY0x || 1)
            }
            tX2x.fu6o("click", {
                type: "tobuyvip",
                name: "box",
                source: eu6o.source || "song",
                sourceid: eu6o.sourceid || yo3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yo3x);
            tX2x.fu6o("click", {
                type: "tobuyone",
                name: "box",
                source: eu6o.source || "song",
                sourceid: eu6o.sourceid || yo3x || 0
            })
        }
    }
    function Vn0x(bH5M) {
        l4p.fq6k({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bH5M,
            btntxt: "知道了"
        })
    }
    function Vp0x(bH5M, Q4U) {
        Vn0x((Q4U || bb4f).toast || bH5M)
    }
    l4p.ir8j = function(bH5M, C4G, u4y, csU0x, bj4n) {
        bH5M = bH5M || "由于版权保护，您所在的地区暂时无法使用。";
        if (csU0x && bj4n && bj4n.privilege && bj4n.privilege.toast) {
            v4z.bn5s("/api/song/toast", {
                query: {
                    id: bj4n.id
                },
                type: "json",
                onload: Vp0x.g4k(this, bH5M),
                onerror: Vp0x.g4k(this, bH5M)
            })
        } else if (C4G && u4y) {
            R4V.UT0x(u4y, C4G, {
                conf: {
                    message: bH5M,
                    useCache: u4y != 18
                }
            })
        } else {
            Vn0x(bH5M)
        }
    };
    l4p.tW2x = function(rY0x, yo3x, u4y, eu6o, mS9J) {
        var bS5X, or9i = "m-popup-info",
            bia4e = "单首购买",
            bic4g = "马上去开通",
            cV5a = "唱片公司要求，当前歌曲须付费使用。",
            bRe3x = true;
        try {
            bS5X = top.api.feeMessage || {}
        } catch (e) {
            bS5X = {}
        }
        if (rY0x == 1 || rY0x == 8 || rY0x == 16) {
            if (u4y == "song") {
                or9i = "m-popup-song-buy";
                cV5a = bS5X["vip2"] || cV5a;
                bic4g = bS5X["vip2button"] || "包月购买";
                bia4e = bS5X["vip2link"] || bia4e;
                if (mS9J && mS9J.flag !== undefined) {
                    var br5w = mS9J.flag.toString(2).split("");
                    if (parseInt(br5w.pop(), 10) == 1) {
                        bRe3x = false
                    }
                }
            } else {
                cV5a = bS5X["vip"] || cV5a
            }
        } else if (rY0x == 4) {
            cV5a = bS5X["album"] || cV5a;
            bic4g = "立即订购"
        } else {
            cV5a = bS5X["unknow"] || cV5a
        }
        l4p.kk8c({
            clazz: "m-layer-w5",
            html: a3x.bZ5e(or9i, {
                songTxt: bia4e,
                tip: cV5a,
                oktext: bic4g,
                cctext: "以后再说",
                showSongText: bRe3x
            }),
            onaction: csV0x.ew6q(null, rY0x, yo3x, eu6o)
        })
    };
    l4p.bRd3x = function(hr7k, gl7e) {
        l4p.hi7b({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u4y) {
                if (u4y == "ok") {
                    l4p.JU7N({
                        id: hr7k,
                        type: gl7e
                    })
                }
            }
        })
    };
    l4p.Vl0x = function(lu8m, rY0x) {
        var bS5X, cV5a = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bS5X = top.api.feeMessage || {}
        } catch (e) {
            bS5X = {}
        }
        if (rY0x == 1 || rY0x == 8) {
            cV5a = bS5X["vip"] || cV5a
        } else if (rY0x == 4) {
            cV5a = bS5X["album"] || cV5a
        } else {
            cV5a = bS5X["unknow"] || cV5a
        }
        return l4p.kk8c({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a3x.bZ5e("m-popup-info", {
                tip: cV5a,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + lu8m);
                    tX2x.fu6o("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: lu8m || 0
                    })
                }
            }
        })
    };
    l4p.Kg7Z = function() {
        function compareFee(csP0x, csO9F) {
            var bz5E = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz5E[csP0x] || 0) - (bz5E[csO9F] || 0)
        }
        return function(i4m, cV5a, sq1x, eu6o) {
            sq1x = sq1x || {};
            var yV3x = [],
                Ki7b = {}, bRc3x = 0,
                bRb3x = 0,
                Kl7e = null;
            if (!i4m || !i4m.length) return yV3x;
            k4o.bd4h(i4m, function(bj4n) {
                var fA7t = l4p.pB0x(bj4n);
                if (fA7t == 0) {
                    yV3x.push(bj4n)
                } else if (fA7t == 10) {
                    if (bj4n.privilege) {
                        bj4n.fee = bj4n.privilege.fee
                    }
                    if (compareFee(bj4n.fee, Ki7b.fee) > 0) {
                        Ki7b = bj4n
                    }
                } else if (fA7t == 11) {
                    ++bRc3x;
                    if (!sq1x.play) yV3x.push(bj4n)
                } else if (fA7t == 1e3) {
                    ++bRb3x;
                    if (!sq1x.download) yV3x.push(bj4n)
                } else if (fA7t == 100) {
                    Kl7e = bj4n
                }
            });
            if (yV3x.length == 0 && cV5a) {
                if (bRc3x == i4m.length) {
                    var ta1x = i4m[0].privilege || {};
                    if (ta1x.payed) {
                        l4p.ir8j("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.tW2x(ta1x.fee, null, null, eu6o)
                    }
                } else if (bRb3x == i4m.length) {
                    l4p.ir8j("因版权方要求，该歌曲不支持下载")
                } else if (Ki7b.id) {
                    l4p.tW2x(Ki7b.fee, Ki7b.id, null, eu6o, Ki7b.privilege)
                } else {
                    if (Kl7e && i4m.length == 1 && Kl7e.privilege && Kl7e.privilege.st < 0 && Kl7e.privilege.toast) {
                        l4p.ir8j(null, null, null, true, Kl7e)
                    } else {
                        l4p.ir8j()
                    }
                }
            }
            return yV3x
        }
    }();
    l4p.pB0x = function(bj4n) {
        if (!bj4n) return 0;
        var fA7t = bj4n.privilege;
        if (bj4n.program) return 0;
        if (window.GAbroad) return 100;
        if (fA7t) {
            if (fA7t.st != null && fA7t.st < 0) {
                return 100
            }
            if (fA7t.fee > 0 && fA7t.fee != 8 && fA7t.payed == 0 && fA7t.pl <= 0) return 10;
            if (fA7t.fee == 16) return 11;
            if ((fA7t.fee == 0 || fA7t.payed) && fA7t.pl > 0 && fA7t.dl == 0) return 1e3;
            if (fA7t.pl == 0 && fA7t.dl == 0) return 100;
            return 0
        } else {
            var ex6r = bj4n.status != null ? bj4n.status : bj4n.st != null ? bj4n.st : 0;
            if (bj4n.status >= 0) return 0;
            if (bj4n.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        w4A = c4g("nm.w"),
        b4f;
    if ( !! w4A.bRa3x) return;
    var ck5p = ~ [];
    ck5p = {
        bQY3x: ++ck5p,
        csH9y: (![] + "")[ck5p],
        kc8U: ++ck5p,
        Kq7j: (![] + "")[ck5p],
        VB0x: (ck5p[ck5p] + "")[ck5p],
        bQU3x: ++ck5p,
        cDM2x: ({} + "")[ck5p],
        csb9S: (ck5p[ck5p] + "")[ck5p],
        csa9R: (![] + "")[ck5p],
        UQ0x: ++ck5p,
        VJ0x: (!"" + "")[ck5p],
        cDP2x: ++ck5p,
        Ch4l: ++ck5p,
        bQK3x: ({} + "")[ck5p],
        wQ2x: ++ck5p,
        crI9z: ++ck5p,
        cDQ2x: ++ck5p,
        cDR2x: ++ck5p
    };
    ck5p.Kv7o = (ck5p.Kv7o = ck5p + "")[ck5p.Ch4l] + (ck5p.Kw7p = ck5p.Kv7o[ck5p.kc8U]) + (ck5p.VX0x = (ck5p.Dh5m + "")[ck5p.kc8U]) + (!ck5p + "")[ck5p.UQ0x] + (ck5p.Dj5o = ck5p.Kv7o[ck5p.wQ2x]) + (ck5p.Dh5m = (!"" + "")[ck5p.kc8U]) + (crE9v = (!"" + "")[ck5p.bQU3x]) + ck5p.Kv7o[ck5p.Ch4l] + ck5p.Dj5o + ck5p.Kw7p + ck5p.Dh5m;
    ck5p.VX0x = ck5p.Dh5m + (!"" + "")[ck5p.UQ0x] + ck5p.Dj5o + crE9v + ck5p.Dh5m + ck5p.VX0x;
    ck5p.Dh5m = ck5p.bQY3x[ck5p.Kv7o][ck5p.Kv7o];
    w4A.bRa3x = ck5p
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ui"),
        b4f;
    if ( !! N4R.VY0x) return;
    var iZ8R = a3x.tO2x(".#<uispace>{position:absolute;background:#fff;}");
    N4R.VY0x = NEJ.C();
    b4f = N4R.VY0x.O4S(N4R.Sc9T);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.bX5c([
            [document, "click", this.sW1x.g4k(this)]
        ]);
        this.crz9q = !! e4i.nostop;
        this.bQC2x = {
            top: e4i.top,
            left: e4i.left
        }
    };
    b4f.bD5I = function() {
        delete this.xI3x;
        delete this.bkz4D;
        delete this.qN0x;
        delete this.bQB2x;
        delete this.Wb0x;
        delete this.bQC2x;
        this.bG5L()
    };
    b4f.ce5j = function() {
        this.mb9S = iZ8R
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.AW4a = this.n4r;
        h4l.s4w(this.n4r, "click", this.crt9k.g4k(this))
    };
    b4f.sW1x = function(d4h) {
        if (d4h.button != 2) this.bu5z()
    };
    b4f.crt9k = function(d4h) {
        if (this.crz9q) return;
        h4l.tr1x(d4h);
        var F4J = h4l.W4a(d4h);
        if (F4J.tagName == "A") h4l.cp5u(d4h)
    };
    b4f.crq9h = function() {
        var dh6b = /\s+/i;
        return function(nJ9A) {
            nJ9A = (nJ9A || "").trim().toLowerCase().split(dh6b);
            nJ9A[0] = nJ9A[0] || "bottom";
            nJ9A[1] = nJ9A[1] || "left";
            this.qN0x = nJ9A
        }
    }();
    b4f.crn9e = function(nJ9A) {
        var o4s = {}, nm9d = this.bkz4D,
            cDS2x = a3x.oy9p(),
            cA5F = this.n4r.offsetWidth,
            ci5n = this.n4r.offsetHeight;
        switch (nJ9A[0]) {
            case "top":
                o4s.top = nm9d.top - ci5n;
                o4s.left = nJ9A[1] == "right" ? nm9d.left + nm9d.width - cA5F : nm9d.left;
                break;
            case "left":
                o4s.left = nm9d.left - cA5F;
                o4s.top = nJ9A[1] == "bottom" ? nm9d.top + nm9d.height - ci5n : nm9d.top;
                break;
            case "right":
                o4s.left = nm9d.left + nm9d.width;
                o4s.top = nJ9A[1] == "bottom" ? nm9d.top + nm9d.height - ci5n : nm9d.top;
                break;
            default:
                o4s.top = nm9d.top + nm9d.height;
                o4s.left = nJ9A[1] == "right" ? nm9d.left + nm9d.width - cA5F : nm9d.left;
                break
        }
        return o4s
    };
    b4f.JD6x = function() {
        if (!this.bQB2x) {
            this.gF7y(this.bQC2x);
            return
        }
        if ( !! this.Wb0x) {
            this.gF7y(this.xI3x);
            return
        }
        if ( !! this.bkz4D) this.gF7y(this.crn9e(this.qN0x))
    };
    b4f.crd9U = function(F4J, do6i, d4h) {
        do6i = do6i || bb4f;
        var bQt2x = a3x.oy9p(),
            cY5d = h4l.jB8t(d4h) + (do6i.left || 0),
            hB7u = h4l.mf9W(d4h) + (do6i.top || 0),
            cA5F = F4J.offsetWidth + (do6i.right || 0),
            ci5n = F4J.offsetHeight + (do6i.bottom || 0),
            Kx7q = bQt2x.scrollWidth,
            blo4s = bQt2x.scrollHeight,
            blp4t = cY5d + cA5F,
            blq4u = hB7u + ci5n;
        switch (this.qN0x[0]) {
            case "top":
                hB7u = blq4u > blo4s ? hB7u - ci5n : hB7u;
                if (this.qN0x[1] == "right") {
                    cY5d = cY5d - cA5F < 0 ? 0 : cY5d - cA5F
                } else {
                    cY5d = blp4t > Kx7q ? Kx7q - cA5F : cY5d
                }
                break;
            case "left":
                cY5d = blp4t > Kx7q ? Kx7q - cA5F : cY5d;
                if (this.qN0x[1] == "top") {
                    hB7u = blq4u > blo4s ? hB7u - ci5n : hB7u
                } else {
                    hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n
                }
                break;
            case "right":
                cY5d = cY5d - cA5F < 0 ? 0 : cY5d - cA5F;
                if (this.qN0x[1] == "top") {
                    hB7u = blq4u > blo4s ? hB7u - ci5n : hB7u
                } else {
                    hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n
                }
                break;
            default:
                hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n;
                if (this.qN0x[1] == "left") {
                    cY5d = blp4t > Kx7q ? Kx7q - cA5F : cY5d
                } else {
                    cY5d = cY5d - cA5F < 0 ? 0 : cY5d - cA5F
                }
                break
        }
        return {
            top: hB7u,
            left: cY5d
        }
    };
    b4f.blt4x = function() {
        var cqQ9H = function(F4J, do6i) {
            F4J = a3x.B4F(F4J);
            if (!F4J) return;
            do6i = do6i || bb4f;
            var bi4m = a3x.hO7H(F4J);
            return {
                top: bi4m.y - (do6i.top || 0),
                left: bi4m.x - (do6i.left || 0),
                width: F4J.offsetWidth + (do6i.right || 0),
                height: F4J.offsetHeight + (do6i.bottom || 0)
            }
        };
        return function(e4i) {
            e4i = e4i || bb4f;
            this.Wb0x = e4i.event;
            this.crq9h(e4i.align);
            if ( !! this.Wb0x) this.xI3x = this.crd9U(e4i.target, e4i.delta, this.Wb0x);
            this.bkz4D = cqQ9H(e4i.target, e4i.delta);
            this.bQB2x = !! e4i.fitable;
            this.L4P();
            return this
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        b4f, K4O;
    if ( !! N4R.Cl4p) return;
    N4R.Cl4p = NEJ.C();
    b4f = N4R.Cl4p.O4S(N4R.XP0x);
    K4O = N4R.Cl4p.cs5x;
    N4R.Cl4p.cDU2x = function() {
        var cqO9F = function(d4h, C4G, fK7D, ka8S, Ut0x) {
            var cz5E, J4N = C4G + "-i",
                R4V = fK7D.zi3x,
                bQq2x = !! ka8S.noclear,
                bQp2x = !! ka8S.toggled;
            if (k4o.gG7z(ka8S.onbeforeclick)) {
                var Wh0x = ka8S.noclear,
                    cqE9v = ka8S.toggled;
                try {
                    ka8S.onbeforeclick(ka8S)
                } catch (e) {}
                bQq2x = !! ka8S.noclear;
                bQp2x = !! ka8S.toggled;
                ka8S.toggled = cqE9v;
                ka8S.noclear = Wh0x
            }
            var DZ5e = R4V[J4N];
            if (bQp2x && !! DZ5e) {
                DZ5e.bu5z();
                return
            }
            h4l.bh4l(d4h);
            if (!bQq2x) {
                h4l.z4D(document, "click");
                cz5E = fK7D.A4E(ka8S)
            } else {
                cz5E = fK7D.bUF4J(ka8S, !0)
            }
            R4V[J4N] = cz5E;
            cz5E.xp3x("onbeforerecycle", function() {
                delete R4V[J4N]
            });
            cz5E.blt4x(Ut0x)
        };
        return function(f4j, e4i) {
            f4j = a3x.B4F(f4j);
            if (!f4j) return this;
            if (!this.zi3x) this.zi3x = {};
            var C4G = a3x.lv8n(f4j);
            if ( !! this.zi3x[C4G]) return this;
            e4i = NEJ.X({}, e4i);
            var Ut0x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e4i);
            Ut0x.target = C4G;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                Ut0x.fitable = !0;
                e4i.parent = document.body
            }
            this.zi3x[C4G] = [C4G, e4i.event || "click", cqO9F.ew6q(null, C4G, this, e4i, Ut0x)];
            h4l.s4w.apply(h4l, this.zi3x[C4G]);
            return this
        }
    }();
    N4R.Cl4p.cDX2x = function(f4j) {
        if (!this.zi3x) return this;
        var C4G = a3x.lv8n(f4j),
            d4h = this.zi3x[C4G];
        if (!d4h) return this;
        delete this.zi3x[C4G];
        h4l.mw9n.apply(h4l, d4h);
        var cz5E = this.zi3x[C4G + "-i"];
        if ( !! cz5E) cz5E.bu5z();
        return this
    };
    b4f.blJ5O = function() {
        return N4R.VY0x.A4E(this.cc5h)
    };
    b4f.So9f = function() {
        K4O.So9f.apply(this, arguments);
        this.cc5h.top = null;
        this.cc5h.left = null;
        this.cc5h.nostop = !1
    };
    b4f.blt4x = function(e4i) {
        if ( !! this.pb0x) this.pb0x.blt4x(e4i);
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bc4g = c4g("nej.ui"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.blX5c = NEJ.C();
    b4f = m4q.blX5c.O4S(bc4g.Cl4p);
    b4f.bl5q = function(e4i) {
        e4i.nohack = true;
        this.bm5r(e4i)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        m4q = c4g("nm.l"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    var FullscreenApi = l4p.EA5F || {};
    m4q.Z4d = NEJ.C();
    b4f = m4q.Z4d.O4S(m4q.blX5c);
    K4O = m4q.Z4d.cs5x;
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.ey6s = e4i.type || 1
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.n4r = a3x.nH9y(this.cqy9p());
        var i4m = a3x.dk6e(this.n4r);
        this.qY0x = i4m[0];
        this.cv5A = i4m[1]
    };
    b4f.cqy9p = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b4f.JD6x = function() {
        var D4H = {}, ch5m = this.n4r.style,
            jD8v = a3x.oy9p(),
            om9d = {
                left: jD8v.scrollLeft,
                top: jD8v.scrollTop
            }, do6i = {
                left: jD8v.clientWidth - this.n4r.offsetWidth,
                top: jD8v.clientHeight - this.n4r.offsetHeight
            };
        D4H.top = Math.max(0, om9d.top + do6i.top / 2);
        D4H.left = Math.max(0, om9d.left + do6i.left / 2);
        this.pb0x.gF7y(D4H)
    };
    b4f.L4P = function(e4i) {
        K4O.L4P.call(this);
        this.JD6x();
        this.ey6s == 1 ? a3x.fb6V(this.qY0x, "u-icn-32", "u-icn-31") : a3x.fb6V(this.qY0x, "u-icn-31", "u-icn-32");
        this.cv5A.innerHTML = e4i.tip || ""
    };
    window.g_showTipCard = m4q.Z4d.L4P = function() {
        var eg6a;
        return function(e4i) {
            clearTimeout(eg6a);
            if (e4i.parent === undefined) e4i.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e4i.autoclose === undefined) e4i.autoclose = true;
            e4i.clazz = "m-sysmsg"; !! this.ff6Z && this.ff6Z.T4X();
            this.ff6Z = this.A4E(e4i);
            this.ff6Z.L4P(e4i);
            if (e4i.autoclose) eg6a = setTimeout(this.bu5z.g4k(this), 2e3)
        }.g4k(m4q.Z4d)
    }();
    m4q.Z4d.bu5z = function() { !! this.ff6Z && this.ff6Z.bu5z()
    }
})();
(function() {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v4z.bn5s = v4z.bn5s.eB6v(function(d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fG7z(e4i.query)) e4i.query = k4o.hv7o(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        fx6r = NEJ.R,
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        m4q = c4g("nm.l"),
        J4N = "playlist-tracks_",
        b4f;
    q4u.fe6Y({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q4U, e4i) {
                this.cqx9o(Q4U.playlist);
                return {
                    total: 0,
                    list: fx6r
                }
            },
            onerror: function() {
                this.z4D("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q4U, e4i) {
                var nu9l = Q4U.playlist;
                nu9l.creator = GUser;
                nu9l.isHost = !0;
                nu9l.typeFlag = "playlist";
                return nu9l
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.ig7Z, "listchange", d4h)
            },
            onmessage: function() {
                var mv9m = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cm5r) {
                    m4q.Z4d.L4P({
                        tip: mv9m[cm5r] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e4i) {
                e4i.id = e4i.data.pid
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.ig7Z, "listchange", d4h)
            },
            onmessage: function() {
                var mv9m = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cm5r) {
                    m4q.Z4d.L4P({
                        tip: mv9m[cm5r] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e4i) {
                var eu6o = e4i.ext || {};
                e4i.ext = NEJ.X(eu6o, e4i.data);
                e4i.data = {
                    id: e4i.ext.id
                }
            },
            format: function(Q4U, e4i) {
                m4q.Z4d.L4P({
                    tip: "收藏成功" + (Q4U.point > 0 ? ' 获得<em class="s-fc6">' + Q4U.point + "积分</em>" : "")
                });
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                return p4t
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.cqw9n, "listchange", d4h);
                h4l.z4D(q4u.cqw9n, "itemchange", {
                    attr: "subscribedCount",
                    data: d4h.data
                })
            },
            onmessage: function() {
                var mv9m = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(cm5r) {
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: mv9m[cm5r] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.ig7Z, "listchange", d4h)
            },
            onmessage: function() {
                var mv9m = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cm5r) {
                    m4q.Z4d.L4P({
                        tip: mv9m[cm5r],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e4i) {
                var j4n = e4i.data,
                    Wm0x = {};
                Wm0x["playlist-update-name"] = {
                    id: j4n.id,
                    name: j4n.name
                };
                Wm0x["playlist-update-tag"] = {
                    id: j4n.id,
                    tags: j4n.tags.join(";")
                };
                Wm0x["playlist-update-desc"] = {
                    id: j4n.id,
                    desc: j4n.description
                };
                e4i.data = Wm0x;
                e4i.ext = j4n
            },
            format: function(V4Z, qZ0x, Uo0x, e4i) {
                if (V4Z.code == 200 && qZ0x.code == 200 && Uo0x.code == 200) {
                    e4i.ext.allSuccess = true;
                    m4q.Z4d.L4P({
                        tip: "保存成功"
                    })
                } else if (V4Z.code == 407 || qZ0x.code == 407 || Uo0x.code == 407) {
                    e4i.ext.allSuccess = false;
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e4i.ext.allSuccess = false;
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eH6B(e4i.ext.id)
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.ig7Z, "listchange", d4h)
            },
            onmessage: function(cm5r) {
                m4q.Z4d.L4P({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.name = e4i.ext.name;
                return Q4U
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.tags = e4i.ext.tags;
                return Q4U
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.description = e4i.ext.description;
                return Q4U
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            },
            format: function(Q4U, e4i) {
                m4q.Z4d.L4P({
                    tip: "保存成功"
                });
                var p4t = this.eH6B(e4i.data.id);
                p4t.coverImgUrl = e4i.url;
                e4i.ext = p4t;
                return p4t
            },
            onmessage: function(cm5r) {
                m4q.Z4d.L4P({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.ig7Z, "itemchange", {
                    attr: "coverImgUrl",
                    data: e4i.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q4U, e4i) {
                var nu9l = this.eH6B(e4i.data.id);
                if (!nu9l) return;
                nu9l.playCount++;
                h4l.z4D(q4u.ig7Z, "itemchange", {
                    attr: "playcount",
                    data: nu9l
                })
            }
        }
    });
    q4u.ig7Z = NEJ.C();
    b4f = q4u.ig7Z.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bQk2x = function() {
        var dn6h = GUser.userId;
        this.lK9B({
            limit: 1001,
            key: "playlist_my-" + dn6h,
            data: {
                offset: 0,
                limit: 1001,
                uid: dn6h
            }
        })
    };
    b4f.cqx9o = function(i4m) {
        var dn6h = GUser.userId,
            iN8F = [],
            bQj2x = [];
        k4o.bd4h(i4m, function(p4t) {
            p4t.typeFlag = "playlist";
            if (p4t.creator && p4t.creator.userId == dn6h) {
                if (p4t.specialType == 5) p4t.name = "我喜欢的音乐";
                p4t.isHost = !0;
                iN8F.push(p4t)
            } else {
                bQj2x.push(p4t)
            }
        });
        this.uu2x("playlist_new-" + dn6h, iN8F);
        this.uu2x("playlist_fav-" + dn6h, bQj2x)
    };
    b4f.cqo9f = function(j4n) {
        this.co5t("playlist-update-cover", {
            data: j4n
        })
    };
    b4f.cDY2x = function() {
        var Uk0x = this.cqk9b.B4F("host-plist");
        if (Uk0x.length == 0) {
            return
        }
        if (Uk0x.length == 1 && Uk0x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Uk0x.length; i < len; i++) {
            var p4t = Uk0x[i];
            if (p4t.trackCount > 0) return p4t.id
        }
        return this.cqk9b.B4F("host-plist")[0].id
    };
    b4f.cqj9a = function(C4G) {
        if (GUser && GUser.userId > 0) {
            this.co5t("playlist-upcount", {
                data: {
                    id: C4G
                }
            })
        }
    };
    b4f.EB5G = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b4f.cDZ2x = function() {
        return GUser.userId
    };
    b4f.EH5M = function(p4t) {
        if (p4t.userId == GUser.userId && p4t.specialType == 5) p4t.name = "我喜欢的音乐";
        h4l.z4D(this.constructor, "itemchange", {
            data: this.BV4Z(p4t)
        });
        return p4t
    };
    I4M.fJ7C.A4E({
        element: q4u.ig7Z,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c4g = NEJ.P,
        fx6r = NEJ.R,
        bs5x = NEJ.F,
        bb4f = NEJ.O,
        I4M = c4g("nej.ut"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    q4u.fe6Y({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q4U) {
                return Q4U.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function(Q4U, e4i) {
                var bQf2x = [],
                    pl0x = Q4U.programs;
                if (pl0x) {
                    for (var i = 0, l = pl0x.length; i < l; i++) {
                        if (pl0x[i].programFeeType < 10 || pl0x[i].buyed) {
                            bQf2x.push(pl0x[i])
                        }
                    }
                }
                return bQf2x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q4U, e4i) {
                return Q4U.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e4i) {
                e4i.ext = e4i.data;
                e4i.data = {
                    id: e4i.ext.id
                };
                e4i.id = e4i.data.id
            },
            format: function(Q4U, e4i) {
                m4q.Z4d.L4P({
                    tip: "收藏成功"
                });
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                p4t.subscribed = !0;
                return p4t
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.qk0x, "listchange", d4h)
            },
            onmessage: function() {
                var mv9m = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(cm5r) {
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: mv9m[cm5r] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.qk0x, "listchange", d4h)
            },
            onmessage: function() {
                var mv9m = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(cm5r) {
                    l4p.bnQ5V({
                        txt: mv9m[cm5r] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e4i) {
                var p4t = this.eH6B(e4i.data.id) || bb4f;
                e4i.ext = (p4t.listenerCount || 0) + 1
            },
            format: function(Q4U, e4i) {
                var p4t = this.eH6B(e4i.data.id);
                if ( !! p4t) {
                    p4t.listenerCount = Math.max(e4i.ext, p4t.listenerCount || 0)
                }
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {
                    attr: "playCount",
                    data: this.eH6B(e4i.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function(Q4U, e4i) {
                var p4t = e4i.ext.data || this.eH6B(e4i.id);
                p4t.liked = true;
                p4t.likedCount++;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {}
                return p4t
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function(Q4U, e4i) {
                var p4t = e4i.ext.data || this.eH6B(e4i.id);
                p4t.liked = false;
                p4t.likedCount--;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {}
                return p4t
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        }
    });
    q4u.qk0x = NEJ.C();
    b4f = q4u.qk0x.O4S(q4u.hG7z);
    b4f.cEa2x = function() {
        var dn6h = GUser.userId;
        this.lK9B({
            limit: 1001,
            key: "program_fav-" + dn6h,
            data: {
                offset: 0,
                limit: 1e3,
                uid: dn6h
            }
        })
    };
    b4f.cEb2x = function(dc5h) {
        var pk0x = dc5h[this.wl2x];
        l4p.cqd9U(4, function(R4V) {
            R4V.uu2x("track_program-" + pk0x, dc5h.songs)
        });
        delete dc5h.songs;
        var bN5S = dc5h.mainSong;
        l4p.cqd9U(4, function(R4V) {
            R4V.uu2x("track_program_main-" + pk0x, !bN5S ? [] : [bN5S])
        });
        dc5h.mainSong = (bN5S || bb4f).id
    };
    b4f.cEc2x = function(C4G) {
        var dc5h = this.eH6B(C4G),
            dn6h = localCache.Wt0x("host.profile.userId");
        return !!dc5h && dc5h.dj.userId == dn6h
    };
    b4f.cEd2x = function(C4G) {
        return !1
    };
    b4f.EH5M = function(p4t) {
        h4l.z4D(this.constructor, "itemchange", {
            attr: "detail",
            data: this.BV4Z(p4t)
        });
        return p4t
    };
    b4f.cqj9a = function(C4G) {
        this.co5t("program-update-count", {
            data: {
                id: C4G
            }
        })
    };
    l4p.bQc2x = function(e4i) {
        var R4V = q4u.qk0x.A4E({
            onitemadd: function() {
                (e4i.onsuccess || bs5x)()
            },
            onerror: function() {
                (e4i.onerror || bs5x)()
            }
        });
        if (e4i.data.liked) {
            R4V.vd2x(e4i.data)
        } else {
            R4V.pf0x(e4i.data)
        }
    };
    b4f.pf0x = function(dc5h) {
        if (!l4p.gW7P()) return;
        var cq5v = {
            ext: {}
        };
        if (k4o.lw8o(dc5h)) {
            cq5v.id = dc5h.id;
            cq5v.ext.data = dc5h
        } else {
            cq5v.id = dc5h
        }
        this.co5t("program-like", cq5v)
    };
    b4f.vd2x = function(dc5h) {
        if (!l4p.gW7P()) return;
        var cq5v = {
            ext: {}
        };
        if (k4o.lw8o(dc5h)) {
            cq5v.id = dc5h.id;
            cq5v.ext.data = dc5h
        } else {
            cq5v.id = dc5h
        }
        this.co5t("program-unlike", cq5v)
    };
    I4M.fJ7C.A4E({
        element: q4u.qk0x,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        fx6r = NEJ.R,
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        m4q = c4g("nm.l"),
        l4p = c4g("nm.x"),
        J4N = "playlist-tracks_",
        l4p = c4g("nm.x"),
        b4f;
    q4u.fe6Y({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e4i) {
                e4i.data.c = JSON.stringify([{
                    id: e4i.data.id
                }])
            },
            format: function(Q4U, e4i) {
                var bj4n = l4p.Fd5i(Q4U.songs[0]);
                bj4n.privilege = Q4U.privileges[0];
                return bj4n
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e4i) {
                e4i.data.n = 1e3
            },
            format: function(Q4U, e4i) {
                var hw7p = [];
                this.sM1x.EH5M(Q4U.playlist);
                k4o.bd4h(Q4U.playlist.tracks, function(bN5S, r4v) {
                    var bQb2x = l4p.Fd5i(bN5S);
                    bQb2x.privilege = Q4U.privileges[r4v];
                    hw7p.push(bQb2x)
                }, this);
                return hw7p
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q4U, e4i) {
                var hw7p = [];
                k4o.bd4h(Q4U.songs, function(bj4n) {
                    hw7p.push(l4p.Fd5i(bj4n))
                });
                return hw7p
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e4i) {
                var bz5E = {}, j4n = e4i.data,
                    cpW9N = this.hD7w(e4i.key) || [];
                Fj5o = [];
                k4o.bd4h(cpW9N, function(bN5S) {
                    var C4G = k4o.lw8o(bN5S) ? bN5S.id : bN5S;
                    bz5E[C4G] = true
                });
                e4i.ext = [];
                k4o.bd4h(j4n.tracks, function(bN5S) {
                    var C4G = k4o.lw8o(bN5S) ? bN5S.id : bN5S;
                    if (!bz5E[C4G]) {
                        Fj5o.push(C4G);
                        bz5E[C4G] = true;
                        e4i.ext.push(bN5S)
                    }
                });
                j4n.trackIds = JSON.stringify(Fj5o);
                j4n.op = "add";
                if (!Fj5o.length) {
                    e4i.value = {
                        code: 502
                    }
                }
            },
            format: function(Q4U, e4i) {
                m4q.Z4d.L4P({
                    tip: "已添加至歌单"
                });
                var nu9l = this.sM1x.eH6B(e4i.data.pid);
                if ( !! Q4U.coverImgUrl) nu9l.coverImgUrl = Q4U.coverImgUrl;
                k4o.no9f(e4i.ext, function(bN5S) {
                    this.zs4w(e4i, k4o.lw8o(bN5S) ? bN5S : null);
                    if ( !! nu9l) nu9l.trackCount++
                }, this);
                h4l.z4D(q4u.ig7Z, "itemchange", {
                    data: nu9l || {},
                    cmd: "add"
                });
                this.z4D("onaddsuccess");
                return null
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.xc3x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                });
                var pk0x = e4i.data.pid,
                    cy5D = this.kq8i(e4i.key)
            },
            onmessage: function() {
                var mv9m = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(cm5r) {
                    setTimeout(function() {
                        m4q.Z4d.L4P({
                            tip: mv9m[cm5r] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            },
            format: function(Q4U, e4i) {
                var nu9l = this.sM1x.eH6B(e4i.data.pid);
                k4o.bd4h(e4i.ext, function(C4G) {
                    this.buf7Y({
                        id: C4G,
                        key: "track_playlist-" + e4i.data.pid
                    }, !0);
                    if ( !! nu9l) nu9l.trackCount = Math.max(0, nu9l.trackCount - 1)
                }, this);
                h4l.z4D(q4u.ig7Z, "itemchange", {
                    data: nu9l || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d4h, e4i) {
                h4l.z4D(q4u.xc3x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                })
            },
            onmessage: function(cm5r) {
                l4p.bnQ5V({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q4U, e4i) {
                return this.bQa2x.EH5M(Q4U.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q4U, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (Q4U.weekData && Q4U.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bPZ2x(Q4U.weekData)
                } else {
                    i4m = this.bPZ2x(Q4U.allData)
                }
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q4U, e4i) {
                var nI9z = [],
                    i4m = Q4U.recommend || [];
                k4o.bd4h(i4m, function(bj4n, r4v) {
                    nI9z.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj4n.alg,
                            scene: "user-song",
                            position: r4v,
                            id: bj4n.id
                        }
                    })
                });
                this.kI8A.VC0x(nI9z);
                e4i.limit = i4m.length;
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function(o4s, e4i) {
                return o4s
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q4u.xc3x = NEJ.C();
    b4f = q4u.xc3x.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        this.cD5I();
        this.sM1x = q4u.ig7Z.A4E();
        this.bQa2x = q4u.qk0x.A4E();
        this.kI8A = q4u.hR7K.A4E()
    };
    b4f.bPZ2x = function(i4m) {
        var o4s = [],
            fo6i = 0;
        k4o.bd4h(i4m, function(p4t, r4v) {
            var bj4n = l4p.Fd5i(p4t.song);
            if (r4v == 0) {
                fo6i = p4t.score
            }
            bj4n.max = fo6i;
            bj4n.playCount = p4t.playCount;
            bj4n.score = p4t.score;
            o4s.push(bj4n)
        });
        return o4s
    };
    I4M.fJ7C.A4E({
        element: q4u.xc3x,
        event: ["listchange"]
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        cW5b = c4g("nm.pc");
    var bpL6F = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var rE0x = function(bS5X) {
        var zg3x = "orpheus://orpheus";
        if (GEnvType == "local") zg3x = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bS5X), zg3x)
    };
    var cpT9K = function(mg9X) {
        var kN8F = "http://" + location.host + "/",
            TU9L = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dN6H = TU9L.exec(mg9X);
        if (!dN6H) return cpR9I(mg9X);
        var gl7e = dN6H[2],
            hr7k = dN6H[3],
            dn6h = dN6H[4] || "",
            jj8b = "";
        switch (gl7e) {
            case "album":
                jj8b = "#/m/album/comment/?rid=" + bpL6F[gl7e] + hr7k + "&id=" + hr7k;
                break;
            case "playlist":
                jj8b = "#/m/playlist/comment/?rid=" + bpL6F[gl7e] + hr7k + "&id=" + hr7k;
                break;
            case "song":
            case "dj":
            case "program":
                jj8b = "#/m/song?rid=" + bpL6F[gl7e] + hr7k;
                break;
            case "event":
                jj8b = "#/m/friend/event/?id=" + hr7k + "&uid=" + dn6h;
                break;
            case "user/home":
                jj8b = "#/m/personal/?uid=" + hr7k;
                break;
            case "mv":
                jj8b = "#/m2/mv/?id=" + hr7k;
                break;
            case "activity":
                jj8b = "#/m/friend/activity?id=" + hr7k;
                break;
            case "video":
                jj8b = "#/m2/mv/?id=" + hr7k + "&type=1";
                break;
            default:
                jj8b = "#/m/" + gl7e + "/?id=" + hr7k
        }
        return kN8F + jj8b
    };
    var cpR9I = function(mg9X) {
        var cpO9F = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dN6H = cpO9F.exec(mg9X);
        if (dN6H) return "http://v.youku.com/v_show/id_" + dN6H[1];
        return mg9X
    };
    cW5b.ej6d = function(gl7e, hr7k) {
        rE0x({
            name: "play",
            args: {
                type: gl7e,
                id: hr7k
            }
        })
    };
    cW5b.fC7v = function() {
        rE0x({
            name: "pause"
        })
    };
    cW5b.Cr4v = function(mg9X) {
        rE0x({
            name: "open",
            args: {
                link: cpT9K(mg9X)
            }
        })
    };
    cW5b.lj8b = function(gl7e, hr7k) {
        rE0x({
            name: "share",
            args: {
                type: gl7e,
                id: hr7k
            }
        })
    };
    cW5b.bPX2x = function(gl7e, hr7k) {
        rE0x({
            name: "comment",
            args: {
                type: gl7e,
                id: hr7k
            }
        })
    };
    cW5b.cpM9D = function() {
        rE0x({
            name: "init"
        })
    };
    cW5b.TP9G = function(ci5n) {
        rE0x({
            name: "setHeight",
            args: {
                height: ci5n
            }
        })
    };
    cW5b.jv8n = function(bH5M, X4b) {
        rE0x({
            name: "toast",
            args: {
                message: bH5M || "",
                state: X4b
            }
        })
    };
    cW5b.TO9F = function(mg9X) {
        rE0x({
            name: "login",
            args: {
                link: mg9X
            }
        })
    };
    cW5b.bPW2x = function(Cs4w) {
        rE0x({
            name: "topbar",
            args: {
                show: !! Cs4w
            }
        })
    };
    cW5b.cpG9x = function(by5D) {
        rE0x({
            name: "refreshtopbar",
            args: {
                info: by5D
            }
        })
    };
    cW5b.cpC9t = function(br5w, r4v) {
        rE0x({
            name: "big",
            args: {
                arr: br5w,
                index: r4v
            }
        })
    };
    cW5b.JU7N = function(cw5B) {
        rE0x({
            name: "download",
            args: {
                img: cw5B
            }
        })
    }
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, - 2, 3, - 3, 3432918353, 1555261956, 4, 2847714899, - 4, 5, - 5, 2714866558, 1281953886, 6, - 6, 198958881, 1141124467, 2970347812, - 7, 7, 3110523913, 8, - 8, 2428444049, - 9, 9, 10, - 10, 11, - 11, 2563907772, 12, - 12, 13, 2282248934, - 13, 2154129355, - 14, 14, 15, - 15, 16, - 16, 17, - 17, 18, - 18, 19, - 19, 20, - 20, 21, - 21, - 22, 22, 23, - 23, 24, - 24, - 25, 25, - 26, 26, 27, - 27, 28, - 28, 29, - 29, - 30, 30, 31, - 31, - 32, 32, - 33, 33, - 34, 34, - 35, 35, - 37, - 36, 36, 37, - 38, 39, - 39, 38, - 41, 41, 40, - 40, 42, - 43, 43, - 42, - 45, 45, - 44, 44, - 46, 47, 46, - 47, 48, - 48, 49, - 49, 50, - 51, 51, - 50, 570562233, 53, - 52, - 53, 52, 55, 54, - 54, - 55, 503444072, - 57, - 56, 57, 56, 58, - 59, - 58, 59, 60, 61, - 61, - 60, 62, 63, - 63, - 62, - 66, 711928724, 64, - 67, 66, 65, - 64, - 65, 67, - 69, 68, 69, 70, - 70, - 68, - 71, 71, - 72, 3686517206, - 75, - 74, 75, 73, 72, 74, - 73, 79, 76, - 76, 77, - 79, - 78, 78, - 77, 3554079995, 82, - 80, 80, - 83, - 82, 81, - 81, 83, - 85, - 84, - 86, 86, 84, 85, 87, - 87, - 91, 90, 88, 89, - 88, - 90, 91, - 89, 95, 94, - 92, - 95, 93, - 94, - 93, 92, - 99, 99, - 96, 98, - 97, - 98, 96, 97, - 101, 3272380065, 100, - 103, 101, 102, - 102, - 100, 103, 107, - 105, 104, 106, 105, - 106, - 104, - 107, 111, 108, 110, 109, - 108, - 110, - 109, - 111, 251722036, - 114, 115, 113, 112, 114, - 115, - 112, - 113, - 118, 118, - 116, - 119, 116, 117, - 117, 119, 123, 120, 122, 121, - 120, - 122, - 121, - 123, 125, 127, 3412177804, 126, 124, - 125, - 126, - 124, - 127, - 128, 128, - 129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, - .2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, - .26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, - .9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, - 1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                    else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
                        else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !! window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !! window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push( !! window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262],
                                k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        }, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var bPO2x;
    var uE2x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cpt9k = 0;
    var bPM2x = 0;
    var bPL2x = 1;
    var bPK2x = 0;
    var bsi6c = "";
    var bPJ2x = "";
    var bPI2x = "";
    var WF0x = "";
    var WH0x = "";
    var bsB6v = "";
    var bPH2x = 0;
    var bPG2x = "";
    var KG7z = "";
    var GI6C = 0;
    var bsP6J = ntes_get_domain();
    var bsQ6K = null;
    var cEh2x = "//analytics.163.com";
    var cpi9Z = function() {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bsP6J
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bsP6J
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bsP6J
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cph9Y = 0;
    var TD9u = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * TD9u))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, - 680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, - 389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, - 1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, - 176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, - 1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, - 45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, - 1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, - 42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, - 1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, - 40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, - 1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, - 165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, - 1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, - 373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, - 701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, - 660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, - 405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, - 1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, - 187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, - 1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, - 51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, - 1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, - 378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, - 2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, - 35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, - 1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, - 155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, - 1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, - 358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, - 722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, - 640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, - 421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, - 995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, - 198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, - 1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, - 57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, - 1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, - 1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, - 2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, - 30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, - 1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, - 145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, - 1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, - 343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << TD9u) - 1;
        for (var b = 0; b < d.length * TD9u; b += TD9u) {
            c[b >> 5] |= (d.charCodeAt(b / TD9u) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cph9Y ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        WF0x = "-";
        bsB6v = "-";
        WH0x = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            WF0x = b.width + "x" + b.height;
            bsB6v = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                WF0x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            WH0x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                WH0x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bPH2x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cEi2x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cpi9Z;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bPO2x;
        bsi6c = escape(a || document.location);
        bPJ2x = escape(m || document.title);
        bPI2x = l === true ? "" : escape(l || document.referrer);
        bPG2x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bsQ6K == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bsQ6K = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bsi6c.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bsQ6K) {
                uE2x = fetch_visitor_hash();
                bPM2x = 1;
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uE2x = h.substr(0, o);
            GI6C = h.substr(o + 1, p - o - 1);
            if (GI6C == 0) {
                GI6C = (new Date).getTime();
                f = true
            }
            if (!uE2x) {
                uE2x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + GI6C);
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
            if (GI6C != 0 && b - GI6C > 365 * 86400 * 1e3) {
                GI6C = 0;
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        KG7z = c("P_INFO", "P_OINFO");
        KG7z = KG7z ? KG7z.substr(0, KG7z.indexOf("|")) : "";
        bPK2x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uE2x, "&_nvtm=", cpt9k, "&_nvsf=", bPL2x, "&_nvfi=", bPM2x, "&_nlag=", WH0x, "&_nlmf=", bPH2x, "&_nres=", WF0x, "&_nscd=", bsB6v, "&_nstm=", bPK2x, "&_nurl=", bsi6c, "&_ntit=", bPJ2x, "&_nref=", bPI2x, "&_nfla=", bPG2x, "&_nssn=", KG7z, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bPL2x = 0;
        neteaseTracker.callback = null
    }
    bPO2x = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
        var d = {}, l = d.lib = {}, s = function() {}, t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }, r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
            w = d.enc = {}, v = w.Hex = {
                stringify: function(a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var e = [], j = 0; j < a; j++) {
                        var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                        e.push((k >>> 4).toString(16));
                        e.push((k & 15).toString(16))
                    }
                    return e.join("")
                },
                parse: function(a) {
                    for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                    return new r.init(e, c / 2)
                }
            }, b = w.Latin1 = {
                stringify: function(a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                    return e.join("")
                },
                parse: function(a) {
                    for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                    return new r.init(e, c)
                }
            }, x = w.Utf8 = {
                stringify: function(a) {
                    try {
                        return decodeURIComponent(escape(b.stringify(a)))
                    } catch (c) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(a) {
                    return b.parse(unescape(encodeURIComponent(a)))
                }
            }, q = l.BufferedBlockAlgorithm = t.extend({
                reset: function() {
                    this.j4n = new r.init;
                    this.bPA2x = 0
                },
                WM0x: function(a) {
                    "string" == typeof a && (a = x.parse(a));
                    this.j4n.concat(a);
                    this.bPA2x += a.sigBytes
                },
                CC4G: function(a) {
                    var c = this.j4n,
                        e = c.words,
                        j = c.sigBytes,
                        k = this.blockSize,
                        b = j / (4 * k),
                        b = a ? u.ceil(b) : u.max((b | 0) - this.bPE2x, 0);
                    a = b * k;
                    j = u.min(4 * a, j);
                    if (a) {
                        for (var q = 0; q < a; q += k) this.bPz2x(e, q);
                        q = e.splice(0, a);
                        c.sigBytes -= j
                    }
                    return new r.init(q, j)
                },
                clone: function() {
                    var a = t.clone.call(this);
                    a.j4n = this.j4n.clone();
                    return a
                },
                bPE2x: 0
            });
        l.Hasher = q.extend({
            cfg: t.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                q.reset.call(this);
                this.btK6E()
            },
            update: function(a) {
                this.WM0x(a);
                this.CC4G();
                return this
            },
            finalize: function(a) {
                a && this.WM0x(a);
                return this.WV0x()
            },
            blockSize: 16,
            btu6o: function(a) {
                return function(b, e) {
                    return (new a.init(e)).finalize(b)
                }
            },
            coX9O: function(a) {
                return function(b, e) {
                    return (new n.HMAC.init(a, e)).finalize(b)
                }
            }
        });
        var n = d.algo = {};
        return d
    }(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bz5E;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this.bz5E,
                t = s.charAt(64);
            t && (t = d.indexOf(t), - 1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                    b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        },
        bz5E: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        btK6E: function() {
            this.dO6I = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bPz2x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dO6I.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        WV0x: function() {
            var b = this.j4n,
                n = b.words,
                a = 8 * this.bPA2x,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.CC4G();
            b = this.dO6I;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dO6I = this.dO6I.clone();
            return b
        }
    });
    t.MD5 = v.btu6o(r);
    t.HmacMD5 = v.coX9O(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this.btQ7J, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.coU9L, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bPx2x = e;
                this.J4N = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.btK6E()
            },
            process: function(e) {
                this.WM0x(e);
                return this.CC4G()
            },
            finalize: function(e) {
                e && this.WM0x(e);
                return this.WV0x()
            },
            keySize: 4,
            ivSize: 4,
            btQ7J: 1,
            coU9L: 2,
            btu6o: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        WV0x: function() {
            return this.CC4G(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}, x = function(e, a, b) {
        var c = this.bPv2x;
        c ? this.bPv2x = u : c = this.bPt2x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bPs2x = e;
            this.bPv2x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bPs2x,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bPt2x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bPs2x,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bPt2x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bPx2x == this.btQ7J) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bPE2x = 1;
            this.fl6f = c.call(a, this, b && b.words)
        },
        bPz2x: function(a, b) {
            this.fl6f.processBlock(a, b)
        },
        WV0x: function() {
            var a = this.cfg.padding;
            if (this.bPx2x == this.btQ7J) {
                a.pad(this.j4n, this.blockSize);
                var b = this.CC4G(!0)
            } else b = this.CC4G(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        }, a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.bdN3x(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            bdN3x: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        }, c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.bdN3x(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            btK6E: function() {
                for (var a = this.J4N, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cos8k = d + 6) + 1), e = this.coq8i = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
                c = this.cob8T = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this.bPn2x(a, b, this.coq8i, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bPn2x(a, c, this.cob8T, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bPn2x: function(a, b, c, d, e, j, l, f) {
                for (var m = this.cos8k, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.btu6o(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}
function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function() {
    var c4g = NEJ.P,
        em6g = c4g("nej.g"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Tg9X = c4g("nm.x.ek");
    Tg9X.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Tg9X.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c4g = NEJ.P,
        em6g = c4g("nej.g"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Tg9X = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (v4z.bn5s.redefine) return;
    window.GEnc = true;
    var buv7o = function(coa8S) {
        var o4s = [];
        k4o.bd4h(coa8S, function(cnX8P) {
            o4s.push(Tg9X.emj[cnX8P])
        });
        return o4s.join("")
    };
    var cnS8K = v4z.bn5s;
    v4z.bn5s = function(Y4c, e4i) {
        var j4n = {}, e4i = NEJ.X({}, e4i),
            lE9v = Y4c.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y4c) && !(e4i.headers && e4i.headers[em6g.yg3x] == em6g.EK5P) && !e4i.noEnc) {
            if (lE9v != -1) {
                j4n = k4o.hv7o(Y4c.substring(lE9v + 1));
                Y4c = Y4c.substring(0, lE9v)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fG7z(e4i.query) ? k4o.hv7o(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fG7z(e4i.data) ? k4o.hv7o(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = v4z.gy7r("__csrf");
            Y4c = Y4c.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            var bPc2x = window.asrsea(JSON.stringify(j4n), buv7o(["流泪", "强"]), buv7o(Tg9X.md), buv7o(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.cE5J({
                params: bPc2x.encText,
                encSecKey: bPc2x.encSecKey
            })
        }
        cnS8K(Y4c, e4i)
    };
    v4z.bn5s.redefine = true
})();
(function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function() {})();
(function() {})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        dv6p = c4g("nej.p"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        dC6w = c4g("nm.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        m4q = c4g("nm.l"),
        cW5b = c4g("nm.pc"),
        buT7M = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j4n = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, cnO8G = function() {
            if (h4l && h4l.z4D) {
                h4l.dispatchEventalias = h4l.z4D
            }
        };
    cnO8G();
    l4p.bvb7U = function(bN5S) {
        if (!bN5S || bN5S.copyrightId === undefined || !! bN5S.program) return false;
        if (window.GAbroad) {
            bN5S.fee = 0;
            return true
        }
        if (bN5S.status < 0) return true;
        var Tb9S;
        if (typeof GCopyrights !== "undefined") Tb9S = GCopyrights;
        try {
            if (!Tb9S && !! top.GCopyrights) Tb9S = top.GCopyrights
        } catch (e) {}
        if (Tb9S) {
            var r4v = k4o.di6c(Tb9S, bN5S.copyrightId);
            if (r4v >= 0) return true
        }
        return false
    };
    l4p.bvg7Z = function() {
        var CO4S = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            xd3x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            }, cnE8w = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cnD8v = function(J4N, j4n, SY9P) {
            switch (J4N) {
                case "event":
                    j4n = j4n.split("|");
                    return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
                case "searchsong":
                case "searchlyric":
                    var u4y = J4N == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + u4y;
                case "toplist":
                    return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + SY9P;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + SY9P;;
                case "record":
                    j4n = j4n.split("|");
                    return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                    break;
                default:
                    return "/" + J4N + "?id=" + j4n + "&_hash=songlist-" + SY9P
            }
        };
        return function(ea6U, SY9P) {
            if (!ea6U) return null;
            var Kf7Y = ea6U.fid || (ea6U.type != 18 ? ea6U.type : null),
                bvy7r = ea6U.fdata || ea6U.rid,
                bOU1x = ea6U.page || ea6U.fhref;
            var J4N = xd3x[Kf7Y];
            if (!J4N) {
                var xZ3x = (bOU1x || "").match(CO4S);
                if (xZ3x) J4N = xZ3x[1]
            }
            if (!J4N) return null;
            return {
                title: cnE8w[J4N],
                link: !xd3x[Kf7Y] ? bOU1x : cnD8v(J4N, bvy7r, SY9P),
                fid: Kf7Y,
                fdata: bvy7r
            }
        }
    }();
    l4p.Xf0x = function(kg8Y) {
        var dp6j = kg8Y;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp6j = GUser;
        return dp6j
    };
    l4p.gW7P = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.KN7G = function() {
        var CO4S = /#(.*?)$/;
        return function(gx7q) {
            var jA8s = gx7q === false ? location : top.location;
            return CO4S.test(jA8s.href) ? RegExp.$1 : ""
        }
    }();
    l4p.CS5X = function() {
        var CT5Y = a3x.dg6a("audio"),
            cnm8e = CT5Y.canPlayType && CT5Y.canPlayType("audio/mpeg");
        if (cnm8e) return 2;
        var cng8Y = l4p.bwp7i().supported;
        if (cng8Y) return 1;
        return 0
    };
    l4p.bwp7i = function() {
        var gw7p, bws7l = !1,
            bwt7m = "";
        if (dv6p.ds6m.browser == "ie") {
            try {
                gw7p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gw7p = null
            }
            if (gw7p) {
                bws7l = !0;
                bwt7m = gw7p.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gw7p = navigator.plugins["Shockwave Flash"];
                if (gw7p) {
                    bws7l = !0;
                    bwt7m = gw7p.description
                }
            }
        }
        return {
            supported: bws7l,
            version: bwt7m
        }
    };
    l4p.ru0x = function() {
        return "网易云音乐"
    };
    l4p.cnf8X = function() {
        return j4n
    };
    l4p.bOK1x = function(cG5L) {
        var C4G = j4n[cG5L];
        return C4G == null ? "" : buT7M.replace("{ID}", C4G)
    };
    l4p.xj3x = function(bo5t, dY6S, CU5Z) {
        if (!bo5t) return "";
        if ( !! CU5Z) {
            bo5t = l4p.cnb8T(bo5t)
        }
        return l4p.Xj0x(l4p.cna8S(bo5t, dY6S))
    };
    l4p.Xq0x = function() {
        var TU9L = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, beV3x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cmZ8R = {
            r: /\<|\>|\<|\>|\&|\'|\"/g,
            "<": "<",
            ">": ">",
            "&": "&",
            " ": " ",
            '"': """,
            "'": "'",
            "<": "<",
            ">": ">"
        }, cmY8Q = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cmT8L = function(dH6B, bfr3x) {
            dH6B = KT7M(dH6B);
            if ( !! bfr3x) {
                dH6B = dH6B.replace(TU9L.MLINE, "\n\n").replace(TU9L.LING, "</br>")
            }
            dH6B = l4p.Xj0x(dH6B);
            return dH6B
        };
        var KT7M = function(bo5t) {
            return k4o.Fl5q(cmZ8R, bo5t)
        };
        return function(dH6B, e4i, dB6v) {
            e4i = e4i || {};
            dB6v = dB6v || {};
            dB6v.actHash = {};
            var cmO8G = !! e4i.parseLink,
                cmN8F = !! e4i.parseAct,
                cmM8E = e4i.linkTpl || beV3x.LINK,
                cmL8D = e4i.atTpl || beV3x.AT,
                cmK8C = e4i.atUrl || "/user/home?nickname=",
                cmI8A = e4i.actTpl || beV3x.ACT,
                bfr3x = !! e4i.keepSpace,
                bfJ3x = e4i.linkKlass || "s-fc7";
            cEK2x = e4i.actBiJson || "";
            if (!dH6B) return "";
            dH6B = dH6B.trim().replace(/&/g, "&").replace(/ /g, " ");
            var lF9w = cmY8Q[cmO8G + 2 * cmN8F],
                dh6b = TU9L[lF9w],
                br5w = null,
                mc9T = null,
                gt7m = 0,
                cEL2x = "",
                cEM2x = "";
            var pS0x = [];
            dh6b.lastIndex = 0;
            while (br5w = dh6b.exec(dH6B)) {
                var dN6H = {
                    html: "",
                    before: br5w.index - 1,
                    after: br5w.index + br5w[0].length
                };
                if (br5w[1]) {
                    var mc9T = br5w[2].replace(/[^\x00-\xff]/g, "**");
                    if (mc9T.length < 4 || mc9T.length > 32) {} else {
                        var Ea5f = a3x.es6m(cmL8D);
                        dN6H.html = a3x.bZ5e(Ea5f, {
                            value: KT7M(br5w[2]),
                            url: encodeURI(cmK8C + br5w[2]),
                            klass: bfJ3x
                        });
                        pS0x.push(dN6H)
                    }
                } else if (br5w.length > 8 && br5w[4]) {
                    var Ea5f = a3x.es6m(cmM8E);
                    dN6H.html = a3x.bZ5e(Ea5f, {
                        value: KT7M(br5w[4]),
                        url: br5w[4],
                        klass: bfJ3x
                    });
                    pS0x.push(dN6H)
                } else {
                    var bOB1x = lF9w == "ACT_NOLINK" ? 4 : 9;
                    var Ea5f = a3x.es6m(cmI8A);
                    dN6H.html = a3x.bZ5e(Ea5f, {
                        value: KT7M(br5w[bOB1x]),
                        klass: bfJ3x
                    });
                    pS0x.push(dN6H);
                    dB6v.actHash[br5w[bOB1x].slice(1, - 1)] = true
                }
            }
            var bgd3x = pS0x.length,
                kg8Y = {
                    before: dH6B.length - 1,
                    after: 0
                }, bge3x = "";
            for (var i = 0; i <= bgd3x; i++) {
                var hz7s, fR7K;
                hz7s = (pS0x[i - 1] || kg8Y).after;
                fR7K = (pS0x[i] || kg8Y).before;
                if (fR7K >= hz7s && hz7s >= 0 && fR7K <= dH6B.length - 1) {
                    bge3x += cmT8L(dH6B.substring(hz7s, fR7K + 1), bfr3x)
                }
                if (pS0x[i]) {
                    bge3x += pS0x[i].html
                }
            }
            return bge3x
        }
    }();
    l4p.cnb8T = function() {
        var dh6b = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bo5t) {
            return (bo5t || "").replace(/&/g, "&").replace(/ /g, " ").replace(dh6b, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.cna8S = function() {
        var dh6b = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var et6n = function(mc9T, dY6S) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(mc9T) + '" class="' + (dY6S || "") + '">@' + mc9T + "</a>"
        };
        return function(bo5t, dY6S) {
            return (bo5t || "").replace(dh6b, function($0, $1) {
                return et6n($1, dY6S)
            })
        }
    }();
    l4p.Xj0x = function() {
        var dh6b = /\[(.*?)\]/g;
        return function(bo5t) {
            return (bo5t || "").replace(dh6b, function($1, $2) {
                var Y4c = l4p.bOK1x($2);
                return !Y4c ? $1 : '<img src="' + Y4c + '"/>'
            })
        }
    }();
    l4p.Bd4h = function(F4J, dY6S) {
        a3x.bE5J(F4J, dY6S) ? a3x.x4B(F4J, dY6S) : a3x.y4C(F4J, dY6S)
    };
    l4p.KW7P = function(cN5S, kN8F) {
        cN5S = a3x.B4F(cN5S);
        kN8F = a3x.B4F(kN8F);
        if (!cN5S || !kN8F) return !1;
        for (kN8F = kN8F.parentNode; !! kN8F && kN8F != cN5S; kN8F = kN8F.parentNode);
        return kN8F == cN5S
    };
    l4p.lg8Y = function() {
        var bOA1x = function(gR7K) {
            return (gR7K < 10 ? "0" : "") + gR7K
        };
        return function(kO8G) {
            kO8G = parseInt(kO8G) || 0;
            if (!kO8G) return "00:00";
            var yb3x = Math.floor(kO8G % 60),
                cme8W = Math.floor(kO8G / 60);
            return bOA1x(cme8W) + ":" + bOA1x(yb3x)
        }
    }();
    l4p.zw4A = function(fO7H, xr3x) {
        if (!fO7H || fO7H.length == 0) return "";
        xr3x = xr3x || "/";
        var br5w = [];
        for (var i = fO7H.length - 1; i >= 0; i--) {
            br5w.unshift(fO7H[i].name)
        }
        return br5w.join(xr3x)
    };
    l4p.rV0x = function() {
        var Sk9b = function(ic7V, dY6S, cN5S, XU1x) {
            var et6n = XU1x ? l4p.bgB3x : k4o.dG6A;
            if (!ic7V || !ic7V.name) return "";
            if (!ic7V.id) return '<span class="' + dY6S + '">' + et6n(ic7V.name) + "</span>";
            return "<a" + (cN5S ? ' target="_blank"' : "") + ' class="' + dY6S + '" href="/artist?id=' + ic7V.id + '" hidefocus="true">' + et6n(ic7V.name) + "</a>"
        };
        return function(fO7H, V4Z, xr3x, cN5S, bOy1x, XU1x) {
            if (!fO7H || !fO7H.length) return "";
            xr3x = xr3x || "/";
            V4Z = V4Z || "";
            Lc7V = "";
            var el6f = [];
            for (var i = 0, i4m = [], tf1x = [], fH7A; i < fO7H.length; ++i) {
                el6f.push(fO7H[i].name);
                if (!fO7H[i] || fO7H[i].id <= 0) {
                    tf1x.push(fO7H[i]);
                    continue
                }
                if (k4o.gG7z(V4Z)) {
                    fH7A = V4Z(fO7H[i])
                } else {
                    fH7A = Sk9b(fO7H[i], V4Z, cN5S, XU1x)
                }
                if (fH7A && bOy1x && fO7H[i].tns && fO7H[i].tns.length > 0) {
                    Lc7V = k4o.dG6A(fO7H[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + Lc7V + '"> - (' + Lc7V + ")</span>"
                } !! fH7A && i4m.push(fH7A)
            }
            for (var i = 0, fH7A; i < tf1x.length; ++i) {
                if (k4o.gG7z(V4Z)) {
                    fH7A = V4Z(tf1x[i])
                } else {
                    fH7A = Sk9b(tf1x[i], V4Z, cN5S, XU1x)
                }
                if (fH7A && bOy1x && tf1x[i].tns && tf1x[i].tns.length > 0) {
                    Lc7V = k4o.dG6A(tf1x[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + Lc7V + '"> - (' + Lc7V + ")</span>"
                } !! fH7A && i4m.push(fH7A)
            }
            return '<span title="' + el6f.join(xr3x) + '">' + i4m.join(xr3x) + "</span>"
        }
    }();
    l4p.xS3x = function(fz7s, pv0x) {
        pv0x = pv0x || "86";
        return !!fz7s && (pv0x == "86" ? /^\d{11}$/ : /^\d+$/).test(fz7s)
    };
    l4p.cEN2x = function(fz7s) {
        if (!l4p.xS3x(fz7s)) return fz7s;
        return fz7s.substring(0, 3) + "****" + fz7s.substr(7)
    };
    l4p.jL8D = function() {
        var dh6b = /^\s+$/g;
        return function(ib7U) {
            return !ib7U || dh6b.test(ib7U)
        }
    }();
    l4p.Sh9Y = function() {
        var bhm3x = /[^\x00-\xfff]/g;
        return function(ib7U) {
            var clW8O = ib7U.match(bhm3x) || [],
                dr6l = clW8O.length;
            return ib7U.length + dr6l
        }
    }();
    l4p.CZ5e = function() {
        var bhm3x = /[^\x00-\xfff]/;
        return function(ib7U, eE6y) {
            for (var i = 0, len = ib7U.length; i < len && eE6y > 0; i++) {
                if (bhm3x.test(ib7U.charAt(i))) {
                    eE6y -= 2;
                    if (eE6y < 0) {
                        break
                    }
                } else {
                    eE6y -= 1
                }
            }
            return ib7U.substring(0, i)
        }
    }();
    l4p.Dc5h = function(ib7U, eE6y, Tf9W) {
        eE6y = eE6y || 10;
        Tf9W = Tf9W || nej.p.ds6m.engine == "trident" && parseInt(nej.p.ds6m.release) < 5;
        if (Tf9W && l4p.Sh9Y(ib7U) > eE6y) {
            return l4p.CZ5e(ib7U, eE6y) + "..."
        } else {
            return ib7U
        }
    };
    l4p.bOj1x = function(f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (f4j.type || f4j.href || ~f4j.tabIndex)
    };
    l4p.clK8C = function(d4h, cN5S) {
        if (!d4h || !cN5S) return !0;
        var f4j, u4y = d4h.type.toLowerCase();
        if (u4y == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (u4y == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cN5S && !l4p.KW7P(cN5S, f4j)
    };
    l4p.tN2x = function() {
        R4V = {};
        return function(f4j, dZ6T) {
            var C4G = a3x.lv8n(f4j),
                J4N = "hover-" + C4G;
            if (!dZ6T || !C4G || !! R4V[J4N]) return;
            R4V[J4N] = !0;
            h4l.s4w(C4G, "mouseover", function() {
                var bhw3x = a3x.H4L(f4j, "hshow") || [];
                var bhx3x = a3x.H4L(f4j, "icn-dislike") || [];
                a3x.y4C(C4G, "z-hover");
                a3x.ba4e(bhw3x[0], "display", "block");
                a3x.ba4e(bhx3x[0], "display", "block")
            });
            h4l.s4w(C4G, "mouseout", function() {
                var bhw3x = a3x.H4L(f4j, "hshow") || [];
                var bhx3x = a3x.H4L(f4j, "icn-dislike") || [];
                a3x.x4B(C4G, "z-hover");
                a3x.ba4e(bhw3x[0], "display", "none");
                a3x.ba4e(bhx3x[0], "display", "none")
            })
        }
    }();
    l4p.bOf1x = function() {
        var bz5E = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(ib7U) {
            return k4o.Fl5q(bz5E, ib7U)
        }
    }();
    l4p.yI3x = function(bA5F) {
        if (k4o.GY6S(bA5F)) bA5F = bA5F.getTime();
        var eR6L = new Date,
            kj8b = eR6L.getTime() - bA5F;
        if (kj8b <= 6e4) return "刚刚";
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            if (kj8b < 36e5) {
                var EY5d = Math.floor(kj8b / 6e4);
                return EY5d + "分钟前"
            }
            return k4o.if7Y(bA5F, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if7Y(bA5F, "HH:mm")
            } else {
                var gI7B = eR6L.getFullYear(),
                    Se9V = new Date(gI7B, 0, 1);
                var nx9o = eR6L.getTime() - Se9V.getTime();
                if (kj8b < nx9o) {
                    return k4o.if7Y(bA5F, "M月d日 HH:mm")
                }
                return k4o.if7Y(bA5F, "yyyy年M月d日")
            }
        }
    };
    l4p.clD8v = function(bA5F) {
        if (k4o.GY6S(bA5F)) bA5F = bA5F.getTime();
        var eR6L = new Date,
            kj8b = eR6L.getTime() - bA5F;
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            return "今天" + k4o.if7Y(bA5F, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if7Y(bA5F, "HH:mm")
            } else {
                return k4o.if7Y(bA5F, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.clC8u = function(bA5F) {
        if (k4o.GY6S(bA5F)) bA5F = bA5F.getTime();
        var eR6L = new Date,
            kj8b = eR6L.getTime() - bA5F;
        if (kj8b <= 6e4) return "刚刚";
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            if (kj8b < 36e5) {
                var EY5d = Math.floor(kj8b / 6e4);
                return EY5d + "分钟前"
            }
            return k4o.if7Y(bA5F, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if7Y(bA5F, "HH:mm")
            } else if (kj8b < nx9o + 864e5 * 6) {
                var gI7B = eR6L.getFullYear(),
                    Se9V = new Date(gI7B, 0, 1);
                var nx9o = eR6L.getTime() - Se9V.getTime();
                if (kj8b < nx9o) {
                    return k4o.if7Y(bA5F, "M月d日 HH:mm")
                }
                return k4o.if7Y(bA5F, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l4p.XX1x = function() {
        var dh6b = /\{(.*?)\}/gi;
        return function(or9i, j4n) {
            return (or9i || "").replace(dh6b, function($1, $2) {
                var D4H = j4n[$2];
                return D4H == null ? $1 : D4H
            })
        }
    }();
    l4p.fe6Y = function() {
        var bf4j = Array.prototype.slice.call(arguments, 0),
            or9i = bf4j.shift();
        if (or9i) {
            return or9i.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bf4j.length ? bf4j[$2] : $1
            })
        }
        return ""
    };
    l4p.Ld7W = function(i4m, dY6S, kb8T) {
        return "";
        kb8T = kb8T || " - ";
        if (i4m && i4m.length) {
            return kb8T + ( !! dY6S ? '<span class="' + dY6S + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bOe1x = function() {
        if (window.getSelection) {
            var sl1x = window.getSelection();
            if (sl1x && sl1x.focusNode && sl1x.focusNode.tagName) {
                var AY4c = a3x.dk6e(sl1x.focusNode);
                for (var i = 0, zh3x; i < AY4c.length; ++i) {
                    zh3x = AY4c[i].tagName;
                    if (!zh3x) continue;
                    zh3x = zh3x.toLowerCase();
                    if (zh3x == "textarea" || zh3x == "input") return !0
                }
            }
        } else if (document.selection) {
            var db5g = document.selection.createRange();
            if (db5g) {
                var f4j = db5g.parentElement();
                if (f4j && f4j.tagName) {
                    var zh3x = f4j.tagName.toLowerCase();
                    if (zh3x == "textarea" || zh3x == "input") return !0
                }
            }
        }
        return !1
    };
    l4p.Dd5i = function(fE7x) {
        if (/^[A-Z]\:\\/i.test(fE7x)) {
            fE7x = fE7x.split("\\")
        } else {
            fE7x = fE7x.split("/")
        }
        fE7x = fE7x[fE7x.length - 1];
        return fE7x
    };
    l4p.clx8p = function() {
        var Gk5p = [13, 17, 34, 19, 18, 21];
        return function(C4G) {
            var br5w = (C4G || "").split("_");
            return {
                type: Gk5p[br5w[2]] || -1,
                id: br5w[3] || ""
            }
        }
    }();
    l4p.bOb1x = function(gw7p) {
        if (!gw7p) {
            return true
        }
        for (var k in gw7p) {
            return false
        }
        return true
    };
    l4p.biv4z = function(dp6j) {
        if (!dp6j) {
            return ""
        }
        if (4 == dp6j.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp6j.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp6j.expertTags && dp6j.expertTags.length || !l4p.bOb1x(dp6j.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.RY9P = function(hH7A) {
        if (!hH7A) return "";
        var dr6l = hH7A.length,
            ik8c = [];
        ik8c[0] = dr6l / 3 | 0;
        ik8c[1] = ik8c[0] + ((dr6l - ik8c[0]) / 2 | 0);
        return hH7A.substring(0, ik8c[0]) + hH7A.substring(ik8c[0], ik8c[1]).replace(/\d/g, "*") + hH7A.substring(ik8c[1], dr6l)
    };
    l4p.cEO2x = function(r4v, cy5D) {
        return (r4v % cy5D + cy5D) % cy5D
    };
    l4p.biG4K = function() {
        var Gk5p = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C4G) {
            var br5w = (C4G || "").split("_"),
                o4s = {
                    type: Gk5p[br5w[2]] || -1,
                    id: br5w[3] || ""
                };
            if (o4s.type == "event") {
                o4s.uid = br5w[4] || "";
                return "/" + o4s.type + "?id=" + o4s.id + "&uid=" + o4s.uid
            }
            return "/" + o4s.type + "?id=" + o4s.id
        }
    }();
    l4p.biJ4N = function() {
        var Gk5p = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C4G) {
            var br5w = (C4G || "").split("_");
            return Gk5p[br5w[2]] || "资源"
        }
    }();
    l4p.clu8m = function(bv5A) {
        var qs = bv5A.length > 0 ? bv5A.substring(1) : "",
            args = {}, items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.biM4Q = function(nD9u, RU9L) {
        var Yj1x = 0,
            ex6r = new Array;
        k4o.bd4h(nD9u, function(Y4c, r4v) {
            var cw5B = a3x.dg6a("img");
            cw5B.src = Y4c;
            h4l.s4w(cw5B, "load", function(r4v, d4h) {
                ex6r[r4v] = 1;
                Yj1x++;
                if (Yj1x == nD9u.length) RU9L(nD9u, ex6r)
            }.g4k(this, r4v));
            h4l.s4w(cw5B, "error", function(d4h, r4v) {
                ex6r[r4v] = 0;
                Yj1x++;
                if (Yj1x == nD9u.length) RU9L(nD9u, ex6r)
            }.g4k(this, r4v))
        })
    };
    l4p.Lj7c = function(i4m, dV6P) {
        var o4s = [];
        k4o.bd4h(i4m, function(p4t, r4v, P4T) {
            o4s.push(dV6P(p4t, r4v, P4T))
        });
        return o4s
    };
    l4p.YY1x = function(i4m, dV6P, P4T) {
        var o4s = [];
        k4o.bd4h(i4m, function(p4t, r4v) {
            if (dV6P.call(P4T, p4t, r4v, i4m)) {
                o4s.push(p4t)
            }
        });
        return o4s
    };
    l4p.bOa1x = function(bo5t) {
        return k4o.dG6A((bo5t || "").replace(/\s{2,}/g, " ").trim())
    };
    l4p.biV4Z = function(bj4n) {
        if (bj4n.transNames && bj4n.transNames.length) {
            return bj4n.transNames[0]
        } else if (bj4n.alias && bj4n.alias.length) {
            return bj4n.alias[0]
        }
    };
    l4p.biZ4d = function(Uo0x) {
        if (Uo0x) {
            return Uo0x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.bjb4f = function(f4j) {
        var f4j = a3x.B4F(f4j),
            cG5L = f4j && f4j.getElementsByTagName("textarea")[0],
            J4N = a3x.t4x(f4j, "key"),
            bjd4h = a3x.t4x(f4j, "simple") == "1",
            clr8j = a3x.t4x(f4j, "pvnamed") == "1",
            clo8g = q4u.xc3x.gr7k();
        if (!(f4j && cG5L && J4N)) return;
        var YE1x, bjm4q, YM1x;
        YE1x = a3x.H4L(a3x.B4F("m-playlist"), "j-img");
        k4o.bd4h(YE1x, function(iT8L) {
            if (!YM1x && a3x.t4x(iT8L, "key")) {
                YM1x = a3x.t4x(iT8L, "key");
                iT8L.removeAttribute("data-key")
            }
        });
        YE1x = a3x.H4L(a3x.B4F("m-playlist"), "m-info");
        k4o.bd4h(YE1x, function(iT8L) {
            if (!bjm4q && iT8L.id && iT8L.id.indexOf("auto-id-") == 0) {
                bjm4q = iT8L.id.slice(8, 12)
            }
        });
        var D4H = cG5L.value || cG5L.defaultValue;
        if (YM1x) {
            D4H = decodeURIComponent(k4o.cln8f(D4H, "param=" + bjm4q + YM1x))
        }
        D4H = JSON.parse(D4H);
        if (clr8j) {
            l4p.clm8e(D4H)
        }
        if (bjd4h) {
            D4H = l4p.Fd5i(D4H)
        }
        clo8g.uu2x(J4N, D4H);
        f4j.innerHTML = "";
        return J4N
    };
    l4p.clk8c = function(qf0x) {
        if (!qf0x.onbeforelistload) {
            qf0x.onbeforelistload = function(d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qf0x.onemptylist) {
            qf0x.onemptylist = function(d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qf0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qf0x
    };
    l4p.clm8e = function(hw7p) {
        k4o.bd4h(hw7p, function(bN5S) {
            bN5S.privilege = bN5S.pv;
            delete bN5S.pv
        })
    };
    l4p.Fd5i = function(il8d) {
        if (k4o.eJ6D(il8d)) {
            var dB6v = [];
            k4o.bd4h(il8d, function(bjd4h) {
                dB6v.push(bNX1x(bjd4h))
            });
            return dB6v
        } else {
            return bNX1x(il8d)
        }
        function bNX1x(il8d) {
            if (!il8d) return null;
            var dB6v = {
                album: il8d.al,
                alias: il8d.alia || il8d.ala || [],
                artists: il8d.ar || [],
                commentThreadId: "R_SO_4_" + il8d.id,
                copyrightId: il8d.cp || 0,
                duration: il8d.dt || 0,
                id: il8d.id,
                mvid: il8d.mv || 0,
                name: il8d.name || "",
                cd: il8d.cd,
                position: il8d.no || 0,
                ringtone: il8d.rt,
                rtUrl: il8d.rtUrl,
                status: il8d.st || 0,
                pstatus: il8d.pst || 0,
                fee: il8d.fee || 0,
                version: il8d.v || 0,
                eq: il8d.eq,
                songType: il8d.t || 0,
                mst: il8d.mst,
                score: il8d.pop || 0,
                ftype: il8d.ftype,
                rtUrls: il8d.rtUrls,
                transNames: il8d.tns,
                privilege: il8d.privilege,
                lyrics: il8d.lyrics
            };
            return dB6v
        }
    };
    l4p.cEP2x = function() {
        var f4j = a3x.nH9y('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.s4w(f4j, "click", function(d4h) {
            h4l.bh4l(d4h);
            a3x.cJ5O(f4j)
        })
    };
    l4p.iA8s = function(cF5K) {
        if (cF5K < 1e5) {
            return cF5K
        } else if (cF5K < 1e8) {
            return Math.floor(cF5K / 1e3) / 10 + "万"
        } else {
            return Math.floor(cF5K / 1e7) / 10 + "亿"
        }
    };
    l4p.uC2x = function(cF5K, cG5L) {
        return "<i>" + (cF5K ? "(" + cF5K + ")" : cG5L) + "</i>"
    };
    l4p.bNV1x = function(u4y, hW7P) {
        var e4i = {};
        if (!k4o.lw8o(hW7P)) {
            return e4i
        }
        switch (parseInt(u4y)) {
            case 17:
                e4i.title = hW7P.name;
                e4i.author = (hW7P.radio || []).name;
                e4i.picUrl = hW7P.coverUrl;
                e4i.category = hW7P.radio.category;
                break;
            case 19:
                e4i.title = hW7P.name;
                e4i.author = l4p.zw4A(hW7P.artists);
                e4i.authors = l4p.zw4A(hW7P.artists, " / ");
                e4i.picUrl = hW7P.picUrl;
                break;
            case 13:
                e4i.title = hW7P.name;
                e4i.author = (hW7P.creator || []).nickname;
                e4i.picUrl = hW7P.coverImgUrl;
                break;
            case 18:
                e4i.title = hW7P.name;
                e4i.author = l4p.zw4A(hW7P.artists);
                e4i.picUrl = (hW7P.album || []).picUrl;
                break;
            case 20:
                e4i.title = hW7P.name;
                e4i.author = "";
                e4i.picUrl = hW7P.img1v1Url;
                break;
            case 21:
                e4i.title = hW7P.name;
                e4i.author = hW7P.artistName;
                e4i.authors = l4p.zw4A(hW7P.artists, " / ");
                e4i.picUrl = hW7P.newCover || hW7P.cover;
                break;
            case 70:
                e4i.title = hW7P.name;
                e4i.author = (hW7P.dj || []).nickname;
                e4i.picUrl = hW7P.picUrl;
                e4i.category = hW7P.category;
                break;
            default:
                break
        }
        return e4i
    };
    l4p.bNR1x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.YU1x = function(et6n, nG9x, e4i) {
        var bJ5O, bf4j, o4s;
        var gO7H = null;
        var uY2x = 0;
        if (!e4i) e4i = {};
        var zY4c = function() {
            uY2x = e4i.leading === false ? 0 : +(new Date);
            gO7H = null;
            o4s = et6n.apply(bJ5O, bf4j);
            if (!gO7H) bJ5O = bf4j = null
        };
        return function() {
            var eR6L = +(new Date);
            if (!uY2x && e4i.leading === false) uY2x = eR6L;
            var Gs6m = nG9x - (eR6L - uY2x);
            bJ5O = this;
            bf4j = arguments;
            if (Gs6m <= 0 || Gs6m > nG9x) {
                if (gO7H) {
                    clearTimeout(gO7H);
                    gO7H = null
                }
                uY2x = eR6L;
                o4s = et6n.apply(bJ5O, bf4j);
                if (!gO7H) bJ5O = bf4j = null
            } else if (!gO7H && e4i.trailing !== false) {
                gO7H = setTimeout(zY4c, Gs6m)
            }
            return o4s
        }
    };
    l4p.Lp7i = function(et6n, nG9x, op9g) {
        var gO7H, bf4j, bJ5O, CR5W, o4s;
        var zY4c = function() {
            var gt7m = new Date - CR5W;
            if (gt7m < nG9x && gt7m >= 0) {
                gO7H = setTimeout(zY4c, nG9x - gt7m)
            } else {
                gO7H = null;
                if (!op9g) {
                    o4s = et6n.apply(bJ5O, bf4j);
                    if (!gO7H) bJ5O = bf4j = null
                }
            }
        };
        return function() {
            bJ5O = this;
            bf4j = arguments;
            CR5W = new Date;
            var Ro9f = op9g && !gO7H;
            if (!gO7H) gO7H = setTimeout(zY4c, nG9x);
            if (Ro9f) {
                o4s = et6n.apply(bJ5O, bf4j);
                bJ5O = bf4j = null
            }
            return o4s
        }
    };
    l4p.Rn9e = function(f4j, hn7g) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + hn7g)
            }
        }
    };
    l4p.bNP1x = function(el6f) {
        if (!el6f || !el6f.length) {
            return
        }
        el6f = /^#(.+?)#$/.exec(el6f)[1];
        el6f = el6f.replace(/\s/g, " ");
        v4z.bn5s("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cE5J({
                actname: el6f
            }),
            onload: function(Q4U) {
                if (!Q4U || Q4U.code != 200 || !Q4U.act) {
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q4U.act.actId)
                }
            },
            onerror: function(cb5g) {
                m4q.Z4d.L4P({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l4p.ckP8H = function(el6f) {
        if (!el6f || !el6f.length) {
            return
        }
        var Rl9c = location.host;
        el6f = /^#(.+?)#$/.exec(el6f)[1];
        el6f = el6f.replace(/\s/g, " ");
        v4z.bn5s("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cE5J({
                actname: el6f
            }),
            onload: function(Q4U) {
                if (!Q4U || Q4U.code != 200 || !Q4U.act) {
                    cW5b.jv8n("该话题暂未创建")
                } else {
                    cW5b.Cr4v(Rl9c + "/activity?id=" + Q4U.act.actId)
                }
            },
            onerror: function(cb5g) {
                cW5b.jv8n("操作失败，请稍后再试")
            }
        })
    };
    l4p.bkt4x = function(yC3x, rn0x) {
        if (!yC3x || !rn0x) return false;
        if (yC3x == rn0x) return true;
        return l4p.bkt4x(yC3x, rn0x.parentNode)
    };
    a3x.cC5H = function(bI5N, jb8T) {
        if (!bI5N) return null;
        if (!jb8T) return bI5N.firstChild;
        return a3x.H4L(bI5N, jb8T)[0]
    };
    l4p.bNN1x = function(ib7U) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ib7U)
    };
    l4p.bNM1x = function(ib7U, Ri9Z) {
        Ri9Z = Ri9Z || "86";
        if (Ri9Z == "86") return /^\d{11}$/.test(ib7U);
        return /^\d+$/.test(ib7U)
    };
    l4p.cES2x = function(tQ2x) {
        if (!tQ2x) {
            return "0b"
        }
        var ckF8x = ["Bytes", "KB", "MB", "GB"];
        var bc4g = Math.floor(Math.log(tQ2x) / Math.log(1024));
        return (tQ2x / Math.pow(1024, Math.floor(bc4g))).toFixed(bc4g == 1 ? 0 : 1) + ckF8x[bc4g]
    };
    l4p.bNI1x = function(dH6B, fo6i, ckB8t) {
        if (!dH6B) return dH6B;
        var dr6l = k4o.fy6s(dH6B);
        if (dr6l <= fo6i) return dH6B;
        var bkP4T = dr6l - dH6B.length,
            bkR4V = dH6B.length - bkP4T;
        var fF7y = Math.ceil(fo6i / 2),
            ckx8p = fo6i,
            bNF1x = 0;
        if (bkP4T < fF7y) fF7y = fo6i - bkP4T;
        if (bkR4V < fo6i) fo6i = bkR4V + Math.ceil((fo6i - bkR4V) / 2);
        while (fF7y <= fo6i) {
            bNF1x = k4o.fy6s(dH6B.substr(0, fF7y));
            var bkW4a = ckx8p - bNF1x;
            if (bkW4a == 0) break;
            if (bkW4a == 1) {
                var ckt8l = k4o.fy6s(dH6B.charAt(fF7y));
                if (ckt8l == 1) {
                    fF7y++;
                    break
                } else {
                    break
                }
            }
            fF7y += Math.floor(bkW4a / 2)
        }
        return dH6B.substr(0, fF7y) + ( !! ckB8t ? "" : "...")
    };
    l4p.ckp8h = function(bq5v) {
        bq5v = bq5v || 10;
        var cI5N = "";
        for (var i = 0; i < bq5v; i++) {
            cI5N += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cI5N
    };
    var cke7X = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        ckd7W = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        ckc7V = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bNA1x = function(cjT7M) {
        var bq5v = k4o.Ad4h(1, 5),
            cjP7I = Math.random() < .5,
            iN8F = "";
        if (cjT7M) {
            if (cjP7I) {
                while (bq5v >= 0) {
                    iN8F += ckc7V[k4o.Ad4h(0, 500)];
                    bq5v--
                }
            } else {
                iN8F = l4p.ckp8h(bq5v)
            }
        } else {
            iN8F = k4o.Oe8W(bq5v)
        }
        return '<div class="soil">' + iN8F + "</div>"
    };
    l4p.bgB3x = function(ep6j) {
        ep6j = k4o.Ay4C(ep6j);
        try {
            var bq5v = ep6j.length,
                r4v = k4o.Ad4h(1, bq5v - 1);
            while (r4v < bq5v) {
                if (ckd7W.test(ep6j.charAt(r4v))) {
                    return k4o.dG6A(ep6j.slice(0, r4v)) + bNA1x(true) + k4o.dG6A(ep6j.slice(r4v))
                } else if (cke7X.test(ep6j.charAt(r4v))) {
                    return k4o.dG6A(ep6j.slice(0, r4v)) + bNA1x() + k4o.dG6A(ep6j.slice(r4v))
                } else {
                    r4v++
                }
            }
            return k4o.dG6A(ep6j)
        } catch (e) {
            return k4o.dG6A(ep6j)
        }
    };
    l4p.ZK1x = function(lo8g, mO9F) {
        return "//nos.netease.com/" + lo8g + "/" + mO9F
    };
    l4p.cjM7F = function(fE7x) {
        var dN6H = /(.+)(\.[^\.]+$)/.exec(fE7x);
        return dN6H ? {
            filename: dN6H[1],
            suffix: dN6H[2]
        } : {
            filename: fE7x || "",
            suffix: ""
        }
    };
    l4p.bNu1x = function(br5w, cjH7A) {
        var dB6v = [];
        k4o.bd4h(br5w, function(id7W) {
            dB6v.push(cjH7A(id7W))
        });
        return dB6v
    };
    var cjD7w = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l4p.bNs1x = function(yF3x) {
        var j4n = NEJ.X({}, yF3x);
        k4o.eC6w(yF3x, function(p4t, J4N) {
            var bNr1x = cjD7w[J4N];
            if (bNr1x) {
                j4n[bNr1x] = p4t
            }
        });
        var QV9M = yF3x.creator || [];
        if (!k4o.eJ6D(QV9M)) {
            QV9M = [QV9M]
        }
        if (QV9M) {
            j4n.artists = [];
            k4o.bd4h(QV9M, function(p4t) {
                j4n.artists.push({
                    name: p4t.nickname || p4t.userName,
                    id: p4t.userId
                })
            })
        }
        if ( !! yF3x.aliaName) {
            j4n.alias = [yF3x.aliaName]
        }
        if ( !! yF3x.transName) {
            j4n.transNames = [yF3x.transName]
        }
        return j4n
    };
    l4p.cjx7q = function(Y4c) {
        return (Y4c || "").replace(/^https?:/, "")
    };
    l4p.EH5M = function(cI5N) {
        if (!k4o.fG7z(cI5N)) return cI5N;
        var dB6v = null;
        try {
            dB6v = JSON.parse(cI5N)
        } catch (_e) {}
        return dB6v
    };
    var cjw7p = '<span class="s-fc7 f-tdn">${value}</span>';
    l4p.cjv7o = function(cG5L, sG1x, e4i) {
        e4i = e4i || {};
        if (!sG1x) {
            return k4o.dG6A(cG5L)
        }
        cG5L = k4o.Ay4C(cG5L);
        var pS0x = [],
            br5w = null,
            Ny8q = new RegExp(l4p.bOf1x(sG1x), "gi"),
            or9i = e4i.tpl || cjw7p;
        while (br5w = Ny8q.exec(cG5L)) {
            var dN6H = {
                html: "",
                before: br5w.index - 1,
                after: br5w.index + br5w[0].length
            };
            var Ea5f = a3x.es6m(or9i);
            dN6H.html = a3x.bZ5e(Ea5f, {
                value: k4o.dG6A(br5w[0])
            });
            pS0x.push(dN6H)
        }
        var bgd3x = pS0x.length,
            kg8Y = {
                before: cG5L.length - 1,
                after: 0
            }, dB6v = "";
        for (var i = 0; i <= bgd3x; i++) {
            var hz7s, fR7K;
            hz7s = (pS0x[i - 1] || kg8Y).after;
            fR7K = (pS0x[i] || kg8Y).before;
            if (fR7K >= hz7s && hz7s >= 0 && fR7K <= cG5L.length - 1) {
                dB6v += k4o.dG6A(cG5L.substring(hz7s, fR7K + 1))
            }
            if (pS0x[i]) {
                dB6v += pS0x[i].html
            }
        }
        return dB6v
    }
})();
(function() {
    var k4o = NEJ.P("nej.u");

    function cjt7m() {
        var Cy4C = function(jr8j) {
            if (jr8j < -128) {
                return Cy4C(128 - (-128 - jr8j))
            } else if (jr8j >= -128 && jr8j <= 127) {
                return jr8j
            } else if (jr8j > 127) {
                return Cy4C(-129 + jr8j - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cjr7k = function(jr8j, bi4m) {
            return Cy4C(jr8j + bi4m)
        };
        var cjl7e = function(ZP1x, bmg5l) {
            if (ZP1x == null) {
                return null
            }
            if (bmg5l == null) {
                return ZP1x
            }
            var qK0x = [];
            var cjh7a = bmg5l.length;
            for (var i = 0, bq5v = ZP1x.length; i < bq5v; i++) {
                qK0x[i] = cjr7k(ZP1x[i], bmg5l[i % cjh7a])
            }
            return qK0x
        };
        var cjd7W = function(ZT1x) {
            if (ZT1x == null) {
                return ZT1x
            }
            var qK0x = [];
            var cjc7V = ZT1x.length;
            for (var i = 0, bq5v = cjc7V; i < bq5v; i++) {
                qK0x[i] = Cy4C(0 - ZT1x[i])
            }
            return qK0x
        };
        var cjb7U = function(bmE5J, QM9D) {
            bmE5J = Cy4C(bmE5J);
            QM9D = Cy4C(QM9D);
            return Cy4C(bmE5J ^ QM9D)
        };
        var bNl1x = function(QL9C, bmT5Y) {
            if (QL9C == null || bmT5Y == null || QL9C.length != bmT5Y.length) {
                return QL9C
            }
            var qK0x = [];
            var ciX7Q = QL9C.length;
            for (var i = 0, bq5v = ciX7Q; i < bq5v; i++) {
                qK0x[i] = cjb7U(QL9C[i], bmT5Y[i])
            }
            return qK0x
        };
        var bNk1x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ciV7O = function(dv6p) {
            var Lz7s = [];
            Lz7s.push(bNk1x[dv6p >>> 4 & 15]);
            Lz7s.push(bNk1x[dv6p & 15]);
            return Lz7s.join("")
        };
        var bNh1x = function(tQ2x) {
            var bq5v = tQ2x.length;
            if (tQ2x == null || bq5v < 0) {
                return new String("")
            }
            var Lz7s = [];
            for (var i = 0; i < bq5v; i++) {
                Lz7s.push(ciV7O(tQ2x[i]))
            }
            return Lz7s.join("")
        };
        var bNg1x = function(ZW1x) {
            if (ZW1x == null || ZW1x.length == 0) {
                return ZW1x
            }
            var bng5l = new String(ZW1x);
            var qK0x = [];
            var bq5v = bng5l.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bq5v; i++) {
                var oA9r = parseInt(bng5l.charAt(bi4m++), 16) << 4;
                var oD9u = parseInt(bng5l.charAt(bi4m++), 16);
                qK0x[i] = Cy4C(oA9r + oD9u)
            }
            return qK0x
        };
        var bNf1x = function(cI5N) {
            if (cI5N == null || cI5N == undefined) {
                return cI5N
            }
            var QE8w = encodeURIComponent(cI5N);
            var tQ2x = [];
            var bNe1x = QE8w.length;
            for (var i = 0; i < bNe1x; i++) {
                if (QE8w.charAt(i) == "%") {
                    if (i + 2 < bNe1x) {
                        tQ2x.push(bNg1x(QE8w.charAt(++i) + "" + QE8w.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tQ2x.push(QE8w.charCodeAt(i))
                }
            }
            return tQ2x
        };
        var ciJ7C = function(xa3x) {
            var bc4g = 0;
            bc4g += (xa3x[0] & 255) << 24;
            bc4g += (xa3x[1] & 255) << 16;
            bc4g += (xa3x[2] & 255) << 8;
            bc4g += xa3x[3] & 255;
            return bc4g
        };
        var cEW2x = function(bc4g) {
            var xa3x = [];
            xa3x[0] = bc4g >>> 24 & 255;
            xa3x[1] = bc4g >>> 16 & 255;
            xa3x[2] = bc4g >>> 8 & 255;
            xa3x[3] = bc4g & 255;
            return xa3x
        };
        var ciH7A = function(cS5X, bnx5C, bq5v) {
            var dB6v = [];
            if (cS5X == null || cS5X.length == 0) {
                return dB6v
            }
            if (cS5X.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                dB6v[i] = cS5X[bnx5C + i]
            }
            return dB6v
        };
        var bny5D = function(cS5X, bnx5C, rs0x, ciG7z, bq5v) {
            if (cS5X == null || cS5X.length == 0) {
                return rs0x
            }
            if (rs0x == null) {
                throw new Error("1004")
            }
            if (cS5X.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                rs0x[ciG7z + i] = cS5X[bnx5C + i]
            }
            return rs0x
        };
        var ciF7y = function(bq5v) {
            var br5w = [];
            for (var i = 0; i < bq5v; i++) {
                br5w[i] = 0
            }
            return br5w
        };
        var ciE7x = [82, 9, 106, - 43, 48, 54, - 91, 56, - 65, 64, - 93, - 98, - 127, - 13, - 41, - 5, 124, - 29, 57, - 126, - 101, 47, - 1, - 121, 52, - 114, 67, 68, - 60, - 34, - 23, - 53, 84, 123, - 108, 50, - 90, - 62, 35, 61, - 18, 76, - 107, 11, 66, - 6, - 61, 78, 8, 46, - 95, 102, 40, - 39, 36, - 78, 118, 91, - 94, 73, 109, - 117, - 47, 37, 114, - 8, - 10, 100, - 122, 104, - 104, 22, - 44, - 92, 92, - 52, 93, 101, - 74, - 110, 108, 112, 72, 80, - 3, - 19, - 71, - 38, 94, 21, 70, 87, - 89, - 115, - 99, - 124, - 112, - 40, - 85, 0, - 116, - 68, - 45, 10, - 9, - 28, 88, 5, - 72, - 77, 69, 6, - 48, 44, 30, - 113, - 54, 63, 15, 2, - 63, - 81, - 67, 3, 1, 19, - 118, 107, 58, - 111, 17, 65, 79, 103, - 36, - 22, - 105, - 14, - 49, - 50, - 16, - 76, - 26, 115, - 106, - 84, 116, 34, - 25, - 83, 53, - 123, - 30, - 7, 55, - 24, 28, 117, - 33, 110, 71, - 15, 26, 113, 29, 41, - 59, - 119, 111, - 73, 98, 14, - 86, 24, - 66, 27, - 4, 86, 62, 75, - 58, - 46, 121, 32, - 102, - 37, - 64, - 2, 120, - 51, 90, - 12, 31, - 35, - 88, 51, - 120, 7, - 57, 49, - 79, 18, 16, 89, 39, - 128, - 20, 95, 96, 81, 127, - 87, 25, - 75, 74, 13, 45, - 27, 122, - 97, - 109, - 55, - 100, - 17, - 96, - 32, 59, 77, - 82, 42, - 11, - 80, - 56, - 21, - 69, 60, - 125, 83, - 103, 97, 23, 43, 4, 126, - 70, 119, - 42, 38, - 31, 105, 20, 99, 85, 33, 12, 125];
        var LE7x = 64;
        var bal1x = 64;
        var bNd1x = 4;
        var cit7m = function(rf0x) {
            var bMZ1x = [];
            if (rf0x == null || rf0x == undefined || rf0x.length == 0) {
                return ciF7y(bal1x)
            }
            if (rf0x.length >= bal1x) {
                return ciH7A(rf0x, 0, bal1x)
            } else {
                for (var i = 0; i < bal1x; i++) {
                    bMZ1x[i] = rf0x[i % rf0x.length]
                }
            }
            return bMZ1x
        };
        var ciq7j = function(baA2x) {
            if (baA2x == null || baA2x.length % LE7x != 0) {
                throw new Error("1005")
            }
            var bod5i = [];
            var bi4m = 0;
            var cip7i = baA2x.length / LE7x;
            for (var i = 0; i < cip7i; i++) {
                bod5i[i] = [];
                for (var j = 0; j < LE7x; j++) {
                    bod5i[i][j] = baA2x[bi4m++]
                }
            }
            return bod5i
        };
        var cio7h = function(bMX1x) {
            var oA9r = bMX1x >>> 4 & 15;
            var oD9u = bMX1x & 15;
            var bi4m = oA9r * 16 + oD9u;
            return ciE7x[bi4m]
        };
        var bMW1x = function(bou5z) {
            if (bou5z == null) {
                return null
            }
            var bMV1x = [];
            for (var i = 0, bq5v = bou5z.length; i < bq5v; i++) {
                bMV1x[i] = cio7h(bou5z[i])
            }
            return bMV1x
        };
        var bMT1x = function(LL7E, rf0x) {
            if (LL7E == null) {
                return null
            }
            if (LL7E.length == 0) {
                return []
            }
            if (LL7E.length % LE7x != 0) {
                throw new Error("1005")
            }
            rf0x = cit7m(rf0x);
            var boE5J = rf0x;
            var boF5K = ciq7j(LL7E);
            var PZ8R = [];
            var cii7b = boF5K.length;
            for (var i = 0; i < cii7b; i++) {
                var boJ5O = bMW1x(boF5K[i]);
                boJ5O = bMW1x(boJ5O);
                var boK5P = bNl1x(boJ5O, boE5J);
                var cih7a = cjl7e(boK5P, cjd7W(boE5J));
                boK5P = bNl1x(cih7a, rf0x);
                bny5D(boK5P, 0, PZ8R, i * LE7x, LE7x);
                boE5J = boF5K[i]
            }
            var bMR1x = [];
            bny5D(PZ8R, PZ8R.length - bNd1x, bMR1x, 0, bNd1x);
            var bq5v = ciJ7C(bMR1x);
            if (bq5v > PZ8R.length) {
                throw new Error("1006")
            }
            var qK0x = [];
            bny5D(PZ8R, 0, qK0x, 0, bq5v);
            return qK0x
        };
        var chU7N = function(baV2x, J4N) {
            if (baV2x == null) {
                return null
            }
            var bMO1x = new String(baV2x);
            if (bMO1x.length == 0) {
                return []
            }
            var LL7E = bNg1x(bMO1x);
            if (J4N == null || J4N == undefined) {
                throw new Error("1007")
            }
            var rf0x = bNf1x(J4N);
            return bMT1x(LL7E, rf0x)
        };
        this.chS7L = function(baV2x, J4N) {
            var bpn5s = chU7N(baV2x, J4N);
            var Es5x = new String(bNh1x(bpn5s));
            var zL4P = [];
            var bpr5w = Es5x.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bpr5w; i++) {
                zL4P.push("%");
                zL4P.push(Es5x.charAt(bi4m++));
                zL4P.push(Es5x.charAt(bi4m++))
            }
            return zL4P.join("")
        };
        k4o.cln8f = function(bpv5A, J4N) {
            return k4o.chR7K(k4o.cvb0x(bpv5A), J4N)
        };
        k4o.chR7K = function(bpv5A, J4N) {
            var bpn5s = bMT1x(bpv5A, bNf1x(J4N));
            var Es5x = new String(bNh1x(bpn5s));
            var zL4P = [];
            var bpr5w = Es5x.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bpr5w; i++) {
                zL4P.push("%");
                zL4P.push(Es5x.charAt(bi4m++));
                zL4P.push(Es5x.charAt(bi4m++))
            }
            return zL4P.join("")
        }
    }
    window.settmusic = (new cjt7m).chS7L
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        J4N = "Search-tracks_",
        b4f;
    q4u.fe6Y({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q4U) {
                return Q4U
            },
            onerror: function(Q4U, e4i) {
                if (Q4U.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e4i, bg4k) {
                window.log && window.log("searchkeywordclient", {
                    type: this.chQ7J(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            },
            format: function(Q4U, e4i) {
                if (Q4U.abroad) {
                    try {
                        Q4U.result = JSON.parse(decodeURIComponent(settmusic(Q4U.result, q4u.sk)))
                    } catch (e) {}
                }
                Q4U.result = Q4U.result || {};
                var i4m, cy5D, hQ7J = [],
                    pw0x = e4i.data.s || "",
                    gc7V = e4i.data.limit,
                    u4y = parseInt(e4i.data.type) || 1,
                    o4s = Q4U.result;
                switch (u4y) {
                    case 1:
                        i4m = this.bMN1x(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cy5D = o4s.songCount;
                        break;
                    case 10:
                        i4m = o4s.albums;
                        cy5D = o4s.albumCount;
                        break;
                    case 100:
                        i4m = o4s.artists;
                        cy5D = o4s.artistCount;
                        break;
                    case 1e3:
                        i4m = o4s.playlists;
                        cy5D = o4s.playlistCount;
                        break;
                    case 1002:
                        i4m = o4s.userprofiles;
                        cy5D = o4s.userprofileCount;
                        break;
                    case 1004:
                        i4m = o4s.mvs;
                        cy5D = o4s.mvCount;
                        break;
                    case 1014:
                        i4m = l4p.bNu1x(o4s.videos, l4p.bNs1x);
                        cy5D = o4s.videoCount;
                        break;
                    case 1006:
                        i4m = this.bMN1x(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cy5D = o4s.songCount;
                        break;
                    case 1009:
                        var qT0x = o4s.djRadios;
                        if ( !! qT0x) {
                            k4o.bd4h(qT0x, function(D4H, r4v, chO7H) {
                                D4H.xid = D4H.id;
                                D4H.id = D4H.id + "_rad"
                            });
                            if (qT0x.length) {
                                this.uu2x("radio_search-" + e4i.data.s, qT0x)
                            }
                        }
                        cy5D = Math.min(o4s.djprogramCount, 500);
                        i4m = o4s.djprograms || [];
                        if (e4i.data.isPub) {
                            k4o.no9f(qT0x, function(D4H, r4v, chO7H) {
                                D4H.stype = 1;
                                i4m.unshift(D4H)
                            });
                            cy5D = Math.min(i4m.length, 500)
                        }
                        break
                }
                this.z4D("onsearchload", Q4U);
                if (i4m && i4m.length) {
                    for (var i = 0; i < gc7V; i++) {
                        if (i < i4m.length) {
                            hQ7J.push(i4m[i])
                        } else {
                            hQ7J.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cy5D || 0, pw0x.length < 3 ? 500 : 5e3),
                    list: hQ7J
                }
            },
            onerror: function(Q4U, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gG7z(e4i.onerror)) {
                    e4i.onerror(Q4U)
                }
            }
        }
    });
    q4u.EC5H = NEJ.C();
    b4f = q4u.EC5H.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.chL7E = function(J4N, e4i) {
        if (!J4N) return;
        if ( !! this.bMK1x) v4z.ks8k(this.bMK1x);
        this.bMK1x = this.co5t("search-suggest", NEJ.X({
            data: {
                s: J4N,
                limit: 8
            }
        }, e4i))
    };
    b4f.chJ7C = function(J4N, e4i) {
        if (!J4N) return;
        this.co5t("search-multimatch", NEJ.X({
            data: {
                s: J4N
            }
        }, e4i))
    };
    b4f.bMN1x = function() {
        var chI7B = function(hu7n, bMI1x, bMH1x) {
            var chE7x = hu7n.match(new RegExp(bMI1x + "(.+?)" + bMH1x, "gi")),
                cF5K = 0;
            k4o.bd4h(chE7x, function(p4t) {
                cF5K += p4t.replace(new RegExp(bMI1x, "g"), "").replace(new RegExp(bMH1x, "g"), "").length
            });
            return cF5K
        };
        return function(jt8l, chD7w, chC7v) {
            var bMG1x = [];
            k4o.bd4h(jt8l, function(bj4n, bc4g) {
                bj4n = l4p.Fd5i(bj4n);
                var baY2x = bj4n.lyrics || [],
                    dr6l = baY2x.length,
                    jT8L = 0,
                    cy5D = 4,
                    baZ2x = {
                        l: 0,
                        v: 0
                    }, bqN6H;
                if (dr6l > 4) {
                    k4o.bd4h(baY2x, function(hu7n, r4v) {
                        var bMF1x = chI7B(hu7n, chD7w, chC7v);
                        if (bMF1x > baZ2x.v) {
                            baZ2x.v = bMF1x;
                            baZ2x.l = r4v
                        }
                    });
                    jT8L = baZ2x.l;
                    jT8L = Math.max(jT8L, 0);
                    bqN6H = dr6l - jT8L - 4;
                    if (bqN6H < 0) jT8L += bqN6H;
                    bj4n.lrcAbstractEnd = jT8L + cy5D - 1
                } else {
                    bj4n.lrcAbstractEnd = dr6l - 1
                }
                bj4n.lrcAbstractStart = jT8L;
                bj4n.indexId = (baY2x && baY2x.length ? "L" : "NL") + bj4n.id;
                bMG1x.push(bj4n)
            });
            return bMG1x
        }
    }();
    b4f.chQ7J = function(u4y) {
        switch (u4y) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        E4I = c4g("nm.m"),
        m4q = c4g("nm.l"),
        dw6q = c4g("nm.i"),
        M4Q = c4g("nm.m.sch"),
        b4f, K4O;
    var bbe2x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M4Q.PC8u = NEJ.C();
    b4f = M4Q.PC8u.O4S(I4M.cH5M);
    b4f.cx5C = function(f4j) {
        this.cD5I();
        this.bW5b(f4j);
        this.S4W = q4u.EC5H.gr7k()
    };
    b4f.bW5b = function(f4j) {
        this.n4r = f4j;
        var i4m = a3x.H4L(f4j, "j-flag");
        this.eS6M = i4m[0];
        this.brj6d = i4m[1];
        this.cr5w = i4m[2];
        this.mW9N = i4m[3];
        h4l.s4w(this.eS6M, "input", this.gk7d.g4k(this));
        h4l.s4w(this.eS6M, "keyup", this.gk7d.g4k(this));
        h4l.s4w(this.eS6M, "focus", this.gN7G.g4k(this));
        h4l.s4w(this.brj6d, "click", this.gN7G.g4k(this));
        h4l.s4w(this.eS6M, "blur", this.brA6u.g4k(this));
        h4l.s4w(this.cr5w, "click", this.bbf2x.g4k(this));
        h4l.s4w(this.n4r, "keydown", this.brE6y.g4k(this));
        h4l.s4w(this.n4r, "keypress", this.bbh2x.g4k(this));
        h4l.s4w(this.mW9N, "mouseover", this.Py8q.g4k(this));
        h4l.s4w(this.mW9N, "mouseout", this.Py8q.g4k(this));
        if (this.eS6M.value) {
            this.eS6M.value = ""
        }
        if (this.eS6M.style.opacity != null) {
            this.eS6M.style.opacity = 1
        }
    };
    b4f.gk7d = function(d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.Fi5n()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.Fi5n.g4k(this), 0)
        }
    };
    b4f.gN7G = function() {
        this.yk3x(this.brj6d, !1);
        a3x.y4C(this.n4r, "m-srch-fcs");
        this.eS6M.focus();
        this.Fi5n();
        a3x.y4C((a3x.H4L("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b4f.brA6u = function() {
        if (!this.eS6M.value) {
            this.yk3x(this.brj6d, !0)
        }
        var Fk5p = a3x.H4L(this.mW9N, "slt");
        if (this.bbk2x(this.mW9N) && Fk5p.length > 0 && a3x.t4x(Fk5p[0], "type")) {
            var hn7g = Fk5p[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hn7g)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eS6M.value
                })
            }
            this.bsf6Z(Fk5p[0].href)
        }
        this.yk3x(this.mW9N, !1);
        a3x.x4B(this.n4r, "m-srch-fcs")
    };
    b4f.yk3x = function(f4j, ml9c) {
        a3x.ba4e(f4j, "display", !ml9c ? "none" : "")
    };
    b4f.bbk2x = function(f4j) {
        return a3x.df5k(f4j, "display") != "none"
    };
    b4f.Fi5n = function() {
        var chz7s = function(ib7U) {
            ib7U = k4o.Ay4C(ib7U);
            var eE6y = this.n4r.clientWidth > 250 ? 41 : 17;
            if (l4p.Sh9Y(ib7U) > eE6y) {
                ib7U = l4p.CZ5e(ib7U, eE6y) + "..."
            }
            return k4o.dG6A(ib7U)
        };
        var bbm2x = function(o4s) {
            return o4s.songs && o4s.songs.length || o4s.albums && o4s.albums.length || o4s.artists && o4s.artists.length || o4s.playlists && o4s.playlists.length
        };
        var ss1x = function(sG1x, d4h) {
            if (!l4p.bOj1x(this.eS6M) || l4p.jL8D(this.eS6M.value)) {
                this.yk3x(this.mW9N, !1);
                return
            }
            d4h.keyword = k4o.dG6A(sG1x);
            var dT6N = a3x.bZ5e("m-search-suggest", d4h, {
                mark: l4p.cjv7o.ew6q(this, sG1x),
                cutStr: chz7s.g4k(this)
            }),
                tb1x = d4h.result.order;
            this.mW9N.innerHTML = dT6N;
            this.yk3x(this.mW9N, bbm2x(d4h.result) ? !0 : !1);
            if ( !! tb1x && !! tb1x.length && bbe2x[tb1x[0]]) {
                this.bsl6f = {
                    keyword: sG1x,
                    type: bbe2x[tb1x[0]]
                }
            }
        };
        var chy7r = function() {
            this.yk3x(this.mW9N, !1);
            return
        };
        return function() {
            var D4H = this.eS6M.value;
            if (l4p.jL8D(D4H)) {
                this.yk3x(this.mW9N, !1);
                return
            }
            this.S4W.chL7E(D4H, {
                onload: ss1x.g4k(this, D4H),
                onForbidden: chy7r.g4k(this)
            })
        }
    }();
    b4f.bbh2x = function(d4h) {
        if (d4h.keyCode != 13) return;
        var Fk5p = a3x.H4L(this.mW9N, "slt");
        if (this.bbk2x(this.mW9N) && Fk5p.length > 0) {
            this.bsf6Z(Fk5p[0].href);
            this.yk3x(this.mW9N, !1);
            return
        }
        this.bbf2x();
        this.yk3x(this.mW9N, !1)
    };
    b4f.brE6y = function(d4h) {
        if (!this.bbk2x(this.mW9N)) return;
        var i4m = a3x.H4L(this.mW9N, "xtag"),
            dr6l = i4m.length,
            r4v = k4o.di6c(i4m, function(p4t) {
                return a3x.bE5J(p4t, "slt")
            });
        switch (d4h.keyCode) {
            case 38:
                if (r4v >= 0) a3x.x4B(i4m[r4v], "slt");
                a3x.y4C(i4m[r4v <= 0 ? dr6l - 1 : r4v - 1], "slt");
                break;
            case 40:
                if (r4v >= 0) a3x.x4B(i4m[r4v], "slt");
                a3x.y4C(i4m[(r4v + 1) % dr6l], "slt");
                break
        }
    };
    b4f.Py8q = function(d4h) {
        if (!this.bbk2x(this.mW9N)) return;
        var Pv8n, F4J = h4l.W4a(d4h),
            i4m = a3x.H4L(this.mW9N, "xtag");
        if (F4J.tagName.toLowerCase() == "a") Pv8n = F4J;
        else if (F4J.parentNode.tagName.toLowerCase() == "a") Pv8n = F4J.parentNode;
        if (!Pv8n) return;
        k4o.bd4h(i4m, function(p4t) {
            a3x.x4B(p4t, "slt");
            a3x.t4x(p4t, "type", "")
        });
        if (d4h.type == "mouseout") return;
        a3x.y4C(Pv8n, "slt");
        a3x.t4x(Pv8n, "type", "mouse")
    };
    b4f.bbf2x = function() {
        var dO6I = location.hash,
            r4v = dO6I.indexOf("?"),
            bv5A = k4o.hv7o(dO6I.substring(r4v + 1));
        bv5A.s = this.eS6M.value;
        if (l4p.jL8D(bv5A.s)) return;
        if (!bv5A.type && this.bsl6f && this.bsl6f.keyword == bv5A.s) {
            bv5A.type = this.bsl6f.type
        }
        this.bsf6Z("/search/#/?" + k4o.cE5J(bv5A));
        this.eS6M.blur()
    };
    b4f.bsf6Z = function(Y4c) {
        if (location.dispatch2) {
            location.dispatch2(Y4c)
        } else {
            location.href = Y4c
        }
    };
    M4Q.PC8u.chx7q = function() {
        var i4m = a3x.H4L(document.body, "j-suggest");
        k4o.bd4h(i4m, function(p4t) {
            new M4Q.PC8u(p4t)
        })
    };
    M4Q.PC8u.chx7q()
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        b4f;
    q4u.fe6Y({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q4U) {
                return {
                    total: Q4U.size || 0,
                    list: Q4U.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q4U) {
                return {
                    total: Q4U.size || 0,
                    list: Q4U.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q4U) {
                return Q4U.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q4U, e4i) {
                if (e4i.offset == 0) {
                    var pG0x = Q4U.data[0];
                    this.z4D("onfirstload", pG0x);
                    Q4U.data.splice(0, 1);
                    return Q4U.data
                } else {
                    return Q4U.data
                }
            }
        }
    });
    q4u.Fx5C = NEJ.C();
    b4f = q4u.Fx5C.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bsD6x = function() {
        var tv1x = "LOCAL_FLAG";
        return function(u4y, chw7p) {
            var j4n = this.FE5J(tv1x, {});
            if (j4n[u4y]) {
                return true
            } else {
                if (!chw7p) {
                    j4n[u4y] = true;
                    this.wr2x(tv1x, j4n)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        bsG6A;
    if ( !! N4R.nW9N) return;
    N4R.nW9N = NEJ.C();
    bsG6A = N4R.nW9N.O4S(N4R.cH5M);
    bsG6A.bl5q = function() {
        var chv7o = function(d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function(e4i) {
            e4i.oncheck = e4i.oncheck || chv7o;
            this.bm5r(e4i);
            this.bU5Z = e4i.list;
            this.ji8a = e4i.dataset || "id";
            this.kR8J = e4i.selected || "js-selected"
        }
    }();
    bsG6A.nF9w = function(D4H) {
        var F4J, d4h = {
            target: D4H
        };
        k4o.bd4h(this.bU5Z, function(f4j) {
            delete d4h.matched;
            d4h.source = a3x.t4x(f4j, this.ji8a);
            this.z4D("oncheck", d4h);
            if (!d4h.matched) {
                a3x.x4B(f4j, this.kR8J)
            } else {
                F4J = f4j;
                a3x.y4C(f4j, this.kR8J)
            }
        }, this);
        return F4J
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut"),
        pN0x;
    if ( !! N4R.de5j) return;
    N4R.de5j = NEJ.C();
    pN0x = N4R.de5j.O4S(N4R.cH5M);
    pN0x.cx5C = function() {
        this.iV8N = {};
        this.cD5I();
        this.bL5Q()
    };
    pN0x.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.btc6W = e4i.umi || "";
        this.BZ4d = e4i.dispatcher;
        this.LU7N = e4i.composite || bb4f;
        this.bjI4M({
            onshow: this.eZ6T.g4k(this),
            onhide: this.ke8W.g4k(this),
            onrefresh: this.eD6x.g4k(this),
            onmessage: this.qG0x.g4k(this),
            onbeforehide: this.chs7l.g4k(this)
        })
    };
    pN0x.bD5I = function() {
        delete this.btc6W;
        this.iV8N = {};
        this.bG5L()
    };
    pN0x.um2x = function(d4h) {
        if ( !! d4h) d4h.stopped = !0
    };
    pN0x.bL5Q = bs5x;
    pN0x.eZ6T = bs5x;
    pN0x.ke8W = bs5x;
    pN0x.eD6x = bs5x;
    pN0x.qG0x = bs5x;
    pN0x.chs7l = bs5x;
    pN0x.nB9s = function(nb9S, bH5M, fl6f) {
        this.BZ4d.btp6j({
            to: nb9S,
            mode: fl6f || 0,
            data: bH5M,
            from: this.btc6W
        })
    };
    pN0x.cFa2x = function(u4y, j4n) {
        this.BZ4d.BX4b(u4y, {
            from: this.btc6W,
            data: j4n
        })
    };
    pN0x.cFc2x = function() {
        this.BZ4d.mq9h.apply(this.BZ4d, arguments)
    };
    pN0x.cho7h = function() {
        return this.iV8N
    };
    a3x.bbw2x = function() {
        if ( !! window.dispatcher) {
            dispatcher.bMC1x.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bs5x = NEJ.F,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        zt4x;
    if ( !! N4R.dx6r) return;
    N4R.dx6r = NEJ.C();
    zt4x = N4R.dx6r.O4S(N4R.de5j);
    zt4x.chk7d = function(e4i) {
        var bI5N;
        if (!bI5N) {
            var j4n = e4i.input || bb4f;
            bI5N = a3x.B4F(j4n.parent)
        }
        if (!bI5N) {
            var j4n = e4i.data || bb4f;
            bI5N = a3x.B4F(j4n.parent)
        }
        if (!bI5N) {
            bI5N = a3x.B4F(e4i.parent)
        }
        return bI5N
    };
    zt4x.eZ6T = function(e4i) {
        var bI5N = this.chk7d(e4i);
        if ( !! bI5N && !! this.n4r) bI5N.appendChild(this.n4r);
        this.gC7v(e4i);
        this.bMA1x("onshow", e4i);
        this.eD6x(e4i)
    };
    zt4x.eD6x = function(e4i) {
        this.gq7j(e4i);
        this.bMA1x("onrefresh", e4i)
    };
    zt4x.ke8W = function() {
        this.kZ8R();
        this.chi7b();
        a3x.mY9P(this.n4r)
    };
    zt4x.bMz1x = function() {
        var gK7D = /^onshow|onrefresh|delay$/;
        return function(cj5o) {
            return gK7D.test(cj5o)
        }
    }();
    zt4x.bMy1x = bs5x;
    zt4x.bMA1x = function() {
        var bMx1x = function(bv5A, e4i, cj5o, pk0x) {
            if (this.bMz1x(pk0x)) return;
            if ( !! bv5A) cj5o += (cj5o.indexOf("?") > 1 ? "&" : "?") + bv5A;
            var dm6g = this.bMy1x(pk0x, e4i) || {};
            dm6g.location = e4i;
            dm6g.parent = this.iV8N[pk0x];
            this.BZ4d.iz8r(cj5o, {
                input: dm6g
            })
        };
        return function(u4y, e4i) {
            if (!e4i.nodelay) {
                if ( !! this.LU7N.delay) return;
                var bMw1x = this.LU7N[u4y] || bb4f;
                if (bMw1x.delay) return
            }
            var bv5A = k4o.cE5J(e4i.param) || "";
            if (u4y == "onrefresh") {
                k4o.eC6w(this.LU7N, bMx1x.g4k(this, bv5A, e4i))
            }
            k4o.eC6w(bMw1x, bMx1x.g4k(this, bv5A, e4i))
        }
    }();
    zt4x.chi7b = function() {
        var Bm4q = function(cj5o, pk0x) {
            if (!this.bMz1x(pk0x)) this.BZ4d.bu5z(cj5o)
        };
        return function() {
            k4o.eC6w(this.LU7N, Bm4q, this);
            k4o.eC6w(this.LU7N.onshow, Bm4q, this);
            k4o.eC6w(this.LU7N.onrefresh, Bm4q, this)
        }
    }()
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        E4I = c4g("nm.m"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        b4f, K4O;
    E4I.Pe8W = NEJ.C();
    b4f = E4I.Pe8W.O4S(I4M.cH5M);
    b4f.cx5C = function() {
        this.cD5I();
        this.n4r = a3x.B4F("g-topbar");
        var i4m = a3x.H4L(this.n4r, "j-tflag");
        this.bur7k = i4m[0];
        this.Gv6p = i4m[1];
        this.bMt1x = i4m[2];
        this.buB7u = i4m[3];
        this.cgZ7S = I4M.nW9N.A4E({
            list: this.bur7k.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.buG7z = I4M.nW9N.A4E({
            list: this.buB7u.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX5c([
            [this.n4r, "click", this.Pc8U.g4k(this)],
            [this.Gv6p, "click", this.cM5R.g4k(this)],
            [this.Gv6p, "mouseout", this.bMs1x.g4k(this, 0)],
            [this.Gv6p, "mouseover", this.bMs1x.g4k(this, 1)]
        ]);
        window.scrollTopbar = this.cgX7Q.g4k(this);
        window.matchNav = this.bMr1x.g4k(this);
        window.polling = this.uy2x.g4k(this);
        this.buZ7S = q4u.Fx5C.A4E();
        this.cgU7N();
        this.LY7R();
        var bv5A = k4o.hv7o(location.href.split("?")[1]) || {};
        if (bv5A.market) {
            a3x.B4F("topbar-download-link").href = "/download?market=" + bv5A.market
        }
        var bvd7W = a3x.H4L(this.n4r, "j-showoff");
        if (bvd7W && !this.buZ7S.bsD6x("newMvSearch")) {
            a3x.x4B(bvd7W[0], "f-hide");
            window.setTimeout(function() {
                a3x.y4C(bvd7W[0], "f-hide")
            }, 5e3)
        }
    };
    b4f.uy2x = function(d4h) {
        var dO6I = l4p.KN7G();
        if (!/^\/msg/.test(dO6I)) {
            var ww2x = 0;
            ww2x += d4h.comment;
            ww2x += d4h.forward;
            ww2x += d4h.msg;
            ww2x += d4h.notice;
            if (ww2x > 0) {
                ww2x = ww2x > 99 ? "99+" : ww2x;
                this.OT8L.innerText = ww2x;
                this.Md7W.innerText = ww2x;
                a3x.x4B(this.OT8L, "f-hide");
                a3x.x4B(this.Md7W, "f-hide");
                this.bbY2x = true
            } else {
                a3x.y4C(this.OT8L, "f-hide");
                a3x.y4C(this.Md7W, "f-hide");
                this.bbY2x = false
            }
            var eT6N = "/at";
            if (d4h.notice) eT6N = "/notify";
            if (d4h.comment) eT6N = "/comment";
            if (d4h.msg > 0) eT6N = "/private";
            if (d4h.forward > 0) eT6N = "/at";
            this.Md7W.parentNode.href = "/msg/#" + eT6N
        } else {
            this.Md7W.parentNode.href = "javascript:;";
            a3x.y4C(this.OT8L, "f-hide");
            a3x.y4C(this.Md7W, "f-hide");
            this.bbY2x = false
        }
        var i4m = a3x.H4L(this.bur7k, "j-t");
        if (!/^\/friend/.test(dO6I)) {
            if (i4m && i4m.length) {
                a3x.ba4e(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a3x.ba4e(i4m[0], "display", "none")
        }
    };
    b4f.cM5R = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (f4j) {
            switch (a3x.t4x(f4j, "action")) {
                case "login":
                    h4l.cp5u(d4h);
                    var u4y = a3x.t4x(f4j, "type");
                    if (u4y) {
                        if (u4y == "sina" || u4y == "tencent") top.open(f4j.href);
                        else top.login(u4y == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h4l.cp5u(d4h);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.buZ7S.bsD6x("storeNew")) {
                        a3x.y4C(this.cFe2x, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.buZ7S.bsD6x("levelNew")) {
                        a3x.y4C(this.cFg2x, "f-vhide")
                    }
                    break
            }
        }
    };
    b4f.Pc8U = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        var U4Y = a3x.t4x(f4j, "action");
        switch (U4Y) {
            case "bilog":
                var bvt7m = a3x.t4x(f4j, "logAction"),
                    bvw7p = a3x.t4x(f4j, "logJson");
                window.log(bvt7m, bvw7p);
                break
        }
    };
    b4f.bMs1x = function(Mg7Z, d4h) {
        if (this.bvz7s) {
            this.bvz7s.style.display = !Mg7Z ? "none" : "";
            (Mg7Z || !this.bbY2x ? a3x.y4C : a3x.x4B).call(window, this.OT8L, "f-hide")
        }
    };
    b4f.cgX7Q = function(gj7c) {
        a3x.ba4e(this.n4r, "top", - gj7c + "px")
    };
    b4f.bMr1x = function(eT6N, cgP7I) {
        this.cgZ7S.nF9w(eT6N);
        if (eT6N == "discover") {
            a3x.y4C(this.bMt1x, "f-hide");
            a3x.x4B(this.buB7u, "f-hide");
            window.g_topBarHeight = 105;
            this.buG7z.nF9w(cgP7I)
        } else {
            a3x.x4B(this.bMt1x, "f-hide");
            a3x.y4C(this.buB7u, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b4f.cgU7N = function() {
        var eh6b = a3x.B4F("g_iframe");
        if (!eh6b) return;
        var gx7q = eh6b.contentWindow.document.getElementById("g_top");
        this.bMr1x(a3x.t4x(gx7q, "module"), a3x.t4x(gx7q, "sub"))
    };
    var bcc2x = {}, bMl1x = /\/\/\w+/,
        cgJ7C = {
            avatarUrl: function(a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bMl1x, "") !== b.replace(bMl1x, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b4f.cgG7z = function(bcj2x) {
        var ob9S = k4o.di6c(cgJ7C, function(D4H, J4N) {
            if (k4o.gG7z(D4H)) {
                return D4H(bcj2x[J4N], bcc2x[J4N])
            } else {
                return bcj2x[J4N] !== bcc2x[J4N]
            }
        });
        bcc2x = bcj2x;
        return bcj2x[ob9S]
    };
    b4f.LY7R = function() {
        var dp6j = GUser || {}, cgF7y = GUserAcc || {};
        if (dp6j && dp6j.userId) {
            var bMi1x = NEJ.X(dp6j, cgF7y);
            if (this.cgG7z(bMi1x)) {
                a3x.dI6C(this.Gv6p, "m-topbar-user-login", bMi1x)
            }
        } else {
            bcc2x = {};
            this.Gv6p.innerHTML = a3x.iI8A("m-topbar-user-unlogin");
            var i4m = a3x.H4L(this.bur7k, "j-t");
            a3x.ba4e(i4m[0], "display", "none")
        }
        a3x.x4B(this.Gv6p, "f-hide");
        this.bbY2x = false;
        var i4m = a3x.H4L(this.Gv6p, "j-uflag");
        if (dp6j && dp6j.userId) {
            this.OT8L = i4m.shift();
            this.bvz7s = i4m.shift();
            this.Md7W = i4m.shift()
        } else {
            this.bvz7s = i4m.shift()
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        b4f, K4O;
    q4u.fe6Y({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q4U) {
                h4l.z4D(q4u.to1x, "message", Q4U)
            }
        }
    });
    q4u.to1x = NEJ.C();
    b4f = q4u.to1x.O4S(q4u.hG7z);
    b4f.bck2x = function() {
        this.co5t("polling-get", {})
    };
    b4f.uI2x = function() {
        var eg6a;
        return function() {
            if ( !! eg6a) return;
            eg6a = window.setInterval(this.bck2x.g4k(this), 1e5);
            this.bck2x()
        }
    }();
    I4M.fJ7C.A4E({
        event: "message",
        element: q4u.to1x
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, - 1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
                uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
                args = arguments;
            WebSocket.bcp2x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.bcp2x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.OC8u.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bwv7o();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function() {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function() {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function() {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function() {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY7R = WebSocket.cgC7v++;
            WebSocket.bMh1x[self.gY7R] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lW9N = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.bcp2x(function() {
                    WebSocket.qa0x.create(self.gY7R, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.qa0x.send(this.gY7R, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.qa0x.close(this.gY7R)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lW9N)) {
                this.lW9N[type] = []
            }
            this.lW9N[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lW9N)) return;
            var events = this.lW9N[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lW9N[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cgz7s = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bMg1x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bMg1x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cgu7n("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bMg1x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cgu7n = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.qa0x = null;
        WebSocket.bMh1x = {};
        WebSocket.OC8u = [];
        WebSocket.cgC7v = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.bcp2x(function() {
                WebSocket.qa0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bwv7o = function() {
            if (WebSocket.qa0x) return;
            if (WebSocket.cgt7m) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cgt7m
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cgs7l()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cFi2x = function() {
            setTimeout(function() {
                WebSocket.qa0x = document.getElementById("webSocketFlash");
                WebSocket.qa0x.setCallerUrl(location.href);
                WebSocket.qa0x.setDebug( !! window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OC8u.length; ++i) {
                    WebSocket.OC8u[i]()
                }
                WebSocket.OC8u = []
            }, 0)
        };
        WebSocket.cFk2x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.qa0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bMh1x[events[i].webSocketId].cgz7s(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cFm2x = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dP6J = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bcp2x = function(task) {
            if (WebSocket.qa0x) {
                task()
            } else {
                WebSocket.OC8u.push(task)
            }
        };
        WebSocket.cgs7l = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bwv7o()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bwv7o()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c4g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.ec6W) this.ec6W = {};
        this.bMc1x = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ec6W || !this.ec6W.error || isArray(this.ec6W.error) && !this.ec6W.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ec6W) return false;
        var handler = this.ec6W[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ec6W) this.ec6W = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ec6W[type]) {
            this.ec6W[type] = listener
        } else if (isArray(this.ec6W[type])) {
            this.ec6W[type].push(listener)
        } else {
            this.ec6W[type] = [this.ec6W[type], listener]
        }
        if (isArray(this.ec6W[type]) && !this.ec6W[type].warned) {
            var m;
            if (this.bMc1x !== undefined) {
                m = this.bMc1x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ec6W[type].length > m) {
                this.ec6W[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ec6W[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ec6W || !this.ec6W[type]) return this;
        var list = this.ec6W[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ec6W[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.ec6W = {};
            return this
        }
        var events = this.ec6W && this.ec6W[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ec6W[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.ec6W) this.ec6W = {};
        if (!this.ec6W[type]) this.ec6W[type] = [];
        if (!isArray(this.ec6W[type])) {
            this.ec6W[type] = [this.ec6W[type]]
        }
        return this.ec6W[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        dC6w = c4g("nm.u"),
        q4u = c4g("nm.d"),
        OA8s = c4g("pomelo"),
        X4b = 0,
        b4f, K4O;
    q4u.fe6Y({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q4U) {
                X4b = 2;
                var tq1x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j4n = Q4U.account || bb4f,
                    dn6h = GUser.userId;
                OA8s.init(tq1x.host, tq1x.port, true, this.cgg7Z.g4k(this, {
                    user: dn6h,
                    nonce: j4n.nonce,
                    domain: tq1x.domain,
                    productKey: tq1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            },
            onerror: function() {
                return this.beU3x()
            }
        }
    });
    q4u.BK4O = NEJ.C();
    b4f = q4u.BK4O.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        var qQ0x = !1;
        return function(e4i) {
            if (!qQ0x) {
                qQ0x = !0
            }
            this.cD5I(e4i);
            OA8s.on("specify", this.qG0x.g4k(this));
            OA8s.on("broadcast", this.qG0x.g4k(this))
        }
    }();
    b4f.qG0x = function(d4h) {
        k4o.bd4h(d4h, function(bH5M) {
            h4l.z4D(q4u.BK4O, "message", bH5M)
        }, this)
    };
    b4f.beU3x = function() {
        var bA5F = 500;
        return function() {
            X4b = 0;
            OA8s.disconnect();
            if (bA5F > 6e4) bA5F = 500;
            bA5F *= 2
        }
    }();
    b4f.cgg7Z = function(e4i, cb5g) {
        if ( !! cb5g) {
            return this.beU3x()
        }
        X4b = 3;
        OA8s.registerAndBind(e4i, function(o4s) {
            if (o4s.code != 200) {
                return this.beU3x()
            }
            X4b = 4
        }.g4k(this))
    };
    b4f.cFo2x = function() {
        dC6w.cfS6M.gr7k().cFp2x()
    };
    b4f.cFq2x = function() {
        dC6w.cfS6M.gr7k().cFr2x()
    };
    b4f.bfk3x = function() {
        var qQ0x = !1;
        return function() {
            if (qQ0x) return;
            qQ0x = !0;
            this.co5t("polling-init", {})
        }
    }();
    I4M.fJ7C.A4E({
        event: "message",
        element: q4u.BK4O
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        dv6p = c4g("nej.p"),
        k4o = c4g("nej.u"),
        m4q = c4g("nm.l"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        cW5b = c4g("api"),
        b4f, K4O;
    var gi7b = a3x.iu8m('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m4q.bfn3x = NEJ.C();
    b4f = m4q.bfn3x.O4S(m4q.en6h);
    K4O = m4q.bfn3x.cs5x;
    b4f.bl5q = function(e4i) {
        e4i.title = "意见反馈";
        this.bm5r(e4i)
    };
    b4f.ce5j = function() {
        this.cd5i = gi7b
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.hy7r = {};
        var Mk7d = a3x.H4L;
        var HI6C = h4l.s4w;
        this.hy7r.submit_btn = Mk7d(this.n4r, "u-btn2")[0];
        this.hy7r.cancle_btn = Mk7d(this.n4r, "u-btn2")[1];
        this.hy7r.prompt_msg = Mk7d(this.n4r, "u-err")[0];
        this.hy7r.zs = Mk7d(this.n4r, "zs")[0];
        a3x.ba4e(this.hy7r.zs, "display", "none");
        this.hy7r.fb_txt = Mk7d(this.n4r, "u-txt")[0];
        this.hy7r.contact = Mk7d(this.n4r, "u-txt")[1];
        a3x.gn7g(this.hy7r.fb_txt, "holder");
        a3x.gn7g(this.hy7r.contact, "holder");
        if (a3x.bE5J(this.hy7r.fb_txt.parentNode, "holder-parent")) {
            a3x.ba4e(this.hy7r.fb_txt.parentNode, "display", "block")
        }
        if (a3x.bE5J(this.hy7r.contact.parentNode, "holder-parent")) {
            a3x.ba4e(this.hy7r.contact.parentNode, "display", "block")
        }
        HI6C(this.hy7r.submit_btn, "click", this.cfP6J.g4k(this));
        HI6C(this.hy7r.cancle_btn, "click", this.cfO6I.g4k(this));
        HI6C(this.hy7r.prompt_msg, "msgShow", this.cfK6E.g4k(this));
        HI6C(this.hy7r.fb_txt, "keyup", this.uU2x.g4k(this));
        HI6C(this.hy7r.fb_txt, "input", this.fN7G.g4k(this));
        HI6C(this.hy7r.contact, "keyup", this.cfJ6D.g4k(this));
        HI6C(this.hy7r.contact, "input", this.bLT1x.g4k(this));
        this.kI8A = q4u.hR7K.A4E()
    };
    b4f.cfP6J = function(d4h) {
        h4l.bh4l(d4h);
        if (this.cO5T()) return;
        var bo5t = this.hy7r.fb_txt.value.trim();
        var bq5v = bo5t.length;
        var e4i = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bLS1x = this.hy7r.contact.value.trim();
        var bcC2x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bwp7i(),
            contact: bLS1x
        };
        var j4n = {
            content: bo5t,
            client: "web",
            xInfo: JSON.stringify(bcC2x)
        }, nI9z = this.kI8A.cta0x();
        if (nI9z && nI9z.length) {
            j4n.log = nI9z.join("\n")
        }
        if (bq5v == 0) {
            this.hy7r.prompt_msg.innerHTML = "反馈内容不能为空";
            a3x.ba4e(this.hy7r.prompt_msg, "display", "block");
            return
        }
        if (bLS1x.length > 100) {
            this.hy7r.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a3x.ba4e(this.hy7r.prompt_msg, "display", "block");
            return
        }
        this.cO5T(true);
        e4i.data = k4o.cE5J(j4n);
        e4i.onload = this.cfz6t.g4k(this);
        e4i.onerror = this.iY8Q.g4k(this);
        v4z.bn5s("/api/feedback/web", e4i)
    };
    b4f.fN7G = function(d4h) {
        var bq5v = this.hy7r.fb_txt.value.trim().length;
        if (bq5v > 0) a3x.ba4e(this.hy7r.prompt_msg, "display", "none");
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.gk7d.g4k(this), 0) : this.gk7d()
    };
    b4f.uU2x = function(d4h) {
        if (d4h.keyCode === 8) this.gk7d()
    };
    b4f.gk7d = function() {
        var bq5v = this.hy7r.fb_txt.value.trim().length;
        this.hy7r.zs.innerHTML = !bq5v ? "0/140" : bq5v + "/140"
    };
    b4f.bLT1x = function(d4h) {
        var bq5v = this.hy7r.contact.value.trim().length;
        if (bq5v > 0) a3x.ba4e(this.hy7r.prompt_msg, "display", "none")
    };
    b4f.cfJ6D = function(d4h) {
        if (d4h.keyCode === 8) this.bLT1x()
    };
    b4f.cfO6I = function(d4h) {
        h4l.cp5u(d4h);
        this.bu5z()
    };
    b4f.cfK6E = function(d4h) {
        var f4j = h4l.W4a(d4h);
        f4j.innerHTML = "请输入反馈内容"
    };
    b4f.cFs2x = function(cFt2x) {
        var f4j = h4l.W4a(d4h);
        f4j.innerHTML = ""
    };
    b4f.cfz6t = function(o4s) {
        this.cO5T(false);
        this.bu5z();
        m4q.Z4d.L4P({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b4f.iY8Q = function(o4s) {
        this.cO5T(false);
        m4q.Z4d.L4P({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b4f.cO5T = function(cX5c) {
        return this.dX6R(this.hy7r.submit_btn, cX5c, "发送意见", "发送中...")
    };
    b4f.L4P = function() {
        K4O.L4P.call(this);
        this.cO5T(false);
        this.hy7r.fb_txt.value = "";
        this.hy7r.contact.value = "";
        a3x.ba4e(this.hy7r.prompt_msg, "display", "none");
        this.gk7d()
    };
    l4p.cfu6o = function(e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined) e4i.title = "意见反馈";
        m4q.bfn3x.L4P(e4i)
    };
    cW5b.feedback = l4p.feedback = l4p.cfu6o
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        N4R = c4g("nej.ui"),
        b4f;
    if ( !! N4R.yA3x) return;
    N4R.yA3x = NEJ.C();
    b4f = N4R.yA3x.O4S(N4R.ei6c);
    b4f.cx5C = function() {
        this.gY7R = this.bLM1x();
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.ct5y = e4i.index;
        this.gA7t = e4i.total;
        this.ht7m = e4i.range;
        this.gB7u(e4i.data)
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.bk4o;
        delete this.ct5y;
        delete this.gA7t;
        delete this.ht7m
    };
    b4f.iy8q = bs5x;
    b4f.bLM1x = function() {
        var gJ7C = +(new Date);
        return function() {
            return "itm-" + ++gJ7C
        }
    }();
    b4f.FB5G = function() {
        return this.gY7R
    };
    b4f.ie7X = function() {
        return this.bk4o
    };
    b4f.gB7u = function(j4n) {
        this.bk4o = j4n || {};
        this.iy8q(this.bk4o)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ui"),
        b4f, K4O;
    if ( !! N4R.vh2x) return;
    N4R.vh2x = NEJ.C();
    b4f = N4R.vh2x.O4S(N4R.yA3x);
    K4O = N4R.vh2x.cs5x;
    b4f.bl5q = function(e4i) {
        this.cfq6k = e4i.pkey || "id";
        this.bm5r(e4i)
    };
    b4f.DC5H = function(j4n) {
        this.z4D("ondelete", {
            ext: j4n,
            id: this.FB5G(),
            data: this.ie7X(),
            body: this.lQ9H()
        })
    };
    b4f.tz1x = function(j4n) {
        this.z4D("onupdate", {
            ext: j4n,
            id: this.FB5G(),
            data: this.ie7X(),
            body: this.lQ9H()
        })
    };
    b4f.gB7u = function(j4n) {
        K4O.gB7u.apply(this, arguments);
        this.gY7R = this.bk4o[this.cfq6k] || this.bLM1x()
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        b4f, iZ8R, bgj3x;
    if ( !! N4R.bgk3x) return;
    N4R.bgk3x = NEJ.C();
    b4f = N4R.bgk3x.O4S(N4R.ei6c);
    b4f.bl5q = function(e4i) {
        this.bda2x = NEJ.X({}, e4i);
        this.fP7I = NEJ.X({}, e4i);
        delete this.bda2x.onchange;
        this.fP7I.onchange = this.fY7R.g4k(this);
        this.bm5r(e4i);
        this.cfm6g({
            number: e4i.number,
            label: e4i.label || bb4f
        })
    };
    b4f.bD5I = function() {
        this.bG5L();
        if ( !! this.lp8h) {
            this.lp8h.T4X();
            delete this.lp8h
        }
        delete this.bda2x;
        delete this.fP7I;
        this.cfk6e();
        this.n4r.innerHTML = " "
    };
    b4f.ce5j = function() {
        this.mb9S = iZ8R
    };
    b4f.cfm6g = function(j4n) {
        a3x.dI6C(this.n4r, bgj3x, j4n);
        var gJ7C = a3x.Ja6U();
        this.fP7I.list = a3x.H4L(this.n4r, "js-i-" + gJ7C);
        this.fP7I.pbtn = (a3x.H4L(this.n4r, "js-p-" + gJ7C) || fx6r)[0];
        this.fP7I.nbtn = (a3x.H4L(this.n4r, "js-n-" + gJ7C) || fx6r)[0]
    };
    b4f.bW5b = function() {
        this.cg5l()
    };
    b4f.cFu2x = function(j4n) {
        return a3x.bZ5e(bgj3x, j4n)
    };
    b4f.fY7R = function(d4h) {
        if (this.NN8F) return;
        var r4v = d4h.index,
            cy5D = d4h.total;
        this.NN8F = !0;
        this.NM8E(r4v, cy5D);
        k4o.bd4h(this.bde2x, function(tC1x) {
            tC1x.NM8E(r4v, cy5D)
        });
        this.NN8F = !1;
        this.z4D("onchange", d4h)
    };
    b4f.g4k = function(bI5N) {
        bI5N = a3x.B4F(bI5N);
        if (!bI5N) return this;
        var cq5v = NEJ.X({}, this.bda2x);
        cq5v.parent = bI5N;
        cq5v.index = this.tD1x();
        cq5v.total = this.kq8i();
        var tC1x = this.constructor.A4E(cq5v);
        tC1x.xp3x("onchange", this.fP7I.onchange);
        if (!this.bde2x) this.bde2x = [];
        this.bde2x.push(tC1x);
        return this
    };
    b4f.cfk6e = function() {
        var bnv5A = function(tC1x, r4v, i4m) {
            tC1x.T4X();
            i4m.splice(r4v, 1)
        };
        return function() {
            k4o.no9f(this.bde2x, bnv5A)
        }
    }();
    b4f.kU8M = function(r4v) {
        if (!this.lp8h) return;
        this.lp8h.kU8M(r4v)
    };
    b4f.tD1x = function() {
        if (!this.lp8h) return 1;
        return this.lp8h.tD1x()
    };
    b4f.kq8i = function() {
        if (!this.lp8h) return 1;
        return this.lp8h.kq8i()
    };
    b4f.NM8E = function(r4v, cy5D) {
        if (!this.lp8h) return;
        this.lp8h.NM8E(r4v, cy5D)
    };
    b4f.bgE3x = function(cy5D) {
        if (!this.lp8h) return;
        this.lp8h.bgE3x(cy5D)
    };
    iZ8R = a3x.tO2x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bgj3x = a3x.es6m('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.bdg2x) return;
    N4R.bdg2x = NEJ.C();
    b4f = N4R.bdg2x.O4S(N4R.cH5M);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.bdn2x = e4i.pbtn;
        this.cr5w = e4i.nbtn;
        this.bdp2x = e4i.sbtn;
        this.bdr2x = e4i.ebtn;
        this.ji8a = e4i.event || "click";
        this.kR8J = e4i.selected || "js-selected";
        this.nK9B = e4i.disabled || "js-disabled";
        this.cfg6a(e4i.list);
        this.NM8E(e4i.index || 1, e4i.total || 1)
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.bU5Z;
        delete this.ji8a;
        delete this.bdn2x;
        delete this.cr5w;
        delete this.bdp2x;
        delete this.bdr2x;
        delete this.bLJ1x;
        delete this.gA7t;
        delete this.ct5y;
        delete this.kR8J;
        delete this.nK9B
    };
    b4f.cfg6a = function() {
        var bgY3x = function(f4j) {
            this.bU5Z.push(f4j);
            this.bX5c([
                [f4j, this.ji8a, this.cu5z.ew6q(this, 0)]
            ])
        };
        return function(i4m) {
            this.bU5Z = [];
            this.bX5c([
                [this.bdn2x, "click", this.cu5z.ew6q(this, - 1)],
                [this.cr5w, "click", this.cu5z.ew6q(this, 1)],
                [this.bdp2x, "click", this.cu5z.ew6q(this, - 2)],
                [this.bdr2x, "click", this.cu5z.ew6q(this, 2)]
            ]);
            k4o.bd4h(i4m, bgY3x, this)
        }
    }();
    b4f.Ee5j = function(f4j, r4v) {
        if (r4v == null) {
            f4j.innerText = "";
            a3x.ba4e(f4j, "display", "none");
            a3x.x4B(f4j, this.kR8J)
        } else {
            f4j.innerText = r4v;
            a3x.ba4e(f4j, "display", "");
            r4v == this.ct5y ? a3x.y4C(f4j, this.kR8J) : a3x.x4B(f4j, this.kR8J)
        }
    };
    b4f.bhd3x = function() {
        if (this.ct5y <= 1) {
            a3x.y4C(this.bdn2x, this.nK9B);
            a3x.y4C(this.bdp2x, this.nK9B)
        } else {
            a3x.x4B(this.bdn2x, this.nK9B);
            a3x.x4B(this.bdp2x, this.nK9B)
        }
        if (this.ct5y >= this.gA7t) {
            a3x.y4C(this.cr5w, this.nK9B);
            a3x.y4C(this.bdr2x, this.nK9B)
        } else {
            a3x.x4B(this.cr5w, this.nK9B);
            a3x.x4B(this.bdr2x, this.nK9B)
        }
    };
    b4f.bdt2x = bs5x;
    b4f.bhg3x = function() {
        this.bdt2x();
        this.bhd3x();
        this.z4D("onchange", {
            last: this.bLJ1x,
            total: this.gA7t,
            index: this.ct5y,
            ext: this.bhi3x
        })
    };
    b4f.bLI1x = function(r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.gA7t == null) return !1;
        r4v = Math.max(1, Math.min(r4v, this.gA7t));
        this.bLJ1x = this.ct5y;
        this.ct5y = r4v;
        return !0
    };
    b4f.bhk3x = function(cy5D) {
        cy5D = parseInt(cy5D);
        if (isNaN(cy5D) || cy5D < 1) return !1;
        this.gA7t = cy5D;
        return !0
    };
    b4f.cu5z = function(d4h, eV6P) {
        h4l.cp5u(d4h);
        var F4J = h4l.W4a(d4h);
        if (!F4J || a3x.bE5J(F4J, this.kR8J) || a3x.bE5J(F4J, this.nK9B)) return;
        var r4v = F4J.innerText;
        switch (eV6P) {
            case 1:
            case -1:
                r4v = this.ct5y + eV6P;
                break;
            case 2:
                r4v = this.gA7t;
                break;
            case -2:
                r4v = 1;
                break
        }
        this.kU8M(r4v)
    };
    b4f.tD1x = function() {
        return this.ct5y
    };
    b4f.kU8M = function(r4v) {
        var ceX6R = this.ct5y;
        this.bLI1x(r4v);
        if (ceX6R != this.ct5y) this.bhg3x();
        return this
    };
    b4f.kq8i = function() {
        return this.gA7t
    };
    b4f.UD0x = function(cy5D) {
        if (this.bhk3x(cy5D) && this.ct5y != null) {
            this.ct5y = 1;
            this.bhg3x()
        }
        return this
    };
    b4f.bgE3x = function(cy5D) {
        if (this.bhk3x(cy5D)) {
            this.bdt2x();
            this.bhd3x()
        }
        return this
    };
    b4f.NM8E = function(r4v, cy5D) {
        if (!this.bhk3x(cy5D) || !this.bLI1x(r4v)) return this;
        this.bhg3x();
        return this
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        cY5d = c4g("nej.x"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.ND8v) return;
    N4R.ND8v = NEJ.C();
    b4f = N4R.ND8v.O4S(N4R.bdg2x);
    b4f.cx5C = function() {
        this.cD5I();
        var f4j = a3x.dg6a("span", "zdot");
        f4j.innerText = "...";
        this.bdu2x = [f4j.cloneNode(true), f4j]
    };
    b4f.bD5I = function() {
        this.bG5L();
        this.bLF1x()
    };
    b4f.bLF1x = function() {
        a3x.mY9P(this.bdu2x[0]);
        a3x.mY9P(this.bdu2x[1])
    };
    b4f.bdt2x = function() {
        this.bhi3x = {
            last: !1,
            first: !1,
            list: this.bU5Z
        };
        this.bLF1x();
        this.Ee5j(this.bU5Z[0], 1);
        var bM5R = 1,
            bq5v = this.bU5Z.length;
        if (this.gA7t < bq5v) {
            for (var qp0x; bM5R < bq5v; bM5R++) {
                qp0x = bM5R + 1;
                this.Ee5j(this.bU5Z[bM5R], qp0x > this.gA7t ? null : qp0x)
            }
            return
        }
        if (this.ct5y > 1) {
            var cF5K = Math.floor((bq5v - 2) / 2),
                ceP6J = this.gA7t - bq5v + 2,
                hz7s = Math.max(2, this.ct5y - cF5K);
            if (this.gA7t >= bq5v) {
                hz7s = Math.min(hz7s, ceP6J)
            }
            if (hz7s > 2) {
                this.bU5Z[0].insertAdjacentElement("afterEnd", this.bdu2x[0]);
                this.bhi3x.first = !0
            }
            for (var r4v;; bM5R++) {
                r4v = hz7s + bM5R - 1;
                if (r4v > this.ct5y) break;
                this.Ee5j(this.bU5Z[bM5R], r4v)
            }
        }
        if (this.ct5y < this.gA7t) {
            var r4v, hz7s = this.ct5y + 1;
            for (var i = 0, l = bq5v - 2;; i++, bM5R++) {
                r4v = hz7s + i;
                if (bM5R > l || r4v > this.gA7t) break;
                this.Ee5j(this.bU5Z[bM5R], r4v)
            }
            if (r4v < this.gA7t) {
                this.bU5Z[bM5R].insertAdjacentElement("beforeBegin", this.bdu2x[1]);
                this.bhi3x.last = !0
            }
            if (r4v <= this.gA7t) {
                this.Ee5j(this.bU5Z[bM5R++], this.gA7t)
            }
        }
        for (; bM5R < bq5v; bM5R++) {
            this.Ee5j(this.bU5Z[bM5R])
        }
    };
    a3x.ceN6H = cY5d.ceN6H = function(bI5N, e4i) {
        var C4G = a3x.lv8n(bI5N);
        if (!C4G) return null;
        if (!N4R.bba2x(C4G, N4R.ND8v)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a3x.dk6e(C4G) : a3x.H4L(C4G, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return N4R.bba2x(C4G, N4R.ND8v, e4i || bb4f)
    };
    cY5d.isChange = !0
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        N4R = c4g("nej.ui"),
        b4f, K4O, gi7b;
    if ( !! N4R.NA8s) return;
    N4R.NA8s = NEJ.C();
    b4f = N4R.NA8s.O4S(N4R.bgk3x);
    K4O = N4R.NA8s.cs5x;
    b4f.bl5q = function(e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bm5r(e4i);
        this.lp8h = I4M.ND8v.A4E(this.fP7I)
    };
    b4f.fY7R = function(d4h) {
        if ( !! this.bda2x.noend) {
            var bLB1x = d4h.ext || bb4f,
                i4m = bLB1x.list || fx6r;
            if (bLB1x.last) {
                a3x.ba4e(i4m[i4m.length - 1], "display", "none")
            }
        }
        K4O.fY7R.apply(this, arguments)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bc4g = c4g("nej.ui"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.bdx3x) return;
    N4R.bdx3x = NEJ.C();
    b4f = N4R.bdx3x.O4S(N4R.cH5M);
    b4f.bl5q = function(e4i) {
        this.jq8i = {};
        this.bm5r(e4i);
        this.ii7b = a3x.B4F(e4i.parent);
        this.fd6X = {
            parent: this.ii7b
        };
        this.pd0x = parseInt(e4i.limit) || 10;
        this.zO4S = parseInt(e4i.first) || this.pd0x;
        this.ceL6F(e4i.item);
        this.ceK6E(e4i.cache || bb4f);
        this.ceI6C(e4i.pager || bb4f);
        this.gB7u()
    };
    b4f.bD5I = function() {
        this.z4D("onbeforerecycle");
        this.Nu8m();
        this.bG5L();
        if (this.jq8i.clear) {
            this.S4W.ut2x(this.jq8i.key)
        }
        this.S4W.T4X();
        if ( !! this.jo8g) {
            this.jo8g.T4X();
            delete this.jo8g
        }
        delete this.bLz1x;
        delete this.fP7I;
        delete this.bdH3x;
        delete this.S4W;
        delete this.ii7b;
        delete this.Ns8k;
        delete this.fd6X;
        delete this.jq8i
    };
    b4f.bLy1x = function() {
        var dh6b = /\{(.*?)\}/gi,
            ceB6v = function(or9i, j4n) {
                return (or9i || "{id}{seed}").replace(dh6b, function($1, $2) {
                    var D4H = j4n[$2];
                    return D4H == null ? $1 : D4H
                })
            };
        return function(C4G) {
            var J4N = ceB6v(this.fd6X.jstIdTempalte, {
                id: C4G,
                seed: a3x.Ja6U()
            });
            if (!this.fd6X.jstIdType) {
                return a3x.B4F(J4N)
            } else if (this.fd6X.jstIdType == 1) {
                return (a3x.H4L(this.ii7b, J4N) || [])[0]
            }
        }
    }();
    b4f.Bk4o = function(bM5R, bi4m, gc7V, bq5v) {
        var o4s = {
            index: 1,
            total: 1
        };
        if (bi4m >= bM5R) {
            o4s.index = Math.floor((bi4m - bM5R) / gc7V) + 2
        }
        if (bq5v > bM5R) {
            o4s.total = Math.ceil((bq5v - bM5R) / gc7V) + 1
        }
        return o4s
    };
    b4f.bLx1x = function(J4N) {
        delete this.Ns8k;
        this.MA7t = J4N;
        this.bX5c([
            [this.ii7b, "click", this.cez6t.g4k(this)]
        ])
    };
    b4f.ceL6F = function(p4t) {
        if (k4o.fG7z(p4t)) {
            this.bLx1x(p4t);
            return
        }
        NEJ.X(this.fd6X, p4t);
        var dY6S = this.fd6X.klass;
        delete this.fd6X.klass;
        if (k4o.fG7z(dY6S)) {
            this.bLx1x(dY6S);
            return
        }
        delete this.MA7t;
        this.Ns8k = dY6S;
        this.fd6X.ondelete = this.z4D.g4k(this, "ondelete");
        this.fd6X.onupdate = this.z4D.g4k(this, "onupdate")
    };
    b4f.ceK6E = function(R4V) {
        var dY6S = R4V.klass,
            ka8S = NEJ.X({}, R4V);
        this.jq8i.key = ka8S.lkey;
        this.jq8i.data = ka8S.data || {};
        this.jq8i.clear = !! ka8S.clear;
        this.fd6X.pkey = ka8S.key || "id";
        ka8S.onlistload = this.bin4r.g4k(this);
        ka8S.onpullrefresh = this.cey6s.g4k(this);
        if ( !! dY6S && "onlistchange" in dY6S) {
            this.bX5c([
                [dY6S, "listchange", this.bip4t.g4k(this)]
            ])
        } else {
            ka8S.onitemadd = this.bdX3x.g4k(this);
            ka8S.onitemdelete = this.bdZ3x.g4k(this);
            ka8S.onitemupdate = this.bLw1x.g4k(this)
        }
        this.S4W = (dY6S || N4R.Uv0x).A4E(ka8S);
        if (R4V.total != null) {
            this.S4W.UD0x(this.jq8i.key, R4V.total)
        }
        if ( !! R4V.list) {
            this.S4W.uu2x(this.jq8i.key, R4V.list)
        }
    };
    b4f.ceI6C = function(tC1x) {
        this.bLz1x = tC1x.klass || bc4g.NA8s;
        this.fP7I = NEJ.X({}, tC1x);
        if (k4o.eJ6D(tC1x.parent)) {
            this.fP7I.parent = tC1x.parent[0];
            this.Ng7Z = tC1x.parent.slice(1);
            if (!this.Ng7Z || !this.Ng7Z.length) {
                delete this.Ng7Z
            }
        }
        delete this.fP7I.klass
    };
    b4f.Nu8m = function() {
        var gK7D = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z4D("onbeforelistclear", {
                parent: this.ii7b
            });
            if ( !! this.fL7E && this.fL7E.length > 0) {
                this.fL7E = this.Ns8k.T4X(this.fL7E);
                delete this.fL7E
            }
            if (gK7D.test(this.ii7b.tagName)) {
                a3x.bOO1x(this.ii7b)
            } else {
                this.ii7b.innerHTML = ""
            }
        }
    }();
    b4f.biw4A = function(beb3x) {
        if ( !! this.fP7I.fixed) return;
        a3x.ba4e(this.fP7I.parent, "display", beb3x);
        k4o.bd4h(this.Ng7Z, function(bI5N) {
            a3x.ba4e(bI5N, "display", beb3x)
        }, this)
    };
    b4f.biz4D = function() {
        var r4v = this.fP7I.index || 1;
        delete this.fP7I.index;
        if ( !! this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        this.Be4i({
            last: r4v,
            index: r4v
        })
    };
    b4f.Be4i = function(d4h) {
        this.z4D("onpagechange", d4h)
    };
    b4f.bLv1x = function(bi4m) {
        this.jq8i.offset = bi4m;
        this.VQ0x()
    };
    b4f.bLu1x = function(e4i) {
        return e4i
    };
    b4f.VQ0x = function() {
        this.Nd7W();
        var j4n = this.jq8i.data;
        j4n.offset = this.jq8i.offset;
        var pG0x = j4n.offset == 0;
        j4n.total = pG0x;
        this.jq8i.limit = pG0x ? this.zO4S : this.pd0x;
        j4n.limit = this.jq8i.limit;
        this.S4W.lK9B(this.bLu1x(NEJ.X({}, this.jq8i)))
    };
    b4f.bin4r = function(e4i) {
        if (e4i.key != this.jq8i.key || e4i.offset != this.jq8i.offset) return;
        this.bed3x();
        var i4m = this.S4W.hD7w(e4i.key);
        if (!i4m || !i4m.length) {
            this.biH4L();
            return
        }
        var gc7V = e4i.limit,
            bi4m = e4i.offset;
        if (this.biI4M(i4m, bi4m, gc7V)) return;
        this.z4D("onbeforelistrender", {
            list: i4m,
            offset: bi4m,
            parent: this.ii7b
        });
        if ( !! this.MA7t) {
            this.fd6X.xlist = i4m;
            this.fd6X.beg = bi4m;
            this.fd6X.end = Math.min(i4m.length, bi4m + gc7V) - 1;
            this.fd6X.act = "list";
            var dT6N = a3x.bZ5e(this.MA7t, this.fd6X);
            this.Nb7U(dT6N)
        } else {
            this.fd6X.limit = gc7V;
            this.fd6X.offset = bi4m;
            var ho7h = a3x.AS4W(i4m, this.Ns8k, this.fd6X);
            this.Na7T(ho7h)
        }
        this.z4D("onafterlistrender", {
            list: i4m,
            offset: bi4m,
            parent: this.ii7b
        })
    };
    b4f.cey6s = function(e4i) {
        if (!this.bdH3x) return;
        delete this.bdH3x;
        this.bed3x("onafterpullrefresh");
        this.gB7u()
    };
    b4f.bLs1x = function(r4v, cy5D) {
        if ( !! this.jo8g) {
            var xm3x = this.jo8g.tD1x(),
                cep6j = this.jo8g.kq8i();
            if (xm3x > cy5D || cy5D != cep6j) {
                this.jo8g.T4X();
                delete this.jo8g;
                this.Be4i({
                    last: xm3x,
                    index: Math.min(r4v, cy5D)
                });
                return !0
            }
        } else {
            this.fP7I.index = r4v;
            this.fP7I.total = cy5D;
            this.jo8g = this.bLz1x.A4E(this.fP7I);
            this.jo8g.xp3x("onchange", this.Be4i.g4k(this));
            k4o.bd4h(this.Ng7Z, function(bI5N) {
                this.jo8g.g4k(bI5N)
            }, this)
        }
    };
    b4f.bei3x = function() {
        var gJ7C = +(new Date);
        return function(j4n) {
            var C4G = j4n[this.fd6X.pkey];
            if (!C4G) {
                j4n["dirty-data"] = !0;
                j4n[this.fd6X.pkey] = "dirty-" + gJ7C++
            }
            return j4n
        }
    }();
    b4f.bej3x = function(j4n) {
        var C4G = j4n[this.fd6X.pkey];
        if ( !! j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.fd6X.pkey]
        }
        return C4G
    };
    b4f.bel3x = function() {
        var ceo6i = function(kL8D, mx9o) {
            this.ii7b.insertAdjacentElement(kL8D, mx9o)
        };
        return function(kL8D, j4n) {
            var Jh6b = [j4n];
            if ( !! this.MA7t) {
                this.fd6X.xlist = Jh6b;
                this.fd6X.beg = 0;
                this.fd6X.end = 0;
                this.fd6X.act = "add";
                this.Nb7U(a3x.bZ5e(this.MA7t, this.fd6X), kL8D)
            } else {
                this.fd6X.limit = 1;
                this.fd6X.offset = 0;
                this.fd6X.parent = ceo6i.g4k(this, kL8D);
                var ho7h = a3x.AS4W(Jh6b, this.Ns8k, this.fd6X);
                this.fd6X.parent = this.ii7b;
                this.Na7T(ho7h)
            }
        }
    }();
    b4f.Nd7W = bs5x;
    b4f.bed3x = function(V4Z) {
        var d4h = {
            parent: this.ii7b
        };
        this.z4D(V4Z || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a3x.mY9P(this.cv5A)
        }
    };
    b4f.biI4M = bs5x;
    b4f.ben3x = function(bH5M, kL8D) {
        if (k4o.fG7z(bH5M)) {
            if (!this.cv5A) this.cv5A = a3x.dg6a("div");
            this.cv5A.innerHTML = bH5M
        } else {
            this.cv5A = bH5M
        }
        this.ii7b.insertAdjacentElement(kL8D || "beforeEnd", this.cv5A)
    };
    b4f.yT3x = function(V4Z, kg8Y, kL8D) {
        var d4h = {
            parent: this.ii7b
        };
        this.z4D(V4Z, d4h);
        if (!d4h.stopped) {
            this.ben3x(d4h.value || kg8Y, kL8D)
        }
    };
    b4f.biH4L = bs5x;
    b4f.Nb7U = bs5x;
    b4f.Na7T = bs5x;
    b4f.cez6t = function() {
        var gK7D = /^(?:delete|update)$/;
        return function(d4h) {
            var f4j = h4l.W4a(d4h, "d:action");
            if (!f4j) return;
            var U4Y = a3x.t4x(f4j, "action");
            if (!gK7D.test(U4Y)) return;
            var C4G = a3x.t4x(f4j, "id");
            if (!C4G) return;
            var p4t = this.S4W.eH6B(C4G);
            if (!p4t) return;
            h4l.bh4l(d4h);
            this.z4D("on" + U4Y, {
                data: p4t,
                id: p4t[this.fd6X.pkey],
                body: a3x.B4F(this.bLy1x(C4G))
            })
        }
    }();
    b4f.bdX3x = bs5x;
    b4f.VP0x = function(d4h) {
        var j4n = d4h.data || {}, e4i = {
            data: j4n,
            key: this.jq8i.key,
            id: j4n[this.fd6X.pkey]
        };
        this.z4D("onbeforedelete", e4i);
        this.S4W.Kc7V(e4i)
    };
    b4f.bdZ3x = bs5x;
    b4f.VO0x = function(d4h) {
        var j4n = d4h.data || {}, e4i = {
            data: j4n,
            key: this.jq8i.key
        };
        this.z4D("onbeforeupdate", e4i);
        this.S4W.VR0x(e4i)
    };
    b4f.bLw1x = function(d4h) {
        this.MR7K(d4h, "onafterupdate");
        if (d4h.stopped) return;
        var C4G = d4h.data[this.fd6X.pkey];
        if ( !! this.fL7E) {
            var p4t = a3x.bTd3x(C4G);
            if ( !! p4t) p4t.gB7u(d4h.data)
        } else {
            var f4j = a3x.B4F(C4G + "" + a3x.Ja6U());
            if (!f4j) return;
            var i4m = this.S4W.hD7w(d4h.key),
                r4v = k4o.di6c(i4m, d4h.data);
            if (r4v < 0) return;
            this.fd6X.list = i4m;
            this.fd6X.beg = r4v;
            this.fd6X.end = r4v;
            this.fd6X.act = "update";
            var dT6N = a3x.bZ5e(this.MA7t, this.fd6X);
            f4j.insertAdjacentHTML("afterEnd", dT6N);
            a3x.cJ5O(f4j)
        }
    };
    b4f.MR7K = function(d4h, V4Z) {
        var p4t = d4h.data;
        if (!p4t || p4t[this.fd6X.pkey] == null) {
            this.z4D("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.z4D(V4Z, d4h)
        }
    };
    b4f.bje4i = bs5x;
    b4f.bjf4j = bs5x;
    b4f.bip4t = function(d4h) {
        if (d4h.key != this.jq8i.key) return;
        switch (d4h.action) {
            case "add":
                this.bdX3x(d4h);
                break;
            case "delete":
                this.bdZ3x(d4h);
                break;
            case "update":
                this.bLw1x(d4h);
                break;
            case "refresh":
                this.gB7u();
                break;
            case "unshift":
                this.bjf4j(d4h.offset, d4h.limit);
                break;
            case "append":
                this.bje4i(d4h.offset, d4h.limit);
                break
        }
    };
    b4f.pu0x = function(p4t) {
        this.VO0x({
            data: p4t
        })
    };
    b4f.my9p = function(p4t) {
        this.VP0x({
            data: p4t
        })
    };
    b4f.tM2x = function(p4t) {
        this.S4W.jw8o({
            data: p4t,
            key: this.jq8i.key
        })
    };
    b4f.tK1x = function() {
        return this.S4W
    };
    b4f.bjo4s = function(j4n) {
        this.bel3x("afterBegin", this.bei3x(j4n));
        return this.bej3x(j4n)
    };
    b4f.bLr1x = function(j4n) {
        this.bel3x("beforeEnd", this.bei3x(j4n));
        return this.bej3x(j4n)
    };
    b4f.gB7u = function() {
        this.Nu8m();
        this.biz4D()
    };
    b4f.cFx2x = function() {
        this.S4W.ut2x(this.jq8i.key);
        this.gB7u()
    };
    b4f.bsW6Q = function() {
        if ( !! this.bdH3x) return;
        this.bdH3x = !0;
        this.yT3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.S4W.bsW6Q({
            key: this.jq8i.key,
            data: this.jq8i.data
        })
    };
    b4f.kq8i = function() {
        return this.S4W.kq8i(this.jq8i.key)
    };
    b4f.bLq1x = function() {
        return this.jo8g
    };
    b4f.VW0x = function() {
        return this.S4W.VW0x(this.jq8i.key)
    };
    b4f.cek6e = function() {
        return this.fL7E
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut"),
        b4f, K4O;
    if ( !! N4R.kx8p) return;
    N4R.kx8p = NEJ.C();
    b4f = N4R.kx8p.O4S(N4R.bdx3x);
    K4O = N4R.kx8p.cs5x;
    b4f.Bk4o = function(bi4m, bq5v) {
        return K4O.Bk4o.call(this, this.zO4S, bi4m, this.pd0x, bq5v)
    };
    b4f.bjC4G = function(r4v) {
        var bi4m = 0;
        if (r4v > 1) bi4m = this.zO4S + (r4v - 2) * this.pd0x;
        return bi4m
    };
    b4f.Be4i = function(d4h) {
        K4O.Be4i.apply(this, arguments);
        if (!d4h.stopped) {
            this.bLv1x(this.bjC4G(d4h.index))
        }
    };
    b4f.Nd7W = function() {
        this.Nu8m();
        this.yT3x("onbeforelistload", "列表加载中...")
    };
    b4f.bed3x = function() {
        K4O.bed3x.apply(this, arguments);
        this.Nu8m()
    };
    b4f.biI4M = function(i4m, bi4m, gc7V) {
        var by5D = this.Bk4o(bi4m, i4m.length);
        if (this.bLs1x(by5D.index, by5D.total)) return !0;
        this.biw4A(by5D.total > 1 ? "" : "none")
    };
    b4f.biH4L = function() {
        this.yT3x("onemptylist", "没有列表数据！")
    };
    b4f.ben3x = function(bH5M, kL8D) {
        if (!kL8D && k4o.fG7z(bH5M)) {
            this.ii7b.innerHTML = bH5M;
            return
        }
        K4O.ben3x.apply(this, arguments)
    };
    b4f.Nb7U = function(dT6N) {
        this.ii7b.innerHTML = dT6N
    };
    b4f.Na7T = function(ho7h) {
        this.fL7E = ho7h
    };
    b4f.bdX3x = function(d4h) {
        this.MR7K(d4h, "onafteradd");
        if (!d4h.stopped) this.gB7u()
    };
    b4f.bdZ3x = function(d4h) {
        this.MR7K(d4h, "onafterdelete");
        if (!d4h.stopped) this.gB7u()
    };
    b4f.bje4i = function(bi4m, gc7V) {
        var r4v = 1;
        if ( !! this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        var jT8L = this.bjC4G(r4v),
            fR7K = jT8L + (r4v > 1 ? this.pd0x : this.zO4S);
        if (bi4m >= fR7K && !! this.jo8g) {
            var by5D = this.Bk4o(0, this.kq8i());
            this.jo8g.bgE3x(by5D.total);
            this.biw4A(by5D.total > 1 ? "" : "none")
        } else {
            this.gB7u()
        }
    };
    b4f.bjf4j = function(bi4m, gc7V) {
        var r4v = 1;
        if ( !! this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        var jT8L = this.bjC4G(r4v),
            by5D = this.Bk4o(jT8L, this.kq8i());
        this.Be4i({
            last: r4v,
            index: by5D.index
        })
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        w4A = c4g("nm.w"),
        fo6i = 40,
        b4f, K4O;
    w4A.bew3x = NEJ.C();
    b4f = w4A.bew3x.O4S(I4M.cH5M);
    K4O = w4A.bew3x.cs5x;
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.MJ7C = e4i.inputer;
        this.bjG4K = e4i.tipper;
        this.bX5c([
            [this.MJ7C, "input", this.fN7G.g4k(this)]
        ])
    };
    b4f.bD5I = function() {
        this.bG5L();
        this.MC7v(null, null)
    };
    b4f.fN7G = function(d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
        var V4Z = this.MJ7C.value,
            cFy2x;
        if (l4p.Sh9Y(V4Z) > fo6i) {
            this.MJ7C.value = l4p.CZ5e(V4Z, fo6i);
            this.MC7v("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
        } else if (V4Z.indexOf("#") >= 0 || V4Z.indexOf("@") >= 0) {
            this.MC7v("歌单名不能包含字符“@”和“#”！")
        } else {
            this.MC7v(null, null);
            this.z4D("onchange", {
                value: V4Z
            })
        }
    };
    b4f.ceh6b = function() {
        this.fN7G()
    };
    b4f.MC7v = function() {
        var C4G = 0;
        return function(dH6B, bLp1x) {
            if ( !! C4G) window.clearTimeout(C4G);
            if (!dH6B) {
                a3x.y4C(this.bjG4K, "f-vhide");
                this.bLo1x = !1;
                return
            }
            this.bjG4K.innerHTML = '<i class="u-icn u-icn-25"></i>' + dH6B;
            a3x.x4B(this.bjG4K, "f-vhide");
            this.bLo1x = !0;
            if (k4o.gG7z(bLp1x)) C4G = window.setTimeout(function() {
                this.MC7v(null, null);
                bLp1x()
            }.g4k(this), 1e3)
        }
    }();
    b4f.bLn1x = function() {
        if (this.bLo1x) return !1;
        if (l4p.jL8D(this.MJ7C.value)) {
            this.MC7v("歌单名不能为空");
            return !1
        }
        return !0
    };
    b4f.fS7L = function() {
        return this.MJ7C.value
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    m4q.bes3x = NEJ.C();
    b4f = m4q.bes3x.O4S(m4q.en6h);
    K4O = m4q.bes3x.cs5x;
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.bdJ3x = {
            inputer: i4m[0],
            tipper: i4m[1]
        };
        this.iE8w = {
            onerror: this.bLm1x.g4k(this),
            onitemadd: this.bLm1x.g4k(this)
        };
        this.lG9x = i4m[2];
        h4l.s4w(i4m[2], "click", this.FK5P.g4k(this));
        h4l.s4w(i4m[3], "click", this.BH4L.g4k(this));
        h4l.s4w(this.n4r, "keypress", this.bLl1x.g4k(this))
    };
    b4f.ce5j = function() {
        this.cd5i = "m-wgt-create"
    };
    b4f.bl5q = function(e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm5r(e4i);
        this.bdJ3x.inputer.value = e4i.name || "";
        this.va2x = w4A.bew3x.A4E(this.bdJ3x);
        this.va2x.ceh6b();
        this.S4W = q4u.ig7Z.A4E(this.iE8w);
        setTimeout(function() {
            this.bdJ3x.inputer.focus()
        }.g4k(this), 0)
    };
    b4f.bD5I = function() {
        this.bG5L();
        if (this.va2x) {
            this.va2x.T4X();
            delete this.va2x
        }
        this.tt1x(!1);
        this.bdJ3x.inputer.value = ""
    };
    b4f.tt1x = function(NP8H) {
        this.oN0x = NP8H;
        if (NP8H) {
            this.lG9x.innerHTML = "<i>新建中...</i>";
            a3x.y4C(this.lG9x, "u-btn2-dis")
        } else {
            this.lG9x.innerHTML = "<i>新 建</i>";
            a3x.x4B(this.lG9x, "u-btn2-dis")
        }
    };
    b4f.FK5P = function() {
        if (this.oN0x || !this.va2x.bLn1x()) return;
        var cq5v = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.va2x.fS7L()
            },
            offset: 1
        };
        this.S4W.jw8o(cq5v);
        this.tt1x(!0)
    };
    b4f.bLm1x = function(d4h) {
        var cm5r = (d4h.result || bb4f).code;
        if (!cm5r) {
            this.z4D("onsuccess", d4h.data)
        } else {
            this.z4D("onerror", d4h)
        }
        this.bu5z()
    };
    b4f.BH4L = function() {
        this.bu5z()
    };
    b4f.bLl1x = function(d4h) {
        if (d4h.keyCode == 13) this.FK5P()
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.bkg4k = NEJ.C();
    b4f = m4q.bkg4k.O4S(m4q.en6h);
    K4O = m4q.bkg4k.cs5x;
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.iC8u = {
            limit: 301,
            parent: i4m[1],
            cache: {
                klass: q4u.ig7Z,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkm4q.g4k(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l4p.Dc5h,
                escape: k4o.dG6A
            }
        };
        this.iE8w = {
            onsuccess: this.bdd2x.g4k(this),
            onerror: this.eI6C.g4k(this)
        };
        h4l.s4w(i4m[0], "click", this.FK5P.g4k(this));
        h4l.s4w(i4m[1], "click", this.lA9r.g4k(this))
    };
    b4f.ce5j = function() {
        this.cd5i = "m-wgt-subscribe"
    };
    b4f.bl5q = function(e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bm5r(e4i);
        this.bdc2x = (e4i.tracks || []).reverse();
        this.iC8u.item.size = this.bdc2x.length;
        this.iE8w.name = e4i.name || "";
        this.bLk1x = q4u.xc3x.A4E({
            onaddsuccess: this.AL4P.g4k(this)
        });
        this.sM1x = q4u.ig7Z.A4E({
            onlistload: this.cea6U.g4k(this)
        });
        this.sM1x.bQk2x();
        k4o.bd4h(this.bdc2x, function(p4t, r4v, i4m) {
            if (!k4o.lw8o(p4t)) {
                i4m[r4v] = this.bLk1x.eH6B(p4t) || p4t
            }
        }, this)
    };
    b4f.cea6U = function() {
        if (this.dK6E) this.dK6E.T4X();
        this.dK6E = I4M.kx8p.A4E(this.iC8u)
    };
    b4f.FK5P = function() {
        this.bu5z();
        if (this.FX5c) this.FX5c.T4X();
        this.FX5c = m4q.bes3x.A4E(this.iE8w);
        this.FX5c.L4P()
    };
    b4f.lA9r = function() {
        var cdZ6T = function(f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function(d4h) {
            h4l.cp5u(d4h);
            var F4J = h4l.W4a(d4h),
                Mu7n = cdZ6T(F4J);
            if ( !! Mu7n && !a3x.bE5J(Mu7n, "dis")) {
                this.bdd2x({
                    id: a3x.t4x(Mu7n, "id")
                })
            }
        }
    }();
    b4f.bdd2x = function(d4h) {
        var C4G = d4h.id;
        if (!C4G || !this.bdc2x.length) return;
        this.bLk1x.jw8o({
            key: "track_playlist-" + C4G,
            data: {
                tracks: this.bdc2x,
                pid: C4G
            }
        });
        this.bu5z()
    };
    b4f.AL4P = function() {
        this.z4D("onsuccess");
        m4q.Z4d.L4P({
            tip: "收藏成功"
        })
    };
    b4f.eI6C = function(d4h) {
        this.bu5z();
        this.z4D("onerror", d4h);
        var cV5a = "收藏失败";
        switch (d4h.code) {
            case 405:
                cV5a = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cV5a = "歌单数量超过限制";
                break;
            case 502:
                cV5a = "歌曲已经存在"
        }
        m4q.Z4d.L4P({
            tip: cV5a,
            type: 2
        })
    };
    b4f.bkm4q = function() {
        this.bu5z();
        m4q.Z4d.L4P({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l4p.mq9h = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m4q.bkg4k.L4P(e4i)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        dv6p = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x");
    var bky4C, pg0x, Y4c = decodeURIComponent(location.href),
        jY8Q = /.+(https?:\/\/.+\/proxy.html)/.test(Y4c) ? RegExp.$1 : "";
    if ( !! jY8Q) {
        v4z.uW2x("mail_proxy_url", jY8Q)
    } else {
        jY8Q = v4z.sw1x("mail_proxy_url") || "about:blank"
    }
    bky4C = a3x.bdk2x({
        src: jY8Q,
        onload: function() {
            pg0x = true
        }
    });
    var bLj1x = function() {
        v4z.gy7r("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cdX6R = function() {
        if (dv6p.ds6m.browser == "ie" && parseInt(dv6p.ds6m.version) < 9) {
            l4p.fq6k({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l4p.Mr7k = function(u4y, C4G, U4Y) {
        if (!cdX6R()) return;
        bLj1x();
        if (U4Y == "stop") {
            if (!pg0x) throw "proxy not loaded";
            bLj1x();
            bky4C.contentWindow.location.replace(jY8Q + "#" + k4o.cE5J({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bky4C.contentWindow.location.replace(jY8Q + "#" + k4o.cE5J({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u4y,
                    id: C4G,
                    s: +(new Date),
                    action: U4Y
                })
            }))
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        m4q = c4g("nm.l"),
        q4u = c4g("nm.d");
    var kI8A = q4u.hR7K.A4E();
    var oP0x = q4u.xc3x.A4E({
        onlistload: cdU6O,
        onitemload: cdT6N,
        onerror: eI6C
    });
    var Gf5k = q4u.qk0x.A4E({
        onlistload: cdS6M,
        onitemload: cdR6L,
        onerror: eI6C
    });
    var bLg1x = {};

    function wu2x(d4h) {
        var f4j = h4l.W4a(d4h, "d:resAction"),
            U4Y = a3x.t4x(f4j, "resAction");
        if (f4j && (U4Y == "play" || U4Y == "addto")) {
            var u4y = parseInt(a3x.t4x(f4j, "resType"));
            bLf1x({
                action: U4Y,
                type: u4y,
                id: a3x.t4x(f4j, "resId"),
                from: a3x.t4x(f4j, "resFrom"),
                data: a3x.t4x(f4j, "resData"),
                order: a3x.t4x(f4j, "resOrder"),
                node: f4j
            });
            if (u4y != 13) bLe1x(f4j)
        }
    }
    function bLf1x(bS5X) {
        var U4Y = bS5X.action,
            u4y = bS5X.type,
            C4G = bS5X.id,
            ea6U = bS5X.from,
            j4n = bS5X.data,
            tb1x = bS5X.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C4G
                },
                ext: {
                    id: C4G,
                    action: U4Y,
                    type: u4y,
                    from: ea6U,
                    data: j4n,
                    node: bS5X.node
                }
            };
        if (U4Y != "play" && U4Y != "addto" || !u4y) return;
        if (window.GRef && GRef == "mail") {
            l4p.Mr7k(u4y, C4G, U4Y);
            return
        }
        switch (u4y) {
            case 13:
                e4i.key = "track_playlist-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 17:
                e4i.key = "program";
                e4i.id = C4G;
                Gf5k.VU0x(e4i);
                if (U4Y == "play") {
                    v4z.bn5s("/api/dj/program/listen", {
                        query: {
                            id: C4G
                        }
                    })
                }
                break;
            case 18:
                e4i.key = "track";
                e4i.id = C4G;
                oP0x.VU0x(e4i);
                break;
            case 19:
                e4i.key = "track_album-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 24:
                e4i.key = "track_day";
                oP0x.lK9B(e4i);
                break;
            case 2:
                e4i.key = "track_artist_top-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 70:
                e4i.key = "program_djradio-" + C4G + "-" + tb1x;
                e4i.data.radioId = C4G;
                e4i.data.asc = tb1x == 2;
                Gf5k.lK9B(e4i);
                break
        }
    }
    function bLd1x(i4m) {
        var o4s = [];
        k4o.bd4h(i4m, function(p4t) {
            if (p4t.mainSong) {
                p4t.mainSong.program = p4t;
                o4s.push(p4t.mainSong);
                p4t.localupdatetime = +(new Date);
                oP0x.ctF0x(p4t.mainSong);
                p4t.mainTrackId = p4t.mainSong.id;
                delete p4t.mainSong
            } else {
                var bLc1x = oP0x.eH6B(p4t.mainTrackId);
                bLc1x && o4s.push(bLc1x)
            }
        });
        return o4s
    }
    function bcz2x(i4m, e4i) {
        var rt0x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
            fV7O = e4i.action == "play";
        if (!i4m.length) return;
        if (e4i.type == 19) {
            i4m = l4p.Kg7Z(i4m, true, {
                play: true
            }, {
                source: "album",
                sourceid: e4i.id
            })
        } else {
            i4m = l4p.Kg7Z(i4m, true, {
                play: true
            })
        }
        k4o.bd4h(i4m, function(p4t) {
            p4t.source = l4p.bvg7Z({
                fid: e4i.from,
                fdata: e4i.data,
                type: e4i.type,
                rid: e4i.id
            }, p4t.id)
        });
        top.player.addTo(i4m, rt0x, fV7O);
        kI8A.UX0x({
            rid: e4i.id,
            type: e4i.type,
            hash: l4p.KN7G(),
            play: fV7O,
            source: e4i.from,
            sourceid: e4i.data
        })
    }
    function cdU6O(d4h) {
        var eu6o = d4h.ext || {};
        i4m = oP0x.hD7w(d4h.key);
        bcz2x(i4m, eu6o);
        if (eu6o.type == 13 && eu6o.action == "play" && i4m && i4m.length > 0) {
            bLe1x(eu6o.node);
            v4z.bn5s("/api/playlist/update/playcount", {
                query: {
                    id: eu6o.id
                }
            })
        }
    }
    function cdT6N(d4h) {
        var i4m = [oP0x.eH6B(d4h.id)],
            bj4n = i4m[0],
            rd0x = l4p.pB0x(bj4n),
            ta1x = bj4n.privilege || {};
        if (rd0x == 10) {
            l4p.tW2x(ta1x.fee || bj4n.fee, bj4n.id, "song", null, ta1x)
        } else if (rd0x == 100) {
            l4p.ir8j(null, null, null, true, bj4n)
        } else if (rd0x == 11) {
            l4p.bRd3x(bj4n.id, 18)
        } else {
            bcz2x(i4m, d4h.ext)
        }
    }
    function cdS6M(d4h) {
        var i4m = bLd1x(Gf5k.hD7w(d4h.key));
        bcz2x(i4m, d4h.ext)
    }
    function cdR6L(d4h) {
        var i4m = bLd1x([Gf5k.eH6B(d4h.id)]);
        bcz2x(i4m, d4h.ext)
    }
    function eI6C() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bLe1x(f4j) {
        var u4y = a3x.t4x(f4j, "resType"),
            C4G = a3x.t4x(f4j, "resId"),
            J4N = u4y + "-" + C4G;
        if (bLg1x[J4N]) return;
        var bLb1x = a3x.B4F("play-count"),
            bkZ4d = a3x.H4L(f4j.parentNode, "nb"),
            OE8w = null;
        if (bLb1x) {
            OE8w = bLb1x
        } else {
            OE8w = !! bkZ4d && !! bkZ4d[0] ? bkZ4d[0] : null
        }
        if (OE8w) {
            var cF5K = OE8w.innerHTML;
            if (/^\d+$/.test(cF5K)) {
                OE8w.innerText = +cF5K + 1
            }
            bLg1x[J4N] = true
        }
    }
    l4p.cdK6E = function(f4j) {
        h4l.s4w(f4j || document.body, "click", wu2x.g4k(this))
    };
    l4p.cdJ6D = function(U4Y, u4y, C4G) {
        bLf1x({
            action: U4Y,
            type: u4y,
            id: C4G
        })
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    q4u.fe6Y({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(o4s, e4i) {
                this.cdI6C(o4s, e4i)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            },
            onerror: function(o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(o4s, e4i) {
                e4i.options.picUrl = o4s.picUrl;
                this.bLa1x(e4i.options, e4i.result)
            },
            onerror: function(o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q4U, e4i) {
                this.qb0x("vid_info-" + e4i.data.nosKey, Q4U);
                return Q4U
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e4i) {},
            format: function(o4s, e4i) {
                e4i.data = e4i.data2;
                this.co5t("share-all", e4i)
            },
            onerror: "onshareerror"
        }
    });
    q4u.blg4k = NEJ.C();
    b4f = q4u.blg4k.O4S(q4u.hG7z);
    b4f.cdG6A = function() {
        var ur2x = function(Q4U, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.z4D("onvinfoerror", e4i.key, Q4U)
            } else {
                setTimeout(et6n.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var yH3x = function(Q4U, e4i) {
            this.z4D("onvinfo", e4i.key, Q4U)
        };
        var et6n = function(e4i) {
            var Y4c = e4i.url;
            v4z.bn5s(Y4c + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yH3x.ew6q(this, e4i),
                onerror: ur2x.ew6q(this, e4i)
            })
        };
        return function(e4i) {
            e4i.times = 0;
            et6n.call(this, e4i)
        }
    }();
    b4f.cFz2x = function() {
        var GA6u;
        var ur2x = function(Q4U, e4i) {
            if (Q4U.code > 0) {
                clearInterval(this.GB6v);
                this.z4D("onviderror", e4i.data.nosKey)
            }
        };
        var yH3x = function(J4N, Q4U) {
            if (Q4U.vid && Q4U.covers) {
                clearInterval(this.GB6v);
                this.z4D("onvid", J4N, Q4U)
            }
        };
        var et6n = function(e4i) {
            if (+(new Date) - GA6u > 60 * 60 * 1e3) {
                clearInterval(this.GB6v);
                this.z4D("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = yH3x.g4k(this, e4i.data.nosKey);
            e4i.onerror = ur2x.g4k(this);
            this.co5t("vid-get", e4i)
        };
        return function(e4i) {
            if (!e4i || !e4i.data) return;
            GA6u = +(new Date);
            this.GB6v = clearInterval(this.GB6v);
            this.GB6v = setInterval(et6n.g4k(this, e4i), 1e4);
            et6n.apply(this, arguments)
        }
    }();
    b4f.cdE6y = function() {
        this.GB6v = clearInterval(this.GB6v)
    };
    b4f.cdI6C = function(o4s, oe9V) {
        if (o4s.event && oe9V.snsTypes) {
            if (oe9V.pics) {
                var bKY1x = [];
                for (var i = 0, len = oe9V.pics.length; i < len; i++) {
                    bKY1x[i] = oe9V.pics[i].originId
                }
                this.co5t("share_img_compound", {
                    data: {
                        picIds: bKY1x.join(",")
                    },
                    options: oe9V,
                    result: o4s
                })
            } else {
                oe9V.picUrl = oe9V.picUrl;
                this.bLa1x(oe9V, o4s)
            }
        } else {
            this.z4D("onshareall", o4s)
        }
        var tX2x = q4u.hR7K.A4E();
        tX2x.fu6o(oe9V.isPub ? "pubevent" : "shareevent", {
            id: o4s.id
        })
    };
    b4f.bLa1x = function(oe9V, o4s) {
        var cq5v = {}, d4h = o4s.event || {};
        cq5v.eventid = d4h.id;
        cq5v.eventtype = d4h.type;
        oe9V.picUrl && (cq5v.picUrl = oe9V.picUrl);
        cq5v.snsTypes = oe9V.snsTypes;
        cq5v.msg = oe9V.data.msg || "";
        cq5v.type = oe9V.data.type;
        oe9V.data.id && (cq5v.id = oe9V.data.id);
        if (cq5v.eventtype == 41) {
            var Q4U = l4p.EH5M(d4h.json);
            cq5v.eventtype = 39;
            if (cq5v.msg) {
                cq5v.msg += "  "
            }
            cq5v.msg += "分享" + Q4U.video.creator.nickname + "的视频《" + Q4U.video.title + "》";
            delete cq5v.id
        }
        this.co5t("share-sns", {
            data: cq5v,
            result: o4s
        })
    };
    b4f.cdC6w = function(e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.oh9Y(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (j4n.id < 0) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.co5t("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b4f.cdB6v = function(e4i) {
        this.co5t("share-private", e4i)
    };
    b4f.cdA6u = function(e4i) {
        this.co5t("video-submit", e4i)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    var cdy6s = {
        40: !0
    };
    q4u.fe6Y({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            },
            format: function(Q4U, e4i) {
                Q4U.event = l4p.YY1x(Q4U.event, function(p4t, r4v) {
                    return !cdy6s[p4t.type]
                });
                this.cdx6r(Q4U.event);
                e4i.data.lasttime = Q4U.lasttime;
                if (Q4U.event.length) {
                    Q4U.event.length = e4i.limit
                }
                return {
                    list: Q4U.event,
                    total: Q4U.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q4U, e4i) {
                return {
                    list: Q4U.events,
                    total: Q4U.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e4i) {
                e4i.data.pagesize = 20
            },
            format: function(Q4U, e4i) {
                return Q4U.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e4i) {
                if (e4i.data.offset == 0) {
                    e4i.data.time = -1
                }
                delete e4i.data.offset;
                e4i.data.getcounts = true
            },
            format: function(Q4U, e4i) {
                e4i.data.time = Q4U.lasttime;
                var i4m = Q4U.events;
                if (Q4U.more && i4m.length < e4i.data.limit) {
                    i4m = this.Me7X(i4m, e4i.data.limit)
                }
                return {
                    list: i4m,
                    total: Q4U.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(o4s, e4i) {
                o4s.conf = e4i.conf;
                return o4s
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e4i, bg4k) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bg4k.url = "/api/v1/comment/like"
                    } else {
                        bg4k.url = "/api/resource/like"
                    }
                    bg4k.onload = "oneventlike";
                    bg4k.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bg4k.url = "/api/v1/comment/unlike"
                    } else {
                        bg4k.url = "/api/resource/unlike"
                    }
                    bg4k.onload = "oneventunlike";
                    bg4k.onerror = "oneventunlikeerr"
                }
            },
            format: function(o4s, e4i) {
                o4s.eid = e4i.eid;
                o4s.origin = e4i.origin;
                o4s.ext = e4i.ext;
                return o4s
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e4i, bg4k) {
                if (e4i.data.type == "nointer") {
                    bg4k.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bg4k.url = "/api/event/video/transcoding/delete"
                } else {
                    bg4k.url = "/api/event/delete"
                }
            },
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            },
            format: function(Q4U, e4i) {
                e4i.data.lasttime = Q4U.lasttime;
                var i4m = Q4U.events;
                if (Q4U.more) i4m = this.Me7X(i4m, e4i.data.pagesize);
                return {
                    list: i4m,
                    total: Q4U.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q4u.yN3x = NEJ.C();
    b4f = q4u.yN3x.O4S(q4u.hG7z);
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.blD4H = function(u4y, cT5Y) {
        return u4y + "-" + cT5Y
    };
    b4f.cFE2x = function(e4i) {
        this.co5t("ievent-get", e4i)
    };
    b4f.cFF2x = function(e4i) {
        this.co5t("ievent-new-get", e4i)
    };
    b4f.cIp3x = function(e4i) {
        this.co5t("ievent-user-get", e4i)
    };
    b4f.cFI2x = function(u4y, cT5Y) {
        return this.sh0x(this.blD4H(u4y, cT5Y))
    };
    b4f.cFJ2x = function(LZ7S, e4i) {
        if (!LZ7S || !LZ7S.length) return;
        e4i = e4i || {};
        var bz5E = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Fj5o = [], bKS1x = [], j4n; i < LZ7S.length; ++i) {
            j4n = LZ7S[i];
            j4n = this.sh0x(this.blD4H(j4n.type, j4n.id));
            if (!j4n) {
                Fj5o.push(LZ7S[i].id);
                bKS1x.push(bz5E[LZ7S[i].type] || 0)
            }
        }
        if (!Fj5o.length) {
            this.z4D("oneventresload", e4i.conf);
            return
        }
        e4i.data = {
            ids: JSON.stringify(Fj5o),
            types: JSON.stringify(bKS1x)
        };
        e4i.onload = this.cdl6f.g4k(this);
        this.co5t("ievent-res-get", e4i)
    };
    b4f.cdl6f = function(o4s) {
        if (o4s.code != 200) {
            this.z4D("oneventreserror", o4s.code);
            return
        }
        var bz5E = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i4m = o4s.results; i < i4m.length; ++i) {
            this.qb0x(this.blD4H(bz5E[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.z4D("oneventresload", o4s.conf)
    };
    b4f.bKR1x = function(j4n) {
        var J4N = "event-list";
        this.brp6j(J4N, j4n);
        this.z4D("onitemadd", {
            key: J4N,
            action: "add",
            data: j4n,
            flag: -1
        })
    };
    b4f.pf0x = function(e4i) {
        this.co5t("ievent-like", e4i)
    };
    b4f.my9p = function(e4i) {
        this.co5t("ievent-delete", e4i)
    };
    b4f.Me7X = function(i4m, gc7V) {
        for (var i = i4m.length; i < gc7V; i++) i4m.push(null);
        return i4m
    };
    b4f.cdx6r = function(i4m) {
        var o4s = [];
        if (!i4m || !i4m.length) return;
        k4o.bd4h(i4m, function(d4h) {
            d4h.biData = this.bKQ1x(d4h)
        }, this)
    };
    b4f.bKQ1x = function() {
        var bbe2x = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }, cdf6Z = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d4h) {
            var Q4U = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: bbe2x[d4h.type] || (k4o.di6c(cdf6Z, d4h.type) != -1 ? "user_event" : "other")
            };
            return Q4U
        }
    }();
    b4f.GV6P = function(cdc6W, d4h) {
        var Q4U = this.bKQ1x(d4h);
        Q4U.actionType = cdc6W;
        if (window.log) log("eventclick", Q4U)
    };
    b4f.cFL2x = function(e4i) {
        this.co5t("event_latest-list", e4i)
    }
})();
(function(factory) {
    window.SparkMD5 = factory()
})(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length,
            state = [1732584193, - 271733879, - 1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length,
            state = [1732584193, - 271733879, - 1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function(contents) {
        this.sg0x += contents;
        this.bq5v += contents.length;
        var length = this.sg0x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO6I, md5blk(this.sg0x.substring(i - 64, i)))
        }
        this.sg0x = this.sg0x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function(raw) {
        var buff = this.sg0x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oF9w(tail, length);
        ret = hex(this.dO6I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function() {
        this.sg0x = "";
        this.bq5v = 0;
        this.dO6I = [1732584193, - 271733879, - 1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.sg0x,
            length: this.bq5v,
            hash: this.dO6I
        }
    };
    SparkMD5.prototype.setState = function(state) {
        this.sg0x = state.buff;
        this.bq5v = state.length;
        this.dO6I = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function() {
        delete this.dO6I;
        delete this.sg0x;
        delete this.bq5v
    };
    SparkMD5.prototype.oF9w = function(tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dO6I, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq5v * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dO6I, tail)
    };
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.sg0x.buffer, arr, true),
            length = buff.length,
            i;
        this.bq5v += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO6I, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.sg0x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.sg0x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oF9w(tail, length);
        ret = hex(this.dO6I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.sg0x = new Uint8Array(0);
        this.bq5v = 0;
        this.dO6I = [1732584193, - 271733879, - 1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oF9w = SparkMD5.prototype.oF9w;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        em6g = c4g("nej.g"),
        k4o = c4g("nej.u"),
        fH7A = c4g("nej.n"),
        I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        jx8p = c4g("nm.x.nos"),
        w4A = c4g("nm.w");
    var ccZ6T = 1024 * 256,
        ccV6P = 1024 * 1024 * 2,
        qM0x = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        }, bKJ0x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bs5x,
        rj0x = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        }, jH8z = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var of9W = {};
    var tX2x = q4u.hR7K.A4E();
    jx8p.cFM2x = function() {
        return jH8z
    };
    var ccL6F = function() {
        return k4o.oh9Y(6) + +(new Date)
    };
    var LS7L = function(iH8z, e4i) {
        if (!of9W[e4i.taskId]) {
            return
        }(e4i.onuploading || bs5x).call(this, iH8z)
    };
    var bmN5S = function(R4V) {
        var ccK6E = R4V.md5,
            cU5Z = R4V.file,
            ccJ6D = ccK6E + cU5Z.size;
        return "nos_file_hash_" + ccJ6D
    };
    var ccI6C = function(R4V) {
        var J4N = bmN5S(R4V),
            j4n = v4z.bRU3x(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var ccF6z = function(R4V, e4i) {
        if (!R4V.md5) {
            return
        }
        var J4N = bmN5S(R4V),
            j4n = v4z.bRU3x(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        v4z.uW2x(J4N, JSON.stringify(j4n))
    };
    var ccD6x = function(R4V) {
        var J4N = bmN5S(R4V);
        v4z.JV7O(J4N)
    };
    var ccC6w = function(R4V, fp6j) {
        var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)],
            cU5Z = R4V.file,
            lo8g = R4V.bucket,
            mO9F = R4V.objectKey,
            eL6F = R4V.token,
            bJ5O = R4V.context,
            ph0x = {}, PV8N = bKJ0x.call(cU5Z, R4V.beg, R4V.end),
            bv5A = {
                offset: R4V.beg,
                complete: R4V.lastChunk || false,
                version: "1.0"
            };
        if (bJ5O) {
            bv5A.context = bJ5O
        }
        ph0x["x-nos-token"] = eL6F;
        ph0x[em6g.yg3x] = cU5Z.type;
        R4V.reqId = v4z.bn5s(Y4c + "/" + lo8g + "/" + mO9F, {
            type: "json",
            method: "POST",
            headers: ph0x,
            query: bv5A,
            data: PV8N,
            onload: fp6j.onload,
            onerror: fp6j.onerror
        })
    };
    var ccz6t = function(o4s, R4V, e4i) {
        o4s = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: R4V.bucket,
            docId: R4V.docId,
            objectKey: R4V.objectKey,
            url: "//nos.netease.com/" + R4V.bucket + "/" + R4V.objectKey
        };
        ccD6x(R4V);
        if (!of9W[e4i.taskId]) {
            return
        }
        delete of9W[e4i.taskId];
        tX2x.fu6o("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o4s)
        });
        (e4i.onsuccess || bs5x).call(this, o4s)
    };
    var ccy6s = function(o4s, e4i) {
        (e4i.onerror || bs5x).call(this, o4s)
    };
    var ccu6o = function(o4s, R4V, e4i) {
        R4V.context = o4s.context;
        R4V.beg = o4s.offset;
        var iH8z = R4V.beg / R4V.file.size;
        ccF6z(R4V, {
            bucket: R4V.bucket,
            objectKey: R4V.objectKey,
            token: R4V.token,
            context: R4V.context,
            beg: R4V.beg,
            updateTime: +(new Date)
        });
        iH8z = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iH8z;
        LS7L(iH8z, e4i);
        if (R4V.lastChunk) {
            ccz6t(o4s, R4V, e4i)
        } else {
            baJ2x(R4V, e4i)
        }
    };
    var ccr6l = function(o4s, R4V, e4i) {
        tX2x.fu6o("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o4s.data,
            body: o4s.extData,
            ext: JSON.stringify(R4V),
            timging: +(new Date) - R4V.chuckUploadStartTime
        });
        if (R4V.urlIndex < Math.max(R4V.urls.length - 1, 5)) {
            R4V.urlIndex++;
            baJ2x(R4V, e4i)
        } else {
            ccy6s(o4s, e4i)
        }
    };
    var baJ2x = function(R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.end = R4V.beg + ccZ6T;
        if (R4V.end >= R4V.file.size) {
            R4V.end = R4V.file.size;
            R4V.lastChunk = true
        }
        R4V.chuckUploadStartTime = +(new Date);
        ccC6w(R4V, {
            onload: ccu6o.ew6q(this, R4V, e4i),
            onerror: ccr6l.ew6q(this, R4V, e4i)
        })
    };
    var ccq6k = function(o4s, R4V, e4i) {
        R4V.beg = o4s.offset;
        var iH8z = R4V.beg / R4V.file.size;
        iH8z = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iH8z;
        LS7L(iH8z, e4i);
        baJ2x(R4V, e4i)
    };
    var ccp6j = function(o4s, R4V, e4i) {
        R4V.beg = 0;
        delete R4V.context;
        bnl5q(R4V, e4i)
    };
    var bKC0x = function(Qf8X, R4V, e4i) {
        R4V.lastChunk = false;
        R4V.urls = Qf8X;
        R4V.urlIndex = 0;
        LS7L(rj0x.DNS_GET, e4i);
        if (R4V.fromExist) {
            delete R4V.fromExist;
            var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)],
                lo8g = R4V.bucket,
                mO9F = R4V.objectKey,
                eL6F = R4V.token,
                bJ5O = R4V.context,
                ph0x = {}, bv5A = {
                    context: bJ5O,
                    version: "1.0"
                };
            ph0x["x-nos-token"] = eL6F;
            R4V.reqId = v4z.bn5s(Y4c + "/" + lo8g + "/" + mO9F + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: ph0x,
                query: bv5A,
                onload: ccq6k.ew6q(this, R4V, e4i),
                onerror: ccp6j.ew6q(this, R4V, e4i)
            })
        } else {
            R4V.beg = 0;
            baJ2x(R4V, e4i)
        }
    };
    var cck6e = function(o4s, R4V, e4i) {
        o4s.code = qM0x.DNS_ERROR;
        (e4i.onerror || bs5x).call(this, o4s)
    };
    var bKz0x = function(j4n, e4i) {
        var o4s = j4n.result || {}, lo8g = o4s.bucket,
            mO9F = o4s.objectKey,
            eL6F = o4s.token,
            R4V = of9W[e4i.taskId];
        if (!lo8g || !mO9F || !eL6F || !R4V) {
            o4s.code = qM0x.TOKEN_ERROR;
            (e4i.onerror || bs5x).call(this, o4s);
            return
        }
        R4V.bucket = lo8g;
        R4V.objectKey = mO9F;
        R4V.docId = o4s.docId;
        R4V.token = eL6F;
        LS7L(rj0x.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            bKC0x(["//nosup-hz1.127.net"], R4V, e4i)
        } else {
            R4V.reqId = jx8p.cci5n({
                bucket: lo8g,
                onload: bKC0x.ew6q(this, R4V, e4i),
                onerror: cck6e.ew6q(this, R4V, e4i)
            })
        }
        R4V.step = 1
    };
    var cch5m = function(o4s, e4i) {
        o4s.code = qM0x.TOKEN_ERROR;
        (e4i.onerror || bs5x).call(this, o4s)
    };
    var bnl5q = function(R4V, e4i) {
        var cU5Z = e4i.file,
            ft6n = cU5Z.name || "",
            eu6o = ft6n.split(".").pop();
        jx8p.bak1x(NEJ.X({
            filename: ft6n,
            ext: eu6o,
            onload: bKz0x.ew6q(this, e4i),
            onerror: cch5m.ew6q(this, e4i)
        }, e4i, function(p4t) {
            return k4o.gG7z(p4t) || k4o.lw8o(p4t)
        }))
    };
    var ccf5k = function(R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.md5 = R4V.spark.end();
        var LD7w = ccI6C(R4V) || {}, lo8g = LD7w.bucket,
            mO9F = LD7w.objectKey,
            eL6F = LD7w.token;
        if (!lo8g || !mO9F || !eL6F) {
            bnl5q(R4V, e4i)
        } else {
            R4V.context = LD7w.context;
            R4V.beg = LD7w.beg;
            R4V.fromExist = true;
            bKz0x({
                result: LD7w
            }, e4i)
        }
    };
    var cce5j = function(Dn5s, R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.beg = R4V.end;
        var iH8z = R4V.beg / R4V.file.size;
        iH8z = 0 + rj0x.MD5_DONE * iH8z;
        LS7L(iH8z, e4i);
        R4V.spark.append(Dn5s.result);
        if (R4V.lastChunk) {
            ccf5k(R4V, e4i)
        } else {
            bKx0x(R4V, e4i)
        }
    };
    var ccc5h = function(o4s, R4V, e4i) {
        R4V.md5 = "";
        bnl5q(R4V, e4i)
    };
    var bKx0x = function(R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.end = R4V.beg + ccV6P;
        if (R4V.end >= R4V.file.size) {
            R4V.end = R4V.file.size;
            R4V.lastChunk = true
        }
        var Dn5s = new FileReader;
        Dn5s.onload = cce5j.g4k(this, Dn5s, R4V, e4i);
        Dn5s.onerror = ccc5h.g4k(this, Dn5s, R4V, e4i);
        Dn5s.readAsArrayBuffer(bKJ0x.call(R4V.file, R4V.beg, R4V.end))
    };
    jx8p.gQ7J = function(e4i) {
        var cU5Z = e4i.file,
            ft6n = cU5Z.name || "",
            eu6o = ft6n.split(".").pop(),
            Dp5u = ccL6F();
        e4i.taskId = Dp5u;
        of9W[Dp5u] = {
            step: 0
        };
        LS7L(0, e4i);
        var R4V = of9W[Dp5u];
        R4V.id = Dp5u;
        R4V.file = cU5Z;
        R4V.beg = 0;
        R4V.lastChunk = false;
        R4V.spark = new SparkMD5.ArrayBuffer;
        var ccb5g = e4i.onerror || bs5x;
        e4i.onerror = function() {
            if (!of9W[Dp5u]) {
                return
            }
            delete of9W[Dp5u];
            ccb5g.apply(this, arguments)
        };
        tX2x.fu6o("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bKx0x(R4V, e4i);
        return Dp5u
    };
    jx8p.ks8k = function(C4G) {
        var R4V = of9W[C4G];
        if (R4V) {
            if (R4V.step == 0) {
                delete of9W[C4G]
            } else {
                R4V.step = -1;
                if (R4V.reqId) {
                    v4z.ks8k(R4V.reqId)
                }
                delete of9W[C4G]
            }
        }
    };
    jx8p.bak1x = function() {
        var yB3x = function(o4s, e4i) {
            (e4i.onload || bs5x).call(this, o4s)
        };
        var AE4I = function(o4s, e4i) {
            (e4i.onerror || bs5x).call(this, o4s)
        };
        var bKw0x = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e4i) {
            var bah1x = e4i.returnBody || bKw0x;
            if (k4o.lw8o(bah1x)) {
                try {
                    JSON.stringify(bah1x)
                } catch (e) {
                    bah1x = bKw0x
                }
            }
            return v4z.bn5s("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || jH8z.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: bah1x
                },
                onload: yB3x.ew6q(this, e4i),
                onerror: AE4I.ew6q(this, e4i)
            })
        }
    }();
    jx8p.cci5n = function() {
        var cbZ5e = "//wanproxy.127.net/lbs";
        var yB3x = function(o4s, e4i) {
            if (o4s.lbs) {}
            var Qf8X = o4s.upload;
            if (!Qf8X || !Qf8X.length) {
                AE4I(o4s, e4i)
            }(e4i.onload || bs5x).call(this, Qf8X)
        };
        var AE4I = function(o4s, e4i) {
            (e4i.onerror || bs5x).call(this, o4s)
        };
        return function(e4i) {
            var lo8g = e4i.bucket;
            return v4z.bn5s(cbZ5e, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lo8g
                },
                onload: yB3x.ew6q(this, e4i),
                onerror: AE4I.ew6q(this, e4i)
            })
        }
    }();
    jx8p.ZV1x = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && ( !! Blob.prototype.webkitSlice || !! Blob.prototype.mozSlice || !! Blob.prototype.slice || false)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        jx8p = c4g("nm.x.nos"),
        E4I = c4g("nm.m"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        b4f, K4O;
    var gi7b = a3x.iu8m('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w4A.bKv0x = NEJ.C();
    b4f = w4A.bKv0x.O4S(bC5H.ei6c);
    b4f.ce5j = function() {
        this.cd5i = gi7b
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.bF5K = this.n4r;
        this.hK7D = a3x.H4L(this.n4r, "j-file")[0];
        h4l.s4w(this.hK7D, "change", this.rJ0x.g4k(this))
    };
    b4f.bl5q = function(e4i) {
        e4i = e4i || {};
        this.bm5r(e4i);
        this.hK7D.accept = e4i.accept || "*";
        this.xk3x = e4i
    };
    b4f.ZD1x = function() {
        return a3x.lv8n(this.hK7D)
    };
    b4f.rJ0x = function(d4h) {
        if (this.hK7D.value == "") return;
        var kE8w = this.hK7D.value.split("\\"),
            ft6n = kE8w.length > 0 ? kE8w[kE8w.length - 1] : kE8w[0],
            ox9o = (this.hK7D.files || [{}])[0];
        var cl5q = {
            files: this.hK7D.files,
            filename: ft6n,
            size: ox9o.size,
            cancelUpload: false
        };
        this.z4D("onchange", cl5q);
        if (cl5q.cancelUpload) {
            this.hK7D.value = "";
            return
        }
        if (cl5q.stopped) {
            return
        }
        this.Rr9i()
    };
    b4f.Rr9i = function() {
        if (this.hK7D.value == "") return;
        var kE8w = this.hK7D.value.split("\\"),
            ft6n = kE8w.length > 0 ? kE8w[kE8w.length - 1] : kE8w[0],
            eu6o = (ft6n.split(".") || []).pop(),
            ox9o = (this.hK7D.files || [{}])[0],
            DF5K = (ox9o.type || "").split("/").shift();
        if (ox9o.size > 100 * 1024 * 1024) {
            return this.mV9M("onerror", {
                code: -200
            })
        }
        this.z4D("onuploading", 0);
        this.bKu0x = jx8p.bak1x(NEJ.X({
            onload: this.Rs9j.ew6q(this, ft6n),
            onerror: this.mV9M.g4k(this)
        }, this.xk3x, function(p4t) {
            return k4o.gG7z(p4t) || k4o.lw8o(p4t)
        }))
    };
    b4f.Rs9j = function(bP5U, ft6n) {
        var o4s = bP5U.result || {}, lo8g = o4s.bucket,
            mO9F = o4s.objectKey,
            eL6F = o4s.token;
        if (!lo8g || !mO9F || !eL6F) {
            bP5U.code = -100;
            this.mV9M.call(this, bP5U);
            return
        }
        var ox9o = (this.hK7D.files || [{}])[0];
        var hQ7J = a3x.dk6e(this.bF5K);
        hQ7J[0].value = mO9F;
        hQ7J[1].value = eL6F;
        if (ox9o.type && ox9o.type.indexOf("audio") == 0) {
            hQ7J[3].value = "audio/mpeg"
        } else {
            hQ7J[3].value = ox9o.type || ""
        }
        this.bF5K.action = "//nos.netease.com/" + lo8g;
        this.DK5P = o4s;
        this.qs0x = ft6n;
        this.z4D("onuploading", .2);
        this.gQ7J()
    };
    b4f.gQ7J = function() {
        this.bKu0x = v4z.gQ7J(this.bF5K, {
            type: "json",
            onload: this.vG2x.g4k(this),
            onerror: this.mV9M.g4k(this),
            onuploading: this.Za1x.g4k(this)
        })
    };
    b4f.ks8k = function() {
        v4z.ks8k(this.bKu0x);
        this.bF5K.reset()
    };
    b4f.vG2x = function(bP5U) {
        var eL6F = this.DK5P,
            ft6n = this.qs0x,
            ox9o = (this.hK7D.files || [{}])[0],
            kg8Y = {
                code: 200,
                fileName: ft6n,
                size: ox9o.size,
                bucket: eL6F.bucket,
                docId: eL6F.docId,
                objectKey: eL6F.objectKey,
                url: "//nos.netease.com/" + eL6F.bucket + "/" + eL6F.objectKey
            };
        if (!bP5U) {
            bP5U = kg8Y
        }
        if (!bP5U.code || bP5U.code == 200) {
            this.z4D("onsuccess", NEJ.X(kg8Y, bP5U))
        } else {
            this.z4D("onerror", bP5U)
        }
        this.bF5K.reset()
    };
    b4f.mV9M = function(bP5U) {
        this.z4D("onerror", bP5U);
        this.bF5K.reset()
    };
    b4f.Za1x = function(iH8z) {
        this.z4D("onuploading", .2 + iH8z.loaded / iH8z.total * .8)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        jx8p = c4g("nm.x.nos"),
        E4I = c4g("nm.m"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        b4f, K4O;
    w4A.Rw9n = NEJ.C();
    b4f = w4A.Rw9n.O4S(ca5f.cH5M);
    b4f.bl5q = function(e4i) {
        e4i = e4i || {};
        this.bm5r(e4i);
        this.Yo1x = w4A.bKv0x.A4E(NEJ.X({
            parent: e4i.parent,
            onchange: this.rJ0x.g4k(this),
            onuploading: this.z4D.g4k(this, "onuploading"),
            onsuccess: this.z4D.g4k(this, "onsuccess"),
            onerror: this.z4D.g4k(this, "onerror")
        }, e4i, function(p4t) {
            return k4o.gG7z(p4t) || k4o.lw8o(p4t)
        }));
        if (e4i.multiple && jx8p.ZV1x()) {
            a3x.gh7a(this.Yo1x.ZD1x(), "multiple", true)
        }
        this.xk3x = e4i
    };
    b4f.rJ0x = function(e4i) {
        var ft6n = e4i.filename,
            eu6o = (ft6n.split(".") || []).pop();
        this.bKr0x = (e4i.files || [{}])[0];
        this.z4D("onchange", e4i);
        if (jx8p.ZV1x() && !e4i.stopped && !e4i.cancelUpload) {
            this.Rr9i(true);
            e4i.stopped = true
        }
    };
    b4f.ZD1x = function() {
        return this.Yo1x.ZD1x()
    };
    b4f.cbP5U = function() {
        return this.bKr0x
    };
    b4f.Rr9i = function(eV6P, cU5Z) {
        cU5Z = cU5Z || this.bKr0x;
        if (jx8p.ZV1x()) {
            this.bKq0x = jx8p.gQ7J(NEJ.X({
                file: cU5Z,
                local: this.xk3x.bucket && this.xk3x.bucket.length,
                onuploading: this.z4D.g4k(this, "onuploading"),
                onsuccess: this.z4D.g4k(this, "onsuccess"),
                onerror: this.z4D.g4k(this, "onerror")
            }, this.xk3x, function(p4t) {
                return k4o.gG7z(p4t) || k4o.lw8o(p4t)
            }));
            return this.bKq0x
        } else if (!eV6P) {
            this.Yo1x.Rr9i()
        }
    };
    b4f.ks8k = function(C4G) {
        C4G = C4G || this.bKq0x;
        if (C4G) {
            jx8p.ks8k(C4G)
        }
        this.Yo1x.ks8k()
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        em6g = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        fH7A = c4g("nej.n"),
        I4M = c4g("nej.ut"),
        bc4g = c4g("nej.ui"),
        w4A = c4g("nm.w"),
        m4q = c4g("nm.l"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        M4Q = c4g("nm.x.f"),
        jx8p = c4g("nm.x.nos"),
        b4f, K4O, boX5c = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        }, boY5d = 5 * 1024 * 1024,
        cFP2x = 80,
        bKp0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w4A.bKo0x = NEJ.C();
    b4f = w4A.bKo0x.O4S(I4M.vN2x);
    b4f.bnZ5e = function() {
        return {
            x: this.Bb4f.clientWidth - this.n4r.offsetWidth,
            y: this.Bb4f.clientHeight - this.n4r.offsetHeight
        }
    };
    w4A.bpi5n = NEJ.C();
    b4f = w4A.bpi5n.O4S(bc4g.ei6c);
    b4f.ce5j = function() {
        this.cd5i = "m-xwgt-share-upload"
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.XW1x = i4m.shift();
        this.Lb7U = i4m.shift();
        this.Sm9d = i4m.shift();
        this.bKn0x = {
            onchange: this.bKm0x.ew6q(this, 0),
            onerror: this.eI6C.g4k(this),
            onsuccess: this.tZ2x.g4k(this),
            multiple: true,
            parent: this.Lb7U,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bps5x = {
            onchange: this.bKm0x.ew6q(this, 1),
            onerror: this.eI6C.g4k(this),
            onsuccess: this.tZ2x.g4k(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cbH5M = w4A.Rw9n.A4E(this.bKn0x)
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.bps5x.parent = e4i.button;
        this.KV7O && this.KV7O.T4X();
        this.KV7O = w4A.Rw9n.A4E(this.bps5x);
        this.n4r.style.display = "none";
        if ( !! this.fa6U) {
            for (var i = this.fa6U.length - 1; i >= 0; i--) {
                a3x.cJ5O(this.fa6U[i].element, false);
                if (this.fa6U[i].dragger) this.fa6U[i].dragger.T4X()
            }
        }
        this.fa6U = [];
        if (this.Ah4l) {
            clearTimeout(this.Ah4l)
        }
        this.Xt0x(0);
        this.SJ9A = 0;
        this.bX5c([
            [this.bKn0x.parent, "click", this.bKl0x.g4k(this)],
            [this.bps5x.parent, "click", this.bKl0x.g4k(this)]
        ])
    };
    b4f.bD5I = function() {
        h4l.hd7W(this.sK1x, "click");
        if ( !! this.fa6U) {
            for (var i = this.fa6U.length - 1; i >= 0; i--) {
                a3x.cJ5O(this.fa6U[i].element, false);
                if (this.fa6U[i].dragger) this.fa6U[i].dragger.T4X()
            }
        }
        this.fa6U = [];
        if (this.Ah4l) {
            clearTimeout(this.Ah4l)
        }
        this.Ah4l = 0;
        this.KV7O && this.KV7O.T4X();
        delete this.KV7O;
        this.bG5L()
    };
    b4f.bKl0x = function(d4h) {
        if (!jx8p.ZV1x() && this.fa6U.doing) {
            h4l.bh4l(d4h)
        }
    };
    b4f.bKm0x = function(e4i, r4v) {
        var nz9q = e4i.files,
            iG8y;
        e4i.stopped = true;
        if (!nz9q) {
            if (e4i.filename) {
                nz9q = [{
                    name: e4i.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = nz9q.length; i < len; i++) {
            if (!bKp0x.test(nz9q[i].name)) {
                this.bpM6G({
                    path: nz9q[i].name,
                    index: r4v,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (nz9q[i].size > boY5d) {
                this.bpN6H(-3);
                this.bpM6G({
                    path: nz9q[i].name,
                    index: r4v,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpM6G({
                    path: nz9q[i].name,
                    file: nz9q[i],
                    index: r4v,
                    status: 0
                })
            }
        }
    };
    b4f.bpM6G = function(sR1x) {
        if (this.fa6U.length >= 9) {
            this.bpN6H(-10, 3e3, this.bKk0x.g4k(this));
            return
        }
        this.cbB5G(sR1x);
        this.fa6U.push(sR1x);
        if ( !! this.fa6U.length) {
            this.n4r.style.display = ""
        }
        if (this.fa6U.length >= 9) {
            this.Lb7U.style.display = "none"
        } else {
            this.Lb7U.style.display = ""
        }
        this.KP7I()
    };
    b4f.KP7I = function() {
        var bpX6R = -1,
            bKh0x = 0;
        for (var i = 0, l = this.fa6U.length; i < l; i++) {
            if (this.fa6U[i].status == 1) {
                return
            }
            if (this.fa6U[i].status == 0 && bpX6R < 0) {
                bpX6R = i
            }
            if (this.fa6U[i].status == 2 || this.fa6U[i].status < 0) {
                bKh0x++
            }
        }
        var p4t = this.fa6U[bpX6R];
        if (p4t) {
            (p4t.index == 0 ? this.cbH5M : this.KV7O).Rr9i(false, p4t.file);
            p4t.status = 1;
            this.fa6U.doing = p4t;
            this.z4D("onstartupload", {})
        } else if (bKh0x == this.fa6U.length) {
            this.z4D("onfinishupload", {})
        }
    };
    b4f.bpZ6T = function() {
        return this.fa6U.doing || {}
    };
    b4f.eI6C = function(d4h) {
        var sR1x = this.bpZ6T();
        sR1x.status = -4;
        sR1x.fail = "上传<br>失败";
        this.bKg0x(sR1x);
        this.fa6U.doing = null;
        this.KP7I()
    };
    b4f.tZ2x = function(d4h) {
        var sR1x = this.bpZ6T(),
            dN6H = d4h.fileName.match(bKp0x);
        sR1x.picUrl = d4h.url;
        v4z.bn5s("/upload/event/img/v1", {
            query: {
                imgid: d4h.docId,
                format: dN6H[1]
            },
            type: "json",
            onload: this.bKf0x.g4k(this),
            onerror: this.bKf0x.g4k(this)
        })
    };
    b4f.bKf0x = function(d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var sR1x = this.bpZ6T();
            sR1x.status = 2;
            var by5D = NEJ.X({}, d4h.picInfo);
            by5D.originId = by5D.originIdStr;
            by5D.squareId = by5D.squareIdStr;
            by5D.rectangleId = by5D.rectangleIdStr;
            by5D.pcSquareId = by5D.pcSquareIdStr;
            by5D.pcRectangleId = by5D.pcRectangleIdStr;
            by5D.originJpgId = by5D.originJpgIdStr || by5D.originJpgId;
            sR1x.picInfo = by5D;
            this.bKg0x(sR1x);
            this.fa6U.doing = null;
            this.KP7I()
        } else {
            this.eI6C(d4h)
        }
    };
    b4f.bpN6H = function(r4v, kO8G, fp6j) {
        if (this.SJ9A < r4v) {
            return
        }
        if (this.Ah4l) {
            clearTimeout(this.Ah4l);
            this.Ah4l = 0
        }
        if (kO8G) {
            this.Sm9d.innerText = boX5c[r4v * 1];
            this.SJ9A = r4v;
            this.Ah4l = setTimeout(this.Xt0x.g4k(this, r4v, fp6j), kO8G)
        } else {
            this.Sm9d.innerText = boX5c[r4v];
            this.SJ9A = r4v
        }
        this.Sm9d.style.display = ""
    };
    b4f.Xt0x = function(r4v, fp6j) {
        if (r4v && this.SJ9A !== r4v) {
            return
        }
        this.SJ9A = 0;
        this.Sm9d.innerText = boX5c[0];
        this.Sm9d.style.display = "none";
        fp6j && fp6j()
    };
    b4f.cbB5G = function(cU5Z) {
        var j4n = {};
        if (cU5Z.fail) {
            j4n.fail = cU5Z.fail
        }
        var dT6N = a3x.bZ5e("m-xwgt-share-upload-preview", j4n);
        cU5Z.element = a3x.nH9y(dT6N);
        h4l.s4w(a3x.H4L(cU5Z.element, "del")[0], "mousedown", this.cbo5t.g4k(this, cU5Z), false);
        this.XW1x.insertBefore(cU5Z.element, this.XW1x.lastElementChild);
        cU5Z.dragger = w4A.bKo0x.A4E({
            view: this.XW1x.parentNode,
            body: cU5Z.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Sz9q.g4k(this, cU5Z),
            onchange: this.cbn5s.g4k(this, cU5Z),
            ondragend: this.bns5x.g4k(this, cU5Z)
        })
    };
    b4f.bKg0x = function(cU5Z) {
        if (!cU5Z || !cU5Z.element) {
            return false
        }
        var j4n = {};
        if (cU5Z.fail) {
            j4n.fail = cU5Z.fail
        } else {
            j4n.url = cU5Z.picUrl
        }
        a3x.y4C(cU5Z.element, "z-fail");
        cU5Z.element.firstChild.outerHTML = a3x.bZ5e("m-xwgt-share-upload-preview-img", j4n)
    };
    b4f.Sz9q = function(p4t, kL8D) {
        a3x.y4C(p4t.element, "z-sel")
    };
    b4f.cbn5s = function(p4t, kL8D) {
        var cFQ2x, gt7m = this.fa6U.length - 1,
            ob9S;
        for (var i = gt7m; i >= 0; i--) {
            a3x.x4B(this.fa6U[i].element, "z-jump");
            if (this.fa6U[i] == p4t) {
                ob9S = i
            } else {
                a3x.eY6S(this.fa6U[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var ST9K = {
            x: 46 + 92 * (ob9S % 5) + kL8D.left,
            y: 46 + 92 * (ob9S / 5 >> 0) + kL8D.top
        };
        var bqo6i = ST9K.x / 92 >> 0,
            bqt6n = ST9K.y / 92 >> 0,
            yY3x = Math.max(0, Math.min(gt7m, bqt6n * 5 + bqo6i));
        if (yY3x == ob9S) {
            return
        }
        var cbj5o = yY3x < ob9S;
        for (var i = Math.min(yY3x, ob9S); i <= Math.max(yY3x, ob9S); i++) {
            if (i !== ob9S) {
                var bKb0x = i % 5;
                if (cbj5o) {
                    if (bKb0x == 4) {
                        a3x.eY6S(this.fa6U[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a3x.eY6S(this.fa6U[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bKb0x == 0) {
                        a3x.eY6S(this.fa6U[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a3x.eY6S(this.fa6U[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b4f.bns5x = function(p4t, kL8D) {
        var cFR2x, gt7m = this.fa6U.length - 1,
            ob9S;
        for (var i = gt7m; i >= 0; i--) {
            a3x.eY6S(this.fa6U[i].element, {
                left: "",
                top: ""
            });
            if (this.fa6U[i] == p4t) {
                ob9S = i
            }
        }
        a3x.x4B(p4t.element, "z-sel");
        var ST9K = {
            x: 46 + 92 * (ob9S % 5) + kL8D.left,
            y: 46 + 92 * (ob9S / 5 >> 0) + kL8D.top
        };
        var bqo6i = ST9K.x / 92 >> 0,
            bqt6n = ST9K.y / 92 >> 0,
            yY3x = Math.max(0, Math.min(gt7m, bqt6n * 5 + bqo6i));
        if (yY3x == ob9S) {
            return
        }
        this.XW1x.insertBefore(p4t.element, (this.fa6U[yY3x + (yY3x > ob9S ? 1 : 0)] || {}).element || this.Lb7U);
        this.fa6U.splice(ob9S, 1);
        this.fa6U.splice(yY3x, 0, p4t)
    };
    b4f.cbo5t = function(p4t, d4h) {
        a3x.cJ5O(p4t.element, false);
        if (p4t.dragger) p4t.dragger.T4X();
        delete p4t.dragger;
        var r4v = -1;
        for (var i = this.fa6U.length - 1; i >= 0; i--) {
            if (this.fa6U[i] == p4t) {
                r4v = i;
                break
            }
        }
        this.fa6U.splice(r4v, r4v >= 0 ? 1 : 0);
        delete p4t;
        if (this.fa6U.length >= 9) {
            this.Lb7U.style.display = "none"
        } else {
            this.Lb7U.style.display = ""
        }
        if (!this.fa6U.length) {
            this.n4r.style.display = "none";
            this.Xt0x(0)
        } else {
            this.bKk0x()
        }
        if (this.fa6U.doing == p4t) {
            this.fa6U.doing = null
        }
        this.KP7I()
    };
    b4f.bKk0x = function() {
        var bJZ0x = false;
        for (var i = 0, len = this.fa6U.length; i < len; i++) {
            if (this.fa6U[i].status == -3) {
                bJZ0x = true
            }
        }
        if (bJZ0x) {
            this.bpN6H(-3)
        } else {
            this.Xt0x(-3)
        }
    };
    b4f.SV9M = function() {
        var dB6v = [];
        for (var i = this.fa6U.length - 1; i >= 0; i--) {
            if (this.fa6U[i].status == 2) {
                dB6v.unshift(this.fa6U[i].picInfo)
            }
        }
        return dB6v
    };
    I4M.fJ7C.A4E({
        element: w4A.bpi5n,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bc4g = c4g("nej.ui"),
        N4R = c4g("nej.ut"),
        b4f, K4O;
    if ( !! N4R.mU9L) return;
    N4R.mU9L = NEJ.C();
    b4f = N4R.mU9L.O4S(N4R.bdx3x);
    K4O = N4R.mU9L.cs5x;
    b4f.bl5q = function(e4i) {
        this.cbd5i(e4i.more);
        this.Et5y = a3x.B4F(e4i.sbody);
        this.cbc5h = e4i.fixScrollPosition;
        this.bX5c([
            [this.Et5y, "scroll", this.cbb5g.g4k(this)]
        ]);
        var do6i = e4i.delta;
        if (do6i == null) do6i = 30;
        this.TK9B = Math.max(0, do6i);
        var cF5K = parseInt(e4i.count) || 0;
        this.jC8u = Math.max(0, cF5K);
        var gR7K = parseInt(e4i.number) || 0;
        if (gR7K > 1 && gR7K <= cF5K) {
            this.Bt4x = gR7K
        }
        this.bm5r(e4i)
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.AD4H;
        delete this.Et5y;
        delete this.tj1x;
        delete this.WA0x
    };
    b4f.Bk4o = function(bi4m, bq5v) {
        var bM5R = this.zO4S + (this.jC8u - 1) * this.pd0x,
            gc7V = this.jC8u * this.pd0x;
        return K4O.Bk4o.call(this, bM5R, bi4m, gc7V, bq5v)
    };
    b4f.cbd5i = function(Wu0x) {
        this.AD4H = a3x.B4F(Wu0x);
        this.bX5c([
            [this.AD4H, "click", this.oI9z.g4k(this)]
        ])
    };
    b4f.brn6h = function(F4J) {
        F4J = F4J || {};
        if (this.tj1x || !F4J) return;
        if (!F4J.scrollHeight) F4J = a3x.oy9p();
        var bi4m = a3x.hO7H(this.ii7b, this.cbc5h ? F4J : null),
            do6i = bi4m.y + this.ii7b.offsetHeight - F4J.scrollTop - F4J.clientHeight,
            bro6i = F4J.scrollHeight <= F4J.clientHeight;
        if (do6i <= this.TK9B || bro6i && !this.tj1x) {
            this.oI9z()
        }
    };
    b4f.cbb5g = function(d4h) {
        if (this.tj1x) return;
        this.brn6h(h4l.W4a(d4h))
    };
    b4f.Be4i = function(d4h) {
        K4O.Be4i.apply(this, arguments);
        if (!d4h.stopped) {
            this.Nu8m();
            var bi4m = 0;
            if (d4h.index > 1) {
                bi4m = this.zO4S + ((d4h.index - 1) * this.jC8u - 1) * this.pd0x
            }
            this.hP7I = bi4m;
            this.oI9z()
        }
    };
    b4f.bLu1x = function(e4i) {
        if ( !! this.Bt4x) {
            var do6i = e4i.offset > 0 ? this.pd0x : this.zO4S,
                gc7V = do6i + this.pd0x * (this.Bt4x - 1);
            this.hP7I = e4i.offset + gc7V;
            e4i.data.limit = gc7V;
            e4i.limit = gc7V;
            delete this.Bt4x
        }
        return e4i
    };
    b4f.bin4r = function(e4i) {
        delete this.WA0x;
        K4O.bin4r.apply(this, arguments);
        this.bJX0x()
    };
    b4f.bip4t = function(d4h) {
        if (d4h.key != this.jq8i.key) return;
        switch (d4h.action) {
            case "refresh":
            case "append":
                delete this.WA0x;
                break
        }
        K4O.bip4t.apply(this, arguments)
    };
    b4f.Nd7W = function() {
        this.yT3x("onbeforelistload", "列表加载中...");
        a3x.ba4e(this.AD4H, "display", "none")
    };
    b4f.biI4M = function(i4m, bi4m, gc7V) {
        var bq5v = i4m.length,
            brs6m = i4m.loaded ? bi4m + gc7V >= bq5v : bi4m + gc7V > bq5v;
        this.hP7I = Math.min(this.hP7I, bq5v);
        a3x.ba4e(this.AD4H, "display", brs6m ? "none" : "");
        if (brs6m) this.tj1x = !0;
        if (this.jC8u > 0) {
            var by5D = this.Bk4o(bi4m, i4m.length);
            if (this.bLs1x(by5D.index, by5D.total)) return !0;
            var do6i = this.zO4S - this.pd0x,
                gR7K = this.jC8u * this.pd0x;
            this.tj1x = (bi4m + gc7V - do6i) % gR7K == 0 || brs6m;
            a3x.ba4e(this.AD4H, "display", this.tj1x ? "none" : "");
            this.biw4A(this.tj1x && by5D.total > 1 ? "" : "none")
        }
    };
    b4f.biH4L = function() {
        this.hP7I = 0;
        this.tj1x = !0;
        this.yT3x("onemptylist", "没有列表数据！")
    };
    b4f.Nb7U = function(dT6N, kL8D) {
        this.ii7b.insertAdjacentHTML(kL8D || "beforeEnd", dT6N)
    };
    b4f.Na7T = function(ho7h) {
        this.fL7E = this.fL7E || [];
        if (k4o.eJ6D(ho7h)) {
            fx6r.push.apply(this.fL7E, ho7h)
        } else {
            this.fL7E.push(ho7h)
        }
    };
    b4f.bdX3x = function(d4h) {
        a3x.mY9P(this.cv5A);
        this.MR7K(d4h, "onafteradd");
        var eV6P = d4h.flag;
        if (d4h.stopped || !eV6P) return;
        if (this.jC8u > 0) {
            this.biz4D();
            return
        }
        this.hP7I += 1;
        eV6P == -1 ? this.bjo4s(d4h.data) : this.bLr1x(d4h.data)
    };
    b4f.bdZ3x = function(d4h) {
        this.MR7K(d4h, "onafterdelete");
        if (d4h.stopped) return;
        if (this.jC8u > 0) {
            this.biz4D();
            return
        }
        var C4G = d4h.data[this.fd6X.pkey];
        if ( !! this.fL7E) {
            var p4t = a3x.bTd3x(C4G),
                r4v = k4o.di6c(this.fL7E, p4t);
            if (r4v >= 0) {
                this.fL7E.splice(r4v, 1);
                this.hP7I -= 1
            }
            if ( !! p4t) p4t.T4X()
        } else {
            var f4j = a3x.B4F(this.bLy1x(C4G));
            if ( !! f4j) this.hP7I -= 1;
            a3x.cJ5O(f4j)
        }
        if (this.hP7I <= 0) this.oI9z()
    };
    b4f.bje4i = function(bi4m, gc7V) {
        if (bi4m != this.hP7I) return;
        if (this.VW0x()) {
            this.tj1x = !1;
            this.bJX0x()
        }
    };
    b4f.bjf4j = function(bi4m, gc7V) {
        if (bi4m != 0) return;
        var Jh6b = this.S4W.hD7w(this.jq8i.key);
        for (var i = gc7V - 1; i >= 0; i--) {
            this.bjo4s(Jh6b[i])
        }
    };
    b4f.bJX0x = function() {
        var F4J = this.Et5y;
        if (!F4J || this.tj1x) return;
        this.brn6h(this.Et5y)
    };
    b4f.gB7u = function() {
        delete this.tj1x;
        K4O.gB7u.apply(this, arguments)
    };
    b4f.oI9z = function() {
        if ( !! this.WA0x) return;
        this.WA0x = !0;
        var bi4m = this.hP7I;
        this.hP7I += bi4m == 0 ? this.zO4S : this.pd0x;
        this.bLv1x(bi4m)
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cY5d = c4g("nej.x"),
        N4R = c4g("nej.ut"),
        b4f;
    if ( !! N4R.EE5J) return;
    N4R.EE5J = NEJ.C();
    b4f = N4R.EE5J.O4S(N4R.cH5M);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.ji8a = e4i.event || "click";
        this.kR8J = e4i.selected || "js-selected";
        this.nK9B = e4i.disabled || "js-disabled";
        this.bJT0x = !! e4i.inverse;
        this.caP5U(e4i.list);
        this.UF0x(e4i.index || 0)
    };
    b4f.bD5I = function() {
        var caN5S = function(f4j) {
            this.brC6w(f4j, !1)
        };
        return function() {
            this.bG5L();
            k4o.bd4h(this.bU5Z, caN5S, this);
            delete this.bU5Z;
            delete this.ji8a;
            delete this.ct5y;
            delete this.nK9B;
            delete this.kR8J;
            delete this.bJT0x
        }
    }();
    b4f.caP5U = function() {
        var bgY3x = function(p4t) {
            if (!p4t) return;
            this.bU5Z.push(p4t);
            var r4v = this.bU5Z.length - 1,
                dt6n = this.brD6x[r4v];
            if (!dt6n) {
                dt6n = this.UF0x.g4k(this, r4v);
                this.brD6x[r4v] = dt6n
            }
            this.bX5c([
                [p4t, this.ji8a, dt6n]
            ])
        };
        return function(i4m) {
            this.bU5Z = [];
            if (!this.brD6x) this.brD6x = [];
            k4o.bd4h(i4m, bgY3x, this)
        }
    }();
    b4f.brC6w = function(F4J, caJ5O) { !! caJ5O && !this.bJT0x ? a3x.y4C(F4J, this.kR8J) : a3x.x4B(F4J, this.kR8J)
    };
    b4f.UF0x = function(r4v, UU0x, j4n) {
        var F4J = this.bU5Z[r4v];
        if (UU0x != !0 && (r4v == this.ct5y || !F4J || a3x.bE5J(F4J, this.nK9B))) {
            h4l.cp5u(arguments[1]);
            return this
        }
        var d4h = {
            index: r4v,
            last: this.ct5y,
            list: this.lK9B(),
            data: j4n || a3x.t4x(F4J, "value")
        };
        this.ct5y = r4v;
        F4J = this.bU5Z[d4h.last];
        if ( !! F4J) this.brC6w(F4J, !1);
        F4J = this.bU5Z[this.ct5y];
        this.brC6w(F4J, !0);
        this.z4D("onchange", d4h);
        if (!d4h.nostop) h4l.cp5u(arguments[1]);
        return this
    };
    b4f.tD1x = function() {
        return this.ct5y
    };
    b4f.lK9B = function() {
        return this.bU5Z
    };
    a3x.caG5L = cY5d.caG5L = function(bI5N, e4i) {
        var C4G = a3x.lv8n(bI5N);
        if (!C4G) return null;
        if (!N4R.bba2x(C4G, N4R.EE5J)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a3x.dk6e(C4G) : a3x.H4L(C4G, e4i.clazz);
            delete e4i.clazz
        }
        return N4R.bba2x(C4G, N4R.EE5J, e4i || bb4f)
    };
    cY5d.isChange = !0
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var nv9m = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nv9m = v4z.sw1x(SETTING_KEY) || nv9m;
    l4p.brR6L = function() {
        return nv9m
    };
    l4p.EL5Q = function(EM5R) {
        if (EM5R) {
            nv9m = EM5R;
            v4z.uW2x(SETTING_KEY, EM5R)
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        hk7d = c4g("nm.w.player.log");
    var kI8A = q4u.hR7K.A4E();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var md9U = function(u4y, bH5M, rd0x) {
        var cG5L = l4p.fe6Y("{0} {1} {2}", k4o.if7Y(new Date, "yyyy-MM-dd HH:mm:ss"), u4y, bH5M);
        if (rd0x == LogLevel.ERROR) {
            kI8A.fu6o("playerror", {
                message: bH5M
            })
        }
        if (rd0x >= LogLevel.INFO) {
            kI8A.bRh3x(cG5L)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cG5L)
        }
    };
    hk7d.cf5k = function() {
        md9U("PLAY_ERROR", l4p.fe6Y.apply(null, arguments), LogLevel.ERROR)
    };
    hk7d.pK0x = function() {
        md9U("PLAY_INFO", l4p.fe6Y.apply(null, arguments), LogLevel.INFO)
    };
    hk7d.cFS2x = function() {
        md9U("PLAY_DEBUG", l4p.fe6Y.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        w4A = c4g("nm.w"),
        fp6j = c4g("flash.cb");
    var ec6W = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var ER5W, Vv0x, vr2x;
    w4A.caA5F = function(u4y, cK5P) {
        if (u4y != "flash") {
            if (!ER5W) {
                ER5W = a3x.dg6a("audio");
                k4o.bd4h(ec6W, function(u4y) {
                    h4l.s4w(ER5W, u4y, onMediaCallBack)
                })
            }
            if (ER5W && ER5W.canPlayType && ER5W.canPlayType("audio/mpeg")) {
                cK5P(new MediaWrap("audio"));
                return
            }
        }
        if (!Vv0x) {
            a3x.rG0x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hT7M) {
                    Vv0x = hT7M;
                    k4o.bd4h(ec6W, function(u4y) {
                        fp6j[u4y] = onMediaCallBack;
                        Vv0x.addCallback(u4y, "flash.cb." + u4y)
                    });
                    cK5P(new MediaWrap("flash"))
                }.g4k(this)
            })
        } else {
            cK5P(new MediaWrap("flash"))
        }
    };

    function MediaWrap(EV5a) {
        var gP7I;
        I4M.fJ7C.A4E({
            element: this,
            event: ec6W.concat(["interrupt", "recover"])
        });
        gP7I = EV5a == "audio" ? ER5W : Vv0x;
        this.type = EV5a;
        this.destroy = function() {};
        this.setSrc = function(Y4c) {
            if (vr2x != this) {
                var gt7m = vr2x;
                if (gt7m) {
                    gt7m.interrupt()
                }
                vr2x = this
            }
            if (EV5a == "flash") {
                gP7I.setSrc(Y4c)
            } else {
                gP7I.src = Y4c
            }
        };
        this.play = function() {
            if (vr2x != this) {
                var gt7m = vr2x;
                if (gt7m) {
                    gt7m.interrupt();
                    vr2x = this;
                    this.recover()
                } else {
                    vr2x = this
                }
            }
            if (EV5a == "flash") {
                gP7I.as_play()
            } else {
                gP7I.play()
            }
        };
        this.pause = function() {
            if (vr2x != this) return;
            if (EV5a == "flash") {
                gP7I.as_pause()
            } else {
                gP7I.pause()
            }
        };
        this.load = function() {
            if (vr2x != this) return;
            if (EV5a == "flash") {
                gP7I.as_load()
            } else {
                gP7I.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return gP7I
        };
        var ov9m = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bd4h(ov9m, function(V4Z) {
            var Vh0x = "get" + V4Z,
                Vk0x = "set" + V4Z;
            if (EV5a == "flash") {
                if (!this[Vh0x]) {
                    this[Vh0x] = function() {
                        return gP7I[Vh0x]()
                    }
                }
                if (!this[Vk0x]) {
                    this[Vk0x] = function(value) {
                        gP7I[Vk0x](value)
                    }
                }
            } else {
                var bJJ0x = V4Z.slice(0, 1).toLowerCase() + V4Z.slice(1);
                if (!this[Vh0x]) {
                    this[Vh0x] = function() {
                        return gP7I[bJJ0x]
                    }
                }
                if (!this[Vk0x]) {
                    this[Vk0x] = function(value) {
                        gP7I[bJJ0x] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d4h) {
        if (vr2x) {
            h4l.z4D(vr2x, d4h.type, d4h)
        }
    }
})();
(function() {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        dv6p = c4g("nej.p"),
        w4A = c4g("nm.w"),
        l4p = c4g("nm.x"),
        hk7d = c4g("nm.w.player.log"),
        b4f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bJI0x = false;
    w4A.fM7F = NEJ.C();
    b4f = w4A.fM7F.O4S(I4M.cH5M);
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.cL5Q = {};
        this.Vt0x(e4i.media);
        v4z.bn5s("/api/cdns", {
            type: "json",
            onload: function(d4h) {
                if (d4h.code) {
                    this.qL0x = d4h.data
                }
            }.g4k(this)
        })
    };
    b4f.bD5I = function() {
        this.bG5L();
        delete this.cL5Q
    };
    b4f.ZX1x = function(bj4n) {
        if (!bj4n) return;
        var wE2x = this.cL5Q.volume;
        if (this.dS6M) {
            this.dS6M.pause()
        }
        this.cL5Q = {
            time: 0,
            id: bj4n.id,
            duration: bj4n.duration / 1e3,
            play: this.cL5Q.play,
            stalledRetryCount: 0
        };
        if (wE2x != null) {
            this.cL5Q.volume = wE2x
        }
        this.cL5Q.loadState = LoadState.LOAD_START;
        this.bJH0x(bj4n.id);
        hk7d.pK0x("play song id: {0}", bj4n.id)
    };
    b4f.ej6d = function() {
        if (this.cL5Q.error) {
            this.cL5Q.error = null;
            if (this.cL5Q.error == ErrorType.INFO_GET_ERR || this.bJG0x()) {
                this.bJF0x()
            } else {
                this.UE0x()
            }
        } else {
            if (this.dS6M) {
                this.dS6M.play()
            }
        }
        this.cL5Q.play = true;
        this.pC0x("play")
    };
    b4f.fC7v = function() {
        if (this.dS6M) {
            this.dS6M.pause()
        }
        this.cL5Q.play = false;
        this.pC0x("pause")
    };
    b4f.oS0x = function(bA5F) {
        if (this.dS6M) {
            this.dS6M.setCurrentTime(bA5F)
        }
        this.cL5Q.time = bA5F;
        hk7d.pK0x("seek to: {0}", bA5F)
    };
    b4f.btf6Z = function() {
        return this.cL5Q.duration || 0
    };
    b4f.vD2x = function() {
        return !!this.cL5Q.play
    };
    b4f.mQ9H = function(Uu0x) {
        this.cL5Q.volume = Uu0x;
        if (this.dS6M) {
            this.dS6M.setVolume(Uu0x)
        }
    };
    b4f.Wr0x = function() {
        return this.cL5Q.time
    };
    b4f.Vt0x = function(u4y) {
        w4A.caA5F(u4y, function(gP7I) {
            this.dS6M = gP7I;
            hk7d.pK0x("media loaded: {0}", gP7I.type);
            this.bX5c([
                [this.dS6M, "loadedmetadata", this.cau5z.g4k(this)],
                [this.dS6M, "ended", this.caq5v.g4k(this)],
                [this.dS6M, "waiting", this.zx4B.g4k(this)],
                [this.dS6M, "play", this.vu2x.g4k(this)],
                [this.dS6M, "pause", this.btv6p.g4k(this)],
                [this.dS6M, "playing", this.Uh9Y.g4k(this)],
                [this.dS6M, "timeupdate", this.cal5q.g4k(this)],
                [this.dS6M, "progress", this.tF1x.g4k(this)],
                [this.dS6M, "stalled", this.btD6x.g4k(this)],
                [this.dS6M, "interrupt", this.fC7v.g4k(this)],
                [this.dS6M, "recover", this.cak5p.g4k(this)],
                [this.dS6M, "error", this.eI6C.g4k(this)]
            ]);
            if (this.cL5Q) {
                if (this.cL5Q.loadState == LoadState.LOAD_START || this.cL5Q.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btI6C();
                    if (this.cL5Q.volume != null) {
                        this.dS6M.setVolume(this.cL5Q.volume)
                    }
                }
            }
        }.g4k(this))
    };
    b4f.cai5n = function(u4y) {
        this.IJ6D();
        this.dS6M.destroy();
        this.cL5Q.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zx4B();
        this.Vt0x(u4y);
        hk7d.pK0x("switch media")
    };
    b4f.cFW2x = function() {
        return this.dS6M
    };
    b4f.bJH0x = function() {
        this.zx4B();
        v4z.bn5s("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cL5Q.id]),
                br: DEFAULT_BR
            },
            onload: this.bJz0x.g4k(this),
            onerror: this.bJz0x.g4k(this)
        })
    };
    b4f.bJz0x = function(d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var by5D = d4h.data[0];
            if (!by5D.url) {
                this.cL5Q.error = ErrorType.INFO_GET_ERR;
                this.pC0x("error", {
                    code: this.cL5Q.error
                });
                return
            }
            this.cL5Q.playUrl = by5D.url;
            this.cL5Q.expireTime = (new Date).getTime() + by5D.expi * 1e3;
            this.btI6C()
        } else {
            this.cL5Q.error = ErrorType.INFO_GET_ERR;
            this.pC0x("error", {
                code: this.cL5Q.error
            });
            hk7d.cf5k("info load error")
        }
    };
    b4f.btI6C = function() {
        if (this.dS6M) {
            var Y4c = this.cL5Q.playUrl;
            if (this.cL5Q.time > 0 && (this.cL5Q.loadState == LoadState.IN_RE_GET_URL || this.cL5Q.loadState == LoadState.IN_RE_GET_URL)) {
                Y4c += "#t=" + this.cL5Q.time
            }
            this.dS6M.setSrc(Y4c);
            hk7d.pK0x("load mp3: {0},loadState: {1}.", Y4c, this.cL5Q.loadState)
        }
    };
    b4f.bJy0x = function() {
        if (/#t=(\d+)$/.test(this.dS6M.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b4f.UE0x = function() {
        var bA5F = parseInt(this.cL5Q.time) || 0,
            cab5g = this.bJy0x();
        if (bA5F === cab5g) {
            this.dS6M.load()
        } else {
            this.dS6M.setSrc(this.cL5Q.playUrl + "#t=" + bA5F)
        }
        this.cL5Q.loadState = LoadState.IN_RELOAD;
        this.zx4B();
        hk7d.pK0x("reload from: {0}", bA5F)
    };
    b4f.bJF0x = function() {
        this.cL5Q.loadState = LoadState.IN_RE_GET_URL;
        this.bJH0x()
    };
    b4f.bJx0x = function() {
        var sz1x = getHost(this.cL5Q.playUrl);
        if (sz1x) {
            for (var i = 0; i < this.qL0x.length; i++) {
                var ik8c = this.qL0x[i] || [],
                    r4v = ik8c.indexOf(sz1x);
                if (r4v >= 0 && ik8c.length > 1) {
                    return ik8c[(r4v + 1) % ik8c.length]
                }
            }
        }
        function getHost(Y4c) {
            if (CDN_HOST_REG.test(Y4c)) return RegExp.$1
        }
    };
    b4f.bZZ5e = function() {
        this.cL5Q.playUrl = this.cL5Q.playUrl.replace(CDN_HOST_REG, this.bJx0x());
        this.cL5Q.loadState = LoadState.IN_SWITCH_CDN;
        this.btI6C();
        this.zx4B()
    };
    b4f.cau5z = function() {
        if (this.cL5Q.loadState == LoadState.LOAD_START) {
            this.cL5Q.loadState = LoadState.LOADED_META;
            if (this.dS6M.type == "audio") {
                this.cL5Q.duration = this.dS6M.getDuration()
            }
            this.pC0x("loadedmeta", {
                duration: this.cL5Q.duration
            })
        } else {
            this.cL5Q.loadState = LoadState.LOADED_META
        }
        if (this.cL5Q.play) {
            this.dS6M.play()
        } else {
            this.dS6M.pause()
        }
        if (this.cL5Q.time && parseInt(this.cL5Q.time) != this.bJy0x()) {
            this.dS6M.setCurrentTime(this.cL5Q.time)
        }
        this.JQ7J();
        this.Uh9Y();
        bJI0x = true;
        hk7d.pK0x("loaded meta")
    };
    b4f.caq5v = function() {
        this.cL5Q.ended = true;
        this.pC0x("ended")
    };
    b4f.zx4B = function() {
        if (!this.cL5Q.waiting) {
            this.cL5Q.waiting = true;
            this.cL5Q.waitTimestamp = +(new Date);
            this.pC0x("waiting")
        }
    };
    b4f.Uh9Y = function() {
        this.cL5Q.waiting = false;
        this.cL5Q.waitTimestamp = 0;
        this.pC0x("playing")
    };
    b4f.vu2x = function() {
        this.pC0x("play")
    };
    b4f.btv6p = function() {
        this.pC0x("pause")
    };
    b4f.cal5q = function() {
        if (this.cL5Q.loadState != LoadState.LOADED_META) return;
        var bA5F = this.dS6M.getCurrentTime();
        if (this.cL5Q.waiting && bA5F > this.cL5Q.time) {
            this.Uh9Y()
        }
        this.cL5Q.time = bA5F;
        this.pC0x("timeupdate", {
            time: this.cL5Q.time,
            duration: this.cL5Q.duration
        })
    };
    b4f.tF1x = function(d4h) {
        if (this.cL5Q.loadState != LoadState.LOADED_META) return;
        var o4s = {};
        if (d4h.data) {
            o4s.total = d4h.data.total;
            o4s.loaded = d4h.data.loaded
        } else {
            var yX3x = this.dS6M.getBuffered(),
                bA5F = this.dS6M.getCurrentTime(),
                pg0x = 0;
            for (var i = 0; i < yX3x.length; i++) {
                if (bA5F > yX3x.start(i) && bA5F < yX3x.end(i)) {
                    pg0x = yX3x.end(i);
                    break
                }
            }
            o4s.total = this.cL5Q.duration;
            o4s.loaded = Math.min(pg0x, o4s.total)
        }
        this.pC0x("progress", o4s)
    };
    b4f.JQ7J = function() {
        if (this.cL5Q.retry) {
            clearTimeout(this.cL5Q.retry.tid);
            this.cL5Q.retry = null
        }
    };
    b4f.eI6C = function() {
        var cb5g = this.dS6M.getError();
        hk7d.cf5k("media error code: {0}, netState: {1}", cb5g.code, this.dS6M.getNetworkState());
        if (cb5g.code == MediaError.MEDIA_ERR_NETWORK || cb5g.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EM5R = l4p.brR6L();
            if (!this.cL5Q.retry) {
                this.cL5Q.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cL5Q.retry.tid)
            }
            if (this.cL5Q.retry.level == RetryLevel.NONE) {
                if (this.bJG0x()) {
                    this.cL5Q.retry.level = RetryLevel.GET_URL;
                    this.bJF0x();
                    hk7d.pK0x("Url expired, get url.")
                } else {
                    this.cL5Q.retry.level = RetryLevel.RELOAD;
                    this.cL5Q.retry.tid = setTimeout(this.UE0x.g4k(this), 3e3);
                    hk7d.pK0x("Reload mp3 3s later.")
                }
            } else if (this.cL5Q.retry.level == RetryLevel.GET_URL) {
                this.cL5Q.retry.level = RetryLevel.RELOAD;
                this.cL5Q.retry.tid = setTimeout(this.UE0x.g4k(this), 3e3);
                hk7d.pK0x("Reload mp3 3s later.")
            } else if (this.cL5Q.retry.level == RetryLevel.RELOAD) {
                this.cL5Q.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bJx0x()) {
                    this.cL5Q.retry.tid = setTimeout(this.bZZ5e.g4k(this), 5e3);
                    hk7d.pK0x("Switch CDN 5s later.")
                } else {
                    this.cL5Q.retry.tid = setTimeout(this.UE0x.g4k(this), 5e3);
                    hk7d.pK0x("Reload mp3 5s later.")
                }
            } else if (!bJI0x && this.dS6M.type == "audio" && !EM5R.useFlash && !dv6p.HP6J.mac && l4p.bwp7i().supported) {
                EM5R.useFlash = true;
                l4p.EL5Q(EM5R);
                this.cai5n("flash")
            } else {
                this.JQ7J();
                this.fC7v();
                this.cL5Q.error = ErrorType.NET_ERR;
                this.pC0x("error", {
                    code: this.cL5Q.error
                });
                hk7d.cf5k("error can not retry.")
            }
        } else {
            this.JQ7J();
            this.fC7v();
            this.cL5Q.error = ErrorType.UNKNOWN_ERR;
            this.pC0x("error", {
                code: this.cL5Q.error
            });
            hk7d.cf5k("error can not retry.")
        }
    };
    b4f.btD6x = function() {
        var hN7G = 0,
            bJw0x = 5e3;
        return function() {
            this.zx4B();
            clearTimeout(hN7G);
            setTimeout(function() {
                var eR6L = +(new Date);
                if (this.cL5Q.waiting && eR6L - this.cL5Q.waitTimestamp >= bJw0x && this.cL5Q.stalledRetryCount < MAX_STALLED_RETRY) {
                    hk7d.pK0x("stalled too long retry.");
                    this.cL5Q.stalledRetryCount++;
                    this.UE0x()
                }
            }.g4k(this), bJw0x);
            hk7d.pK0x("stalled")
        }
    }();
    b4f.bJG0x = function() {
        var eR6L = +(new Date);
        return eR6L > this.cL5Q.expireTime
    };
    b4f.cak5p = function() {
        var bA5F = parseInt(this.cL5Q.time) || 0;
        this.dS6M.setSrc(this.cL5Q.playUrl + "#t=" + bA5F);
        this.cL5Q.loadState = LoadState.IN_RELOAD;
        this.zx4B();
        hk7d.pK0x("recover from: {0}", bA5F)
    };
    b4f.pC0x = function(U4Y, j4n) {
        h4l.z4D(w4A.fM7F, "playaction", {
            action: U4Y,
            data: j4n || {}
        })
    };
    I4M.fJ7C.A4E({
        element: w4A.fM7F,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        I4M = c4g("nej.ut"),
        w4A = c4g("nm.w"),
        b4f;
    w4A.FH5M = NEJ.C();
    b4f = w4A.FH5M.O4S(w4A.fM7F);
    K4O = w4A.FH5M.cs5x;
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bZT5Y = function(bN5S) {
        this.ZX1x(bN5S);
        this.ej6d()
    };
    b4f.bug7Z = function() {
        this.fC7v()
    };
    b4f.wu2x = function(d4h) {
        if (d4h.action == "play") {
            this.fC7v()
        }
    };
    b4f.pC0x = function(U4Y, j4n) {
        h4l.z4D(w4A.FH5M, "tmpplayaction", {
            action: U4Y,
            data: j4n || {},
            tmp: true
        })
    };
    b4f.ty1x = function() {
        return this.cL5Q
    };
    I4M.fJ7C.A4E({
        element: w4A.FH5M,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        fH7A = c4g("nej.n"),
        v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"),
        bc4g = c4g("nej.ui"),
        w4A = c4g("nm.w"),
        m4q = c4g("nm.l"),
        kM8E = c4g("nm.c"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O, Xy0x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bul7e = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w4A.bun7g = NEJ.C();
    b4f = w4A.bun7g.O4S(bc4g.ei6c);
    b4f.cx5C = function(e4i) {
        this.cD5I(e4i);
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.cFX2x = i4m.shift();
        this.bZN5S = i4m.shift();
        this.JF6z = i4m.shift();
        this.bus7l = i4m.shift();
        this.buu7n = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.XY1x = i4m.shift();
        this.bJr0x = i4m.shift();
        this.rS0x = {
            list: this.buu7n,
            selected: "z-curr",
            onchange: this.bJq0x.g4k(this)
        };
        h4l.s4w(this.JF6z, "input", this.Ym1x.g4k(this));
        h4l.s4w(this.JF6z, "propertychange", this.Ym1x.g4k(this));
        h4l.s4w(this.JF6z, "keyup", this.Ym1x.g4k(this));
        h4l.s4w(this.bZN5S, "click", this.Ym1x.g4k(this));
        h4l.s4w(this.XY1x, "click", this.cM5R.g4k(this));
        h4l.s4w(this.bJr0x, "click", function() {
            this.z4D("oncancel", {})
        }.g4k(this));
        this.S4W = q4u.EC5H.gr7k();
        this.RM9D = top.nm.w.FH5M.gr7k();
        I4M.fJ7C.A4E({
            element: top.nm.w.FH5M,
            event: ["tmpplayaction"]
        });
        this.se0x = {
            limit: 100,
            offset: 0,
            parent: this.XY1x,
            onbeforelistload: this.qU0x.g4k(this)
        };
        q4u.sk = "fuck" + a3x.t4x(this.bus7l, "xname") + "458";
        h4l.s4w(top.nm.w.FH5M, "tmpplayaction", this.wu2x.g4k(this))
    };
    b4f.ce5j = function() {
        this.cd5i = "m-xwgt-publish-search"
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        if ( !! this.BL4P) {
            this.BL4P.T4X();
            delete this.BL4P
        }
        this.rS0x.index = bul7e[e4i.type || "song"];
        this.BL4P = I4M.EE5J.A4E(this.rS0x);
        this.JF6z.value = "";
        this.JF6z.focus();
        this.uN2x = "";
        this.cGa3x = 0;
        if (e4i.showMV == true) {
            this.buu7n[bul7e["mv"]].parentNode.style.display = "";
            a3x.y4C(this.bus7l, "srchtab-1")
        } else {
            this.buu7n[bul7e["mv"]].parentNode.style.display = "none";
            a3x.x4B(this.bus7l, "srchtab-1")
        }
        if ( !! this.dK6E) {
            this.dK6E = this.dK6E.T4X()
        }
        if (e4i.hideBack) {
            a3x.y4C(this.bJr0x.parentNode, "f-hide")
        }
    };
    b4f.bD5I = function() {
        this.RM9D.bug7Z();
        this.bG5L()
    };
    b4f.Ym1x = function() {
        var value = this.JF6z.value.trim();
        if (value && value.length) {
            if (value != this.uN2x) {
                this.uN2x = value;
                this.bJq0x({
                    index: this.BL4P.tD1x()
                })
            }
        } else {
            if (this.dK6E) {
                this.dK6E = this.dK6E.T4X()
            }
        }
        this.uN2x = value
    };
    b4f.cM5R = function() {
        var bZI5N = function(F4J) {
            return a3x.bE5J(F4J, "sitm") || a3x.bE5J(F4J, "itm") || a3x.bE5J(F4J, "mv-item")
        }, bZF5K = function(F4J) {
            return a3x.bE5J(F4J, "ply")
        }, bJo0x = function() {
            m4q.Z4d.L4P({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }, bZA5F = function() {
            m4q.Z4d.L4P({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }, buU7N = function(bj4n) {
            if (bj4n && bj4n.privilege && bj4n.privilege.toast) {
                v4z.bn5s("/api/song/toast", {
                    query: {
                        id: bj4n.id
                    },
                    type: "json",
                    onload: Vp0x.g4k(this),
                    onerror: Vp0x.g4k(this)
                })
            } else {
                Vn0x()
            }
        }, Vp0x = function(Q4U) {
            Vn0x((Q4U || bb4f).toast)
        }, Vn0x = function(bH5M) {
            m4q.Z4d.L4P({
                type: 2,
                tip: bH5M || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d4h) {
            var FY5d = h4l.W4a(d4h, bZF5K),
                i4m = h4l.W4a(d4h, bZI5N),
                ex6r = this.RM9D.ty1x();
            if ( !! i4m) {
                h4l.bh4l(d4h);
                this.RD9u = a3x.t4x(i4m, "id");
                this.RC9t = a3x.t4x(i4m, "type");
                if (this.RC9t == 18) {
                    var bN5S = this.S4W.eH6B(this.RD9u),
                        rd0x = l4p.pB0x(bN5S);
                    if (!FY5d) {
                        if (rd0x == 10) {
                            bJo0x();
                            return
                        } else if (rd0x == 100) {
                            buU7N(bN5S);
                            return
                        }
                    } else {
                        if (rd0x == 10) {
                            bJo0x();
                            return
                        } else if (rd0x == 100) {
                            buU7N(bN5S);
                            return
                        } else if (rd0x == 11) {
                            bZA5F();
                            return
                        } else {
                            a3x.x4B(this.BR4V, "z-pause z-loading");
                            if (FY5d == this.BR4V && ex6r.play && !ex6r.ended) {
                                this.RM9D.bug7Z()
                            } else {
                                this.BR4V = FY5d;
                                this.RM9D.bZT5Y(bN5S)
                            }
                            return
                        }
                    }
                } else if (this.RC9t == 70) {
                    if (a3x.bE5J(i4m, "z-noprogram")) {
                        m4q.Z4d.L4P({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.bZw5B()
            }
        }
    }();
    b4f.bZw5B = function() {
        var hW7P = this.S4W.eH6B(this.RD9u),
            tm1x = l4p.bNV1x(this.RC9t, hW7P);
        tm1x.title = tm1x.title || "";
        tm1x.author = tm1x.author || "";
        tm1x.picUrl = tm1x.picUrl || "";
        tm1x.authors = tm1x.authors || "";
        if (this.RC9t == 70) {
            this.RD9u = this.RD9u.slice(0, - 4)
        }
        this.z4D("onfinish", {
            id: this.RD9u,
            type: this.RC9t,
            data: tm1x
        })
    };
    b4f.wu2x = function(d4h) {
        var j4n = d4h.data;
        if (!this.BR4V) {
            return
        }
        switch (d4h.action) {
            case "play":
                a3x.fb6V(this.BR4V, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a3x.x4B(this.BR4V, "z-pause z-loading");
                break;
            case "error":
                m4q.Z4d.L4P({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a3x.x4B(this.BR4V, "z-pause z-loading");
                break;
            case "playing":
                a3x.fb6V(this.BR4V, "z-loading", "z-pause");
                break;
            case "waiting":
                a3x.fb6V(this.BR4V, "z-pause", "z-loading");
                break
        }
    };
    b4f.bZv5A = function(d4h) {
        if (d4h.result.code == 407) {
            this.XY1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XY1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b4f.bJq0x = function(d4h) {
        if (!this.uN2x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.RM9D.bug7Z();
        var bg4k = Xy0x[d4h.index],
            e4i = NEJ.X({}, this.se0x);
        e4i.cache = {
            klass: q4u.EC5H,
            clear: true,
            onerror: this.bZv5A.g4k(this)
        };
        e4i.cache.lkey = "search-publish-" + bg4k.type + "-" + this.uN2x;
        e4i.item = {
            klass: bg4k.item,
            getRestrictLevel: l4p.pB0x,
            dur2time: l4p.lg8Y
        };
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.uN2x;
        e4i.cache.data.type = bg4k.type;
        e4i.cache.data.isPub = true;
        if (bg4k.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.bZu5z.g4k(this, this.uN2x);
        if ( !! this.Gg5l) this.S4W.ut2x(this.Gg5l);
        if ( !! this.dK6E) {
            this.dK6E = this.dK6E.T4X()
        }
        this.dK6E = I4M.mU9L.A4E(e4i);
        this.Gg5l = e4i.cache.lkey
    };
    b4f.qU0x = function(d4h) {
        d4h.value = a3x.iI8A("m-publish-search-loading")
    };
    b4f.bZu5z = function(J4N, d4h) {
        a3x.dI6C(d4h.parent, "m-publish-emtpy-message", {
            key: J4N
        });
        d4h.stopped = true
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dv6p = c4g("nej.p"),
        v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"),
        bC5H = c4g("nej.ui"),
        w4A = c4g("nm.w"),
        b4f, K4O;
    var bZs5x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w4A.Gi5n = NEJ.C();
    b4f = w4A.Gi5n.O4S(bC5H.ei6c);
    var gi7b = a3x.es6m("m-wgt-receiverInput");
    var bZr5w = a3x.es6m("m-wgt-receiverList");
    var iZ8R = a3x.tO2x(bZs5x);
    var bZn5s = a3x.es6m('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">×</a></div>');
    b4f.cx5C = function(e4i) {
        this.bk4o = [];
        this.wz2x = e4i.receiver || null;
        this.bZl5q = e4i.unique || false;
        this.nt9k = e4i.err;
        this.bJg0x(this.bJf0x, e4i.uid);
        this.cD5I(e4i)
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.Rf9W();
        this.Rd9U();
        this.ZI1x();
        if (e4i.receiver) this.bvN7G(e4i.receiver.nickname, e4i.receiver.userId);
        a3x.ba4e(this.Bo4s, "display", "block");
        a3x.ba4e(this.bvT7M, "cursor", "text");
        a3x.ba4e(this.Bo4s, "cursor", "text")
    };
    b4f.ce5j = function() {
        var j4n = this.bJe0x();
        this.cd5i = a3x.iu8m(a3x.bZ5e(gi7b, {
            receiver: this.wz2x,
            users: j4n
        }));
        this.mb9S = iZ8R
    };
    b4f.bW5b = function() {
        this.cg5l();
        var bQ5V = a3x.H4L(this.n4r, "j-flag");
        var ho7h = a3x.H4L(this.n4r, "j-item");
        this.bvT7M = bQ5V[0];
        this.bJd0x = bQ5V[1];
        this.ee6Y = bQ5V[2];
        this.Bo4s = bQ5V[3];
        this.Vq0x = bQ5V[4];
        this.bwd7W = bQ5V[5];
        this.fL7E = ho7h;
        a3x.y4C(this.fL7E[0], "j-selected");
        h4l.s4w(this.ee6Y, "keyup", this.bwf7Y.g4k(this));
        h4l.s4w(this.ee6Y, "keydown", this.QD8v.g4k(this));
        h4l.s4w(this.ee6Y, "focus", this.lb8T.g4k(this));
        h4l.s4w(this.Vq0x, "click", this.bZa5f.g4k(this));
        h4l.s4w(this.bvT7M, "click", this.bYZ5e.g4k(this));
        h4l.s4w(document.body, "click", this.ot9k.g4k(this));
        h4l.s4w(this.ee6Y, "input", this.fN7G.g4k(this));
        h4l.s4w(this.ee6Y, "blur", this.oa9R.g4k(this))
    };
    b4f.bD5I = function(e4i) {
        h4l.mw9n(document.body, "click", this.ot9k.g4k(this));
        this.bG5L();
        this.ZI1x();
        this.bYX5c();
        this.ot9k()
    };
    b4f.bwf7Y = function(d4h) {
        h4l.bh4l(d4h);
        var jN8F = d4h.keyCode || d4h.which;
        var bo5t = this.ee6Y.value;
        var bq5v = this.fL7E.length;
        var ro0x = a3x.H4L(this.n4r, "j-selected")[0];
        switch (jN8F) {
            case 13:
                var lf8X = a3x.gh7a(ro0x, "data-username");
                var ij8b = a3x.gh7a(ro0x, "data-userId");
                this.bvN7G(lf8X, ij8b);
                this.ot9k();
                this.ee6Y.value = "";
                break;
            case 38:
                var r4v = a3x.gh7a(ro0x, "data-index") - 1 < 0 ? bq5v - 1 : a3x.gh7a(ro0x, "data-index") - 1;
                a3x.x4B(ro0x, "j-selected");
                a3x.y4C(this.fL7E[r4v], "j-selected");
                break;
            case 40:
                var r4v = parseInt(a3x.gh7a(ro0x, "data-index")) + 1 >= bq5v ? 0 : parseInt(a3x.gh7a(ro0x, "data-index")) + 1;
                a3x.x4B(ro0x, "j-selected");
                a3x.y4C(this.fL7E[r4v], "j-selected");
                break;
            default:
                this.wZ3x()
        }
    };
    b4f.QD8v = function(d4h) {
        var jN8F = d4h.keyCode || d4h.which;
        var bo5t = this.ee6Y.value;
        var r4v = a3x.H4L(this.n4r, "j-receiver").length - 1;
        if (jN8F === 8 && bo5t === "") this.bYW5b(r4v)
    };
    b4f.fN7G = function(d4h) {
        var bo5t = this.ee6Y.value;
        if (bo5t.length > 10) {
            this.ee6Y.value = bo5t.substring(0, 10);
            return
        }
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.bwI7B.g4k(this), 0) : this.bwI7B();
        this.Rd9U()
    };
    b4f.lb8T = function() {
        if (this.bk4o[0]) this.wZ3x();
        else this.bJg0x(this.bYN5S);
        a3x.ba4e(this.Bo4s, "display", "none")
    };
    b4f.oa9R = function() {
        var bq5v = a3x.H4L(this.n4r, "j-receiver").length;
        if (this.ee6Y.value.trim() == "" && bq5v <= 0) a3x.ba4e(this.Bo4s, "display", "block")
    };
    b4f.bvN7G = function(lf8X, ij8b) {
        var IT6N = this.Qt8l();
        if (IT6N.length >= 10) {
            this.dP6J();
            return
        }
        var bc4g;
        for (bc4g = 0; bc4g < IT6N.length; bc4g++) {
            if (IT6N[bc4g] == ij8b) {
                this.ot9k();
                return
            }
        }
        if (!lf8X || !ij8b) return;
        var f4j = a3x.dy6s(a3x.iu8m(a3x.bZ5e(bZn5s, {
            username: lf8X,
            userId: ij8b
        })));
        var bI5N = this.bJd0x.parentNode;
        if (this.bZl5q) {
            this.ZI1x()
        }
        bI5N.insertBefore(f4j, this.bJd0x);
        this.ee6Y.value = "";
        var bq5v = a3x.H4L(this.n4r, "j-receiver").length;
        if (bq5v > 1) a3x.ba4e(this.Bo4s, "display", "none");
        this.bwI7B();
        this.Rd9U()
    };
    b4f.ZI1x = function() {
        var Qn8f = a3x.H4L(this.n4r, "j-receiver");
        var bc4g;
        if (Qn8f.length > 0) {
            for (bc4g = 0; bc4g < Qn8f.length; bc4g++) {
                a3x.cJ5O(Qn8f[bc4g], false)
            }
        }
    };
    b4f.bYX5c = function() {
        this.ee6Y.value = ""
    };
    b4f.bYW5b = function(r4v) {
        this.dP6J(!0);
        var Qn8f = a3x.H4L(this.n4r, "j-receiver");
        a3x.cJ5O(Qn8f[r4v], false);
        this.Rd9U()
    };
    b4f.wZ3x = function() {
        var bo5t = this.ee6Y.value;
        var bv5A = bo5t.trim().toLowerCase();
        var j4n;
        bv5A = bv5A.replace(/\[/g, "\\[");
        bv5A = bv5A.replace(/\]/g, "\\]");
        j4n = this.bJe0x(bv5A);
        this.bYM5R(j4n)
    };
    b4f.ot9k = function(d4h) {
        a3x.ba4e(this.Vq0x, "display", "none")
    };
    b4f.dP6J = function(fr6l) {
        if (fr6l && this.nt9k) {
            a3x.ba4e(this.nt9k, "display", "none");
            return
        }
        if (this.nt9k) a3x.ba4e(this.nt9k, "display", "block")
    };
    b4f.bZa5f = function(d4h) {
        h4l.cp5u(d4h);
        var bO5T = d4h.target || d4h.srcElement;
        if (a3x.bE5J(bO5T, "j-flag")) return;
        var bI5N = bO5T.nodeName.toLowerCase() == "a" ? bO5T.parentNode : bO5T.parentNode.parentNode;
        var lf8X = a3x.gh7a(bI5N, "data-username");
        var ij8b = a3x.gh7a(bI5N, "data-userId");
        this.bvN7G(lf8X, ij8b);
        this.ot9k();
        a3x.ba4e(this.Bo4s, "display", "none")
    };
    b4f.bYZ5e = function(d4h) {
        h4l.bh4l(d4h);
        var bO5T = d4h.target || d4h.srcElement;
        if (a3x.bE5J(bO5T.parentNode, "j-receiver")) {
            a3x.cJ5O(bO5T.parentNode, false);
            this.dP6J(!0);
            this.Rd9U()
        } else this.ee6Y.focus()
    };
    b4f.bwI7B = function() {
        this.bwd7W.innerHTML = this.ee6Y.value;
        var cA5F = this.bwd7W.offsetWidth + 2;
        a3x.ba4e(this.ee6Y, "width", cA5F + "px")
    };
    b4f.Rd9U = function() {
        var baw2x = a3x.hO7H(this.ee6Y, this.n4r).y;
        var bIX0x = Math.floor((baw2x - 8) / 27);
        if (bIX0x < 0) return;
        a3x.ba4e(this.bvT7M, "height", 19 + bIX0x * 29 + "px")
    };
    b4f.Rf9W = function() {
        var qc0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qc0x.length; i++) {
            a3x.ba4e(this.bwd7W, qc0x[i], a3x.df5k(this.ee6Y, qc0x[i]))
        }
    };
    b4f.bJg0x = function(cK5P, C4G) {
        var dn6h = C4G ? C4G : window.GUser.userId;
        var Y4c = "/api/user/getfollows/" + dn6h;
        var gm7f = v4z.bn5s(Y4c, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cK5P.g4k(this),
            onerror: function(j4n) {
                this.bk4o = []
            },
            onbeforerequest: function(j4n) {}
        })
    };
    b4f.bJf0x = function(j4n) {
        this.bk4o = JSON.parse(j4n).follow || [];
        var C4G = GUser.userId;
        for (var i = 0; i < this.bk4o.length; i++) {
            if (this.bk4o[i].userId == C4G) {
                this.bk4o.splice(i, 1);
                continue
            }
            this.bk4o[i].avatarUrl = this.bk4o[i].avatarUrl + "?param=30y30"
        }
    };
    b4f.bYN5S = function(j4n) {
        if (this.bk4o[0]) return;
        this.bJf0x(j4n);
        this.wZ3x()
    };
    b4f.bJe0x = function(bv5A) {
        var bv5A = bv5A ? bv5A : "";
        this.bk4o = this.bk4o[0] ? this.bk4o : [];
        var bq5v = this.bk4o.length;
        var Qc8U = this.Qt8l();
        var sH1x = [];
        var PO8G, Px8p, beS3x;
        if (!this.bk4o[0]) return sH1x;
        for (var bc4g = 0; bc4g < bq5v; bc4g++) {
            beS3x = false;
            for (var v4z = 0; v4z < Qc8U.length; v4z++) {
                if (this.bk4o[bc4g].userId == Qc8U[v4z]) {
                    beS3x = true;
                    break
                }
            }
            if (beS3x) continue;
            PO8G = this.bk4o[bc4g].nickname.toLowerCase().search(bv5A);
            Px8p = this.bk4o[bc4g].py ? this.bk4o[bc4g].py.toLowerCase().search(bv5A) : -1;
            if (PO8G !== -1 || Px8p != -1) sH1x.push(this.bk4o[bc4g])
        }
        return sH1x
    };
    b4f.bYM5R = function(j4n) {
        a3x.dI6C(this.Vq0x, bZr5w, {
            users: j4n
        });
        a3x.y4C(a3x.H4L(this.n4r, "j-item")[0], "j-selected");
        this.fL7E = a3x.H4L(this.n4r, "j-item");
        a3x.ba4e(this.Vq0x, "display", "block")
    };
    b4f.Qt8l = function() {
        var sH1x = a3x.H4L(this.n4r, "j-receiver") || [];
        var ij8b = [];
        for (var i = 0; i < sH1x.length; i++) {
            ij8b.push(a3x.gh7a(sH1x[i], "data-id"))
        }
        return ij8b
    };
    b4f.cGd3x = function() {
        var ij8b = this.Qt8l();
        var sH1x = [];
        for (var i = 0; i < ij8b.length; i++) {
            for (var j = 0; j < this.bk4o.length; j++) {
                if (ij8b[i] == this.bk4o[j].userId) sH1x.push(this.bk4o[j])
            }
        }
        return sH1x
    };
    b4f.bYz5E = function() {
        this.ZI1x()
    };
    w4A.Gi5n.L4P = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m4q.pi0x.L4P({
                title: "登录"
            });
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined) e4i.parent = document.body; !! this.ff6Z && this.ff6Z.T4X();
        this.ff6Z = this.A4E(e4i)
    };
    w4A.Gi5n.bu5z = function() { !! this.ff6Z && this.ff6Z.T4X()
    };
    w4A.Gi5n.GU6O = function() {
        return this.ot9k()
    };
    w4A.Gi5n.cGe3x = function() {
        return this.wZ3x()
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        l4p = c4g("nm.x"),
        m4q = c4g("nm.l"),
        b4f, K4O;
    m4q.IC6w = NEJ.C();
    b4f = m4q.IC6w.O4S(m4q.blX5c);
    K4O = m4q.IC6w.cs5x;
    b4f.bl5q = function() {
        var GX6R;
        var bYr5w = function(D4H, J4N) {
            GX6R = GX6R || [];
            if (J4N != "18") GX6R.push({
                key: J4N,
                value: D4H
            })
        };
        return function(e4i) {
            this.bm5r(e4i);
            if (e4i.upwards) {
                a3x.y4C(this.n4r, "m-emts-up")
            } else {
                a3x.x4B(this.n4r, "m-emts-up")
            }
            if (e4i.rightwards) {
                a3x.y4C(this.n4r, "m-emts-right")
            } else {
                a3x.x4B(this.n4r, "m-emts-right")
            }
            if (!GX6R) {
                var bz5E = l4p.cnf8X();
                k4o.eC6w(bz5E, bYr5w)
            }
            var bq5v = GX6R.length;
            GX6R.splice(bq5v - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bbW2x = GX6R;
            this.bYp5u = !! e4i.autoHide
        }
    }();
    b4f.ce5j = function() {
        this.cd5i = "ntp-portrait"
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        this.bK5P = i4m[0];
        this.bYi5n = i4m[1];
        this.bYh5m = i4m[2];
        this.bYg5l = i4m[3];
        h4l.s4w(this.bK5P, "click", this.xO3x.g4k(this));
        h4l.s4w(this.bYi5n, "click", this.Hd6X.g4k(this, 1));
        h4l.s4w(this.bYg5l, "click", this.Hd6X.g4k(this, 2))
    };
    b4f.bfs3x = function(r4v) {
        this.bcf2x = r4v;
        var bi4m = (r4v - 1) * 50;
        var i4m = this.bbW2x.slice(bi4m, Math.min(bi4m + 50, this.bbW2x.length));
        this.bK5P.innerHTML = a3x.bZ5e("jst-portrait", {
            plist: i4m
        }, {
            purl: l4p.bOK1x
        });
        this.bYh5m.innerText = r4v + "/" + Math.ceil(this.bbW2x.length / 50)
    };
    b4f.Hd6X = function(r4v) {
        var bYe5j = Math.ceil(this.bbW2x.length / 50);
        if (r4v == 1 && this.bcf2x == 1 || r4v == 2 && this.bcf2x == bYe5j) return;
        r4v == 1 ? this.bfs3x(this.bcf2x - 1) : this.bfs3x(this.bcf2x + 1)
    };
    b4f.xO3x = function(d4h) {
        var F4J = h4l.W4a(d4h, "d:text");
        if (!F4J) return;
        var d4h = {
            url: a3x.t4x(F4J, "url"),
            text: a3x.t4x(F4J, "text")
        };
        this.z4D("onselect", d4h);
        if (this.bYp5u && !d4h.stopped) {
            this.bu5z()
        }
    };
    b4f.L4P = function() {
        K4O.L4P.call(this);
        this.bfs3x(1)
    }
})();
(function() {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        dv6p = c4g("nej.p"),
        be4i = c4g("nej.h"),
        I4M = c4g("nej.ut"),
        ku8m = /^[#?]+/,
        HA6u = /#(.*?)$/,
        xN3x = window,
        bfw3x = !history.pushState || dv6p.HP6J.android || !history.auto;
    var bcu2x = function(Y4c, bfz3x) {
        xN3x.history[!bfz3x ? "pushState" : "replaceState"](null, document.title, Y4c)
    };
    var bcB2x = function() {
        return location.parse(xN3x.location.href)
    };
    bcu2x = bcu2x.eB6v(function(d4h) {
        if (!bfw3x) return;
        var bf4j = d4h.args;
        d4h.stopped = !0;
        Y4c = bf4j[0].replace(ku8m, "");
        !bf4j[1] ? xN3x.location.hash = Y4c : xN3x.location.replace("#" + Y4c)
    });
    bcB2x = bcB2x.eB6v(function(d4h) {
        if (!bfw3x) return;
        d4h.stopped = !0;
        var dO6I = HA6u.test(xN3x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dO6I.replace(ku8m, ""))
    });
    location.redirect = function(Y4c, bfz3x) {
        bcu2x(Y4c, bfz3x);
        return this
    };
    location.active = function() {
        var eg6a, Y4c, jA8s, cX5c, RU9L;
        var bfC3x = function(hn7g) {
            if ( !! cX5c) {
                cX5c = !1;
                return
            }
            var d4h = {
                oldValue: jA8s,
                newValue: bcB2x()
            };
            if ( !! location.ignored) {
                location.ignored = !1
            } else {
                h4l.z4D(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if ( !! jA8s) {
                        cX5c = !0;
                        bcu2x(jA8s.href, !0)
                    }
                    return
                }
            }
            Y4c = xN3x.location.href;
            jA8s = d4h.newValue;
            h4l.z4D(location, "urlchange", jA8s);
            be4i.bgw3x(jA8s.href)
        };
        var bIF0x = function() {
            if (Y4c != xN3x.location.href) bfC3x();
            eg6a = requestAnimationFrame(bIF0x)
        };
        return function(bJ5O) {
            if ( !! RU9L) return this;
            RU9L = !0;
            xN3x = bJ5O || window;
            if (bfw3x && "onhashchange" in window && dv6p.nj9a.trident2) {
                h4l.s4w(xN3x, "hashchange", bfC3x);
                bfC3x()
            } else if (!eg6a) {
                eg6a = requestAnimationFrame(bIF0x)
            }
            return this
        }
    }();
    location.parse = function() {
        var gK7D = /^https?:\/\/.*?\//i,
            ku8m = /[?#]/;
        return function(Y4c) {
            var o4s = {
                href: Y4c
            };
            Y4c = (Y4c || "").replace(gK7D, "/").split(ku8m);
            var cF5K = 1;
            if (Y4c[0] == "/" && (Y4c[1] || "").indexOf("/") == 0) cF5K = 2;
            o4s.path = Y4c.splice(0, cF5K).join("?");
            o4s.query = k4o.hv7o(Y4c.join("&"));
            return o4s
        }
    }();
    location.same = function(Y4c) {
        return bcB2x().href == Y4c
    };
    I4M.fJ7C.A4E({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        go7h = c4g("nm.ut");
    go7h.vw2x = function(ep6j) {
        var he7X = {
            text: "",
            start: 0,
            end: 0
        };
        if (ep6j.setSelectionRange) {
            he7X.start = ep6j.selectionStart;
            he7X.end = ep6j.selectionEnd;
            he7X.text = he7X.start != he7X.end ? ep6j.value.substring(he7X.start, he7X.end) : ""
        } else if (document.selection) {
            var i, bcM2x = document.selection.createRange(),
                xA3x = document.body.createTextRange();
            xA3x.moveToElementText(ep6j);
            he7X.text = bcM2x.text;
            he7X.bookmark = bcM2x.getBookmark();
            for (i = 0; xA3x.compareEndPoints("StartToStart", bcM2x) < 0 && bcM2x.moveStart("character", - 1) !== 0; i++) {
                if (ep6j.value.charAt(i) == "\n") {
                    i++
                }
            }
            he7X.start = i;
            he7X.end = he7X.text.length + he7X.start
        }
        return he7X
    };
    go7h.bcR2x = function(ep6j, he7X) {
        var xA3x;
        if (!he7X) {
            he7X = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ep6j.focus();
        if (ep6j.setSelectionRange) {
            ep6j.setSelectionRange(he7X.start, he7X.end)
        } else if (ep6j.createTextRange) {
            xA3x = ep6j.createTextRange();
            if (ep6j.value.length === he7X.start) {
                xA3x.collapse(false);
                xA3x.select()
            } else {
                xA3x.moveToBookmark(he7X.bookmark);
                xA3x.select()
            }
        }
    };
    go7h.HY6S = function(ep6j, he7X, cG5L) {
        var he7X = he7X || {
            text: "",
            start: 0,
            end: 0
        };
        var bfL3x, bIE0x, xA3x, Nm8e, bID0x, bIC0x, Hu6o;
        this.bcR2x(ep6j, he7X);
        if (ep6j.setSelectionRange) {
            bfL3x = ep6j.value;
            bIE0x = bfL3x.substring(0, he7X.start) + cG5L + bfL3x.substring(he7X.end);
            bID0x = bIC0x = he7X.start + cG5L.length;
            Hu6o = ep6j.scrollTop;
            ep6j.value = bIE0x;
            if (ep6j.scrollTop != Hu6o) {
                ep6j.scrollTop = Hu6o
            }
            ep6j.setSelectionRange(bID0x, bIC0x)
        } else if (ep6j.createTextRange) {
            Nm8e = document.selection.createRange();
            Nm8e.text = cG5L;
            Nm8e.setEndPoint("StartToEnd", Nm8e);
            Nm8e.select()
        }
        h4l.z4D(ep6j, "keyup")
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dv6p = c4g("nej.p"),
        k4o = c4g("nej.u"),
        ca5f = c4g("nej.ut"),
        w4A = c4g("nm.w"),
        go7h = c4g("nm.ut"),
        b4f;
    w4A.bIB0x = NEJ.C();
    b4f = w4A.bIB0x.O4S(ca5f.cH5M);
    b4f.cx5C = function(e4i) {
        this.cD5I(e4i)
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.gp7i = e4i.txt;
        this.Hx6r = e4i.sgtsContainer;
        this.bIy0x = e4i.sgtsList[0];
        this.bep3x = e4i.sgtsItem;
        this.oE9v = e4i.rangeData;
        this.HQ6K = e4i.atIndex;
        a3x.y4C(this.bep3x[0], "selected-item");
        this.MO7H()
    };
    b4f.bD5I = function() {
        this.bG5L();
        h4l.mw9n(document.body, "keyup", this.bIx0x.g4k(this));
        h4l.mw9n(document.body, "click", this.bIw0x.g4k(this))
    };
    b4f.MO7H = function() {
        this.bX5c([
            [document.body, "keyup", this.bIx0x.g4k(this)],
            [document.body, "click", this.bIw0x.g4k(this)],
            [this.gp7i, "keydown", this.bIu0x.g4k(this)],
            [this.gp7i, "keypress", this.bIu0x.g4k(this)],
            [this.bIy0x, "click", this.bIt0x.g4k(this)],
            [this.bIy0x, "mouseover", this.HF6z.g4k(this)]
        ])
    };
    b4f.HF6z = function(d4h) {
        var bO5T = h4l.W4a(d4h);
        var p4t = a3x.H4L(this.Hx6r, "selected-item");
        if (a3x.bE5J(bO5T, "j-sgt")) {
            a3x.x4B(p4t[0], "selected-item");
            a3x.y4C(bO5T, "selected-item")
        }
    };
    b4f.bIx0x = function(d4h) {
        var p4t = a3x.H4L(this.Hx6r, "selected-item");
        var bq5v = this.bep3x.length;
        var jN8F = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (jN8F) {
            case 38:
                r4v = a3x.gh7a(p4t[0], "data-index") - 1 < 0 ? bq5v - 1 : a3x.gh7a(p4t[0], "data-index") - 1;
                a3x.x4B(p4t[0], "selected-item");
                a3x.y4C(this.bep3x[r4v], "selected-item");
                break;
            case 40:
                r4v = parseInt(a3x.gh7a(p4t[0], "data-index")) + 1 >= bq5v ? 0 : parseInt(a3x.gh7a(p4t[0], "data-index")) + 1;
                a3x.x4B(p4t[0], "selected-item");
                a3x.y4C(this.bep3x[r4v], "selected-item");
                break;
            case 13:
                this.bIt0x(d4h);
                break;
            case 27:
                this.ot9k();
                break;
            case 32:
                var bo5t = this.gp7i.value;
                var r4v = go7h.vw2x(this.gp7i);
                if (bo5t.charAt(r4v.start - 1) !== " ") return;
                this.ot9k();
                break
        }
    };
    b4f.bIu0x = function(d4h) {
        var jN8F = d4h.keyCode || d4h.which;
        if (jN8F === 13 || jN8F === 38 || jN8F === 40) {
            h4l.cp5u(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b4f.bIw0x = function(d4h) {
        var bO5T = d4h.target || d4h.srcElement;
        if (bO5T === this.gp7i) return;
        this.ot9k()
    };
    b4f.bIt0x = function(d4h) {
        h4l.bh4l(d4h);
        var p4t = a3x.H4L(this.Hx6r, "selected-item")[0];
        var ro0x = d4h.target || d4h.srcElement;
        var u4y = d4h.type;
        if (a3x.bE5J(ro0x, "lst")) return;
        if (u4y == "click") {
            a3x.x4B(p4t, "selected-item");
            a3x.y4C(ro0x, "selected-item")
        } else ro0x = p4t;
        var j4n = ro0x.innerHTML + " ";
        this.ot9k();
        var he7X = this.oE9v;
        he7X.start = this.HQ6K + 1;
        if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "9.0") {
            this.gp7i.value = this.gp7i.value.substring(0, he7X.start) + this.gp7i.value.substring(he7X.end, this.gp7i.value.length);
            he7X.end = he7X.start
        }
        go7h.HY6S(this.gp7i, he7X, j4n);
        h4l.z4D(this.gp7i, "keyup")
    };
    b4f.ot9k = function(d4h) {
        if ( !! this.Hx6r) a3x.ba4e(this.Hx6r, "display", "none");
        this.T4X()
    };
    b4f.wZ3x = function(d4h) {
        if ( !! this.Hx6r) a3x.ba4e(this.Hx6r, "display", "block")
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        w4A = c4g("nm.w"),
        ca5f = c4g("nej.ut"),
        bC5H = c4g("nej.ui"),
        b4f;
    var bXB4F = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bXA4E = a3x.es6m("m-wgt-atlist");
    var iZ8R = a3x.tO2x(bXB4F);
    w4A.bIq0x = NEJ.C();
    b4f = w4A.bIq0x.O4S(bC5H.ei6c);
    b4f.cx5C = function(e4i) {
        this.fP7I = {};
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.fP7I.txt = a3x.B4F(e4i.target);
        this.fP7I.data = e4i.data;
        this.fP7I.offset = e4i.offset;
        this.fP7I.rangeData = e4i.rangeData;
        this.fP7I.atIndex = e4i.atIndex;
        this.bXv4z(e4i);
        this.bm5r(e4i);
        this.fP7I.sgtsContainer = this.n4r;
        this.fP7I.sgtsList = a3x.H4L(this.n4r, "lst");
        this.fP7I.sgtsItem = a3x.H4L(this.n4r, "f-thide");
        this.JM6G(e4i);
        this.bXr4v = w4A.bIB0x.A4E(this.fP7I)
    };
    b4f.bD5I = function(e4i) {
        this.bG5L();
        this.bXr4v.T4X()
    };
    b4f.ce5j = function() {
        this.mb9S = iZ8R
    };
    b4f.bW5b = function() {
        this.cg5l()
    };
    b4f.bXv4z = function(e4i) {
        this.n4r = a3x.dy6s(a3x.iu8m(a3x.bZ5e(bXA4E, e4i.data)))
    };
    b4f.JM6G = function(e4i) {
        var bIi0x = a3x.H4L(this.n4r, "selected-item")[0];
        if (bIi0x) a3x.x4B(bIi0x, "selected-item");
        var cY5d = e4i.offset.x + "px";
        var hB7u = e4i.offset.y + "px";
        a3x.ba4e(this.n4r, "left", cY5d);
        a3x.ba4e(this.n4r, "top", hB7u)
    }
})();
(function() {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        go7h = c4g("nm.ut");
    go7h.bIh0x = function(bo5t) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dh6b = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var LJ7C = bo5t.match(dh6b) || [];
        for (var bc4g = 0; bc4g < LJ7C.length; bc4g++) {
            LJ7C[bc4g] = LJ7C[bc4g].split("@")[1]
        }
        LJ7C = LJ7C.reverse();
        var ij8b = GUser.userId;
        var bXf4j = v4z.sw1x("mentioners" + ij8b) || [];
        var jV8N = LJ7C.concat(bXf4j);
        if (jV8N.length > 10) jV8N = jV8N.slice(0, 10);
        v4z.uW2x("mentioners" + ij8b, jV8N)
    };
    go7h.bXe4i = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ij8b = GUser.userId;
        return v4z.sw1x("mentioners" + ij8b) || []
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dv6p = c4g("nej.p"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        ca5f = c4g("nej.ut"),
        w4A = c4g("nm.w"),
        go7h = c4g("nm.ut"),
        l4p = c4g("nm.x"),
        b4f;
    var FullscreenApi = l4p.EA5F || {};
    w4A.bIg0x = NEJ.C();
    b4f = w4A.bIg0x.O4S(ca5f.cH5M);
    b4f.cx5C = function(e4i) {
        this.cD5I(e4i);
        this.bIf0x()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.gp7i = e4i.txt;
        this.n4r = e4i.body;
        this.bId0x = e4i.before;
        this.NN8F = e4i.flag;
        this.bWX4b = e4i.after;
        this.ra0x = [];
        if (dv6p.ds6m.browser != "ie") {
            setTimeout(function() {
                this.mh9Y()
            }.g4k(this), 0)
        }
        this.MO7H()
    };
    b4f.bD5I = function() {
        this.bG5L();
        if (this.ux2x) this.ux2x.T4X();
        delete this.ux2x
    };
    b4f.MO7H = function() {
        this.bX5c([
            [this.gp7i, "keyup", this.bIb0x.g4k(this, this.gp7i)],
            [this.gp7i, "click", this.bIb0x.g4k(this, this.gp7i)],
            [this.gp7i, "focus", this.mh9Y.g4k(this)]
        ])
    };
    b4f.mh9Y = function(d4h) {
        this.oE9v = go7h.vw2x(this.gp7i)
    };
    b4f.bIf0x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var dn6h = window.GUser.userId;
        var Y4c = "/api/user/getfollows/" + dn6h;
        var gm7f = v4z.bn5s(Y4c, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }.g4k(this),
            onerror: function(j4n) {},
            onbeforerequest: function(j4n) {}
        })
    };
    b4f.bHV0x = function(index) {
        var D4H = this.gp7i.value,
            bi4m, bgG3x, bgH3x, Nl8d;
        this.bId0x.innerHTML = k4o.dG6A(D4H.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mz9q = a3x.H4L(this.bId0x, "j-test");
        for (var bc4g = 0; bc4g < mz9q.length; bc4g++) {
            mz9q[bc4g].innerText = " "
        }
        this.NN8F.innerHTML = D4H.charAt(index);
        this.bWX4b.innerHTML = k4o.dG6A(D4H.substr(index + 1, D4H.length));
        Nl8d = parseInt(a3x.df5k(this.gp7i, "lineHeight"));
        a3x.ba4e(this.n4r, "display", "block");
        bgG3x = a3x.hO7H(this.NN8F, this.n4r);
        bgH3x = a3x.hO7H(this.gp7i);
        a3x.ba4e(this.n4r, "display", "none");
        var cY5d = bgG3x.x + bgH3x.x;
        var hB7u = bgG3x.y + bgH3x.y + Nl8d;
        bi4m = {
            x: cY5d,
            y: hB7u
        };
        this.bWL4P(bi4m)
    };
    b4f.bIb0x = function(ep6j, d4h) {
        h4l.cp5u(d4h);
        var ep6j = ep6j;
        var D4H = ep6j.value;
        var bq5v = D4H.length;
        var r4v = go7h.vw2x(ep6j).start;
        var bHS0x = 0;
        var jN8F = d4h.keyCode || d4h.which;
        var jV8N;
        this.oE9v = go7h.vw2x(ep6j);
        var bHR0x = false;
        for (var i = 1; i < 20; i++) {
            jV8N = r4v - i;
            if (D4H.charAt(jV8N) === " ") break;
            if (D4H.charAt(jV8N) === "@") {
                bHR0x = true;
                this.HQ6K = bHS0x = jV8N;
                break
            }
        }
        if (bHR0x && d4h.shiftKey === false && jN8F !== 38 && jN8F !== 40) {
            if (jN8F !== 27 && jN8F !== 13) {
                this.ux2x ? this.ux2x.T4X() : null;
                this.bHV0x(bHS0x)
            }
        } else if (jN8F !== 38 && jN8F !== 40 && d4h.keyCode !== 32) {
            this.ux2x ? this.ux2x.T4X() : null
        }
    };
    b4f.bWL4P = function(bi4m) {
        var bi4m = bi4m;
        var j4n = this.vb2x();
        var e4i = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi4m,
            data: j4n,
            target: this.gp7i,
            rangeData: this.oE9v,
            atIndex: this.HQ6K
        };
        this.ux2x ? this.ux2x.T4X() : null;
        this.ux2x = w4A.bIq0x.A4E(e4i)
    };
    b4f.vb2x = function() {
        var bWH4L = go7h.vw2x(this.gp7i).start;
        var bWG4K = this.HQ6K + 1;
        var bHQ0x = go7h.bXe4i() || [];
        var bHP0x = [];
        var bv5A = this.gp7i.value.substring(bWG4K, bWH4L).toLowerCase();
        bv5A = bv5A.replace(/\[/g, "\\[");
        bv5A = bv5A.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.ra0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.ra0x = [];
        if (!this.ra0x[0]) this.bIf0x();
        for (var bc4g = 0; bc4g < bHQ0x.length; bc4g++) {
            for (var v4z = 0; v4z < this.ra0x.length; v4z++) {
                if (this.ra0x[v4z].nickname == bHQ0x[bc4g]) bHP0x.push(this.ra0x[v4z])
            }
        }
        this.ra0x = k4o.cqe9V(this.ra0x, bHP0x, {
            union: true,
            begin: true
        });
        var bWD4H = this.ra0x.length;
        var bdD3x = [];
        var PO8G, Px8p;
        if (!this.ra0x[0]) return {
            suggests: bdD3x
        };
        for (var i = 0; i < bWD4H; i++) {
            PO8G = this.ra0x[i].nickname.toLowerCase().search(bv5A);
            Px8p = this.ra0x[i].py ? this.ra0x[i].py.toLowerCase().search(bv5A) : -1;
            if (PO8G !== -1 || Px8p != -1) bdD3x.push(this.ra0x[i]);
            if (bdD3x.length === 10) break
        }
        return {
            suggests: bdD3x
        }
    };
    b4f.NB8t = function() {
        var he7X = this.oE9v || {
            text: "",
            start: 0,
            end: 0
        };
        h4l.z4D(this.gp7i, "focus");
        go7h.HY6S(this.gp7i, he7X, "@");
        this.oE9v = go7h.vw2x(this.gp7i);
        this.HQ6K = he7X.start;
        this.bHV0x(this.HQ6K)
    };
    b4f.GU6O = function() {
        if (this.ux2x) this.ux2x.T4X()
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        w4A = c4g("nm.w"),
        ca5f = c4g("nej.ut"),
        bC5H = c4g("nej.ui"),
        b4f;
    var bWC4G = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bWB4F = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gi7b = a3x.iu8m(bWB4F);
    var iZ8R = a3x.tO2x(bWC4G);
    w4A.NT8L = NEJ.C();
    b4f = w4A.NT8L.O4S(bC5H.ei6c);
    b4f.cx5C = function(e4i) {
        this.fP7I = {};
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i);
        this.fP7I.txt = a3x.B4F(e4i.target);
        this.Rf9W();
        this.NV8N = w4A.bIg0x.A4E(this.fP7I)
    };
    b4f.bD5I = function(e4i) {
        this.bG5L();
        this.NV8N.T4X()
    };
    b4f.ce5j = function() {
        this.cd5i = gi7b;
        this.mb9S = iZ8R
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.dk6e(a3x.B4F(this.n4r));
        this.fP7I.body = this.n4r;
        this.fP7I.before = i4m[0];
        this.fP7I.flag = i4m[1];
        this.fP7I.after = i4m[2]
    };
    b4f.Rf9W = function() {
        var qc0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qc0x.length; i++) {
            if (qc0x[i] === "width" && a3x.df5k(this.fP7I.txt, qc0x[i]) == "100%") {
                var bWA4E = this.fP7I.txt.offsetWidth;
                if (!bWA4E) {
                    setTimeout(function() {
                        a3x.ba4e(this.n4r, qc0x[i], this.fP7I.txt.offsetWidth + "px")
                    }.g4k(this), 300)
                } else {
                    a3x.ba4e(this.n4r, qc0x[i], this.fP7I.txt.offsetWidth + "px")
                }
                continue
            }
            a3x.ba4e(this.n4r, qc0x[i], a3x.df5k(this.fP7I.txt, qc0x[i]))
        }
    };
    b4f.NB8t = function() {
        this.NV8N.NB8t()
    };
    b4f.GU6O = function() {
        this.NV8N.GU6O()
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        kM8E = c4g("nm.c"),
        R4V = {}, b4f;
    if ( !! kM8E.bhl3x) return;
    kM8E.bhl3x = NEJ.C();
    b4f = kM8E.bhl3x.O4S(I4M.cH5M);
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i)
    };
    b4f.bD5I = function() {
        this.bG5L()
    };
    b4f.Hp6j = function(fj6d, cK5P, bcN2x) {
        if (R4V[fj6d]) {
            this.hf7Y("register commonJST[" + fj6d + "] duplicate");
            return
        }
        if (!k4o.gG7z(cK5P)) {
            cK5P = ctl.comJST.bWy4C(fj6d, cK5P, bcN2x)
        }
        R4V[fj6d] = cK5P
    };
    b4f.bWw4A = function(bcD2x) {
        if (k4o.eJ6D(bcD2x)) {
            k4o.bd4h(bcD2x, function(p4t) {
                ctl.comJST.Hp6j.apply(this, p4t)
            }, this)
        } else if (k4o.lw8o(bcD2x)) {
            k4o.eC6w(bcD2x, function(eQ6K, J4N) {
                ctl.comJST.Hp6j(J4N, eQ6K)
            })
        }
    };
    b4f.bWy4C = function(fj6d, vz2x, bcN2x) {
        vz2x = vz2x || {};
        NEJ.X(vz2x, {
            comJST: this.ni9Z
        });
        if (vz2x.resetDataName && !k4o.eJ6D(vz2x.resetDataName)) {
            vz2x.resetDataName = [vz2x.resetDataName]
        }
        return function() {
            var j4n = arguments[0],
                jM8E = arguments[1];
            if (vz2x.resetDataName) {
                var jV8N = {};
                for (var i = 0, ii = vz2x.resetDataName.length; i < ii; i++) {
                    jV8N[vz2x.resetDataName[i]] = arguments[i]
                }
                j4n = jV8N;
                jM8E = arguments[ii]
            }
            NEJ.X(j4n, vz2x, dV6P);
            if (bcN2x) {
                jM8E = jM8E || {};
                NEJ.X(jM8E, bcN2x)
            }
            return a3x.bZ5e(fj6d, j4n, jM8E)
        }
    };
    b4f.ni9Z = function(fj6d) {
        if (!R4V[fj6d]) {
            this.hf7Y("commonJST[" + fj6d + "] is unregister");
            return ""
        } else {
            return R4V[fj6d].apply(null, fx6r.slice.call(arguments, 1))
        }
    };
    b4f.dump = function() {
        return R4V
    };
    b4f.hf7Y = function(bWu4y) {
        if (console && console.log) {
            console.log(bWu4y)
        }
    };
    var dV6P = function(eQ6K, J4N) {
        return J4N == "resetDataName"
    };
    c4g("ctl").comJST = kM8E.bhl3x.gr7k();
    a3x.cAF1x({
        comJST: c4g("ctl").comJST.ni9Z
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        bs5x = NEJ.F,
        fx6r = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        kM8E = c4g("nm.c"),
        l4p = c4g("nm.x"),
        R4V = {}, b4f;
    if ( !! kM8E.bhz4D) return;
    kM8E.bhz4D = NEJ.C();
    b4f = kM8E.bhz4D.O4S(I4M.cH5M);
    b4f.cx5C = function() {
        this.cD5I();
        var e4i = {
            "com-mv-artists": function(fO7H, dZ6T, Ow8o, bhB4F) {
                return a3x.bZ5e("com-mv-artists", {
                    artists: fO7H,
                    clazz: dZ6T,
                    boxClazz: bhB4F,
                    mark: Ow8o || function(cI5N) {
                        return cI5N
                    },
                    escape: k4o.dG6A,
                    comJST: ctl.comJST.ni9Z
                })
            },
            "com-album-artists": function(fO7H, dZ6T, Ow8o, bhB4F) {
                return a3x.bZ5e("com-album-artists", {
                    artists: fO7H,
                    clazz: dZ6T,
                    boxClazz: bhB4F,
                    mark: Ow8o || function(cI5N) {
                        return cI5N
                    },
                    escape: k4o.dG6A,
                    comJST: ctl.comJST.ni9Z
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k4o.dG6A
            },
            "com-user-type": function(dp6j, dZ6T, ly8q, xs3x, bHK0x) {
                return a3x.bZ5e("com-user-type", {
                    x: dp6j,
                    clazz: dZ6T || "",
                    clazz2: typeof bHK0x == "undefined" ? "icn" : bHK0x,
                    before: ly8q || "",
                    after: xs3x || "",
                    isEmptyObject: l4p.bOb1x
                })
            }
        };
        for (var C4G in e4i) {
            ctl.comJST.Hp6j(C4G, e4i[C4G])
        }
    };
    b4f.bl5q = function(e4i) {
        this.bm5r(e4i)
    };
    b4f.bD5I = function() {
        this.bG5L()
    };
    c4g("ctl").comJSTUtil = kM8E.bhz4D.gr7k()
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        a3x = c4g("nej.e"),
        dv6p = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        w4A = c4g("nm.w"),
        go7h = c4g("nm.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        m4q = c4g("nm.l"),
        bhF4J = [2, 3],
        dY6S = ["sn", "db"],
        b4f, K4O, bWr4v = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        }, bcs2x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        }, bHH0x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        }, bWl4p = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        }, Hb6V = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        }, FullscreenApi = l4p.EA5F || {};
    m4q.pJ0x = NEJ.C();
    b4f = m4q.pJ0x.O4S(m4q.en6h);
    K4O = m4q.pJ0x.cs5x;
    b4f.bl5q = function(e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bHF0x.g4k(this)
        }
        this.bm5r(e4i);
        this.CD4H = e4i.isPub;
        this.jF8x = e4i.rid || -1;
        this.ey6s = e4i.type || -1;
        this.bhT4X = e4i.purl;
        this.OZ8R = e4i.name || "";
        this.Pf8X = e4i.author || "";
        this.bhX4b = e4i.authors || "";
        this.bbB2x = e4i.actId;
        this.bbs2x = e4i.actName;
        this.bHB0x = e4i.title;
        this.bbi2x = {};
        this.bWf4j = e4i.mesg || "";
        this.bWe4i = e4i.placeholder || "说点什么吧";
        this.bih4l = e4i.hideTip;
        this.bWb4f = e4i.videoJumpUrl;
        var i4m, eR6L = +(new Date);
        try {
            i4m = top.localCache.B4F("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], eL6F; i < i4m.length; ++i) {
            eL6F = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!eL6F || eL6F.expires_in === undefined) continue;
            var baG2x = parseInt(eL6F.expires_in),
                baF2x = parseInt(i4m[i].refreshTime),
                bVZ4d = (baG2x + baF2x) * 1e3 - 5 * 60 * 1e3;
            if (bVZ4d > eR6L) this.bbi2x[i4m[i].type] = !0
        }
        this.wz2x = w4A.Gi5n.A4E({
            parent: this.bax2x,
            err: this.bHy0x
        });
        if (this.hA7t) {
            this.hA7t.T4X()
        }
        this.hA7t = w4A.NT8L.A4E({
            parent: document.body,
            target: this.ev6p
        });
        if (this.ey6s == 24 || this.ey6s == 21 || this.ey6s == 41 || this.GG6A()) {
            this.ya3x.style.display = "none"
        } else {
            this.ya3x.style.display = "";
            this.oC9t = w4A.bpi5n.A4E({
                parent: this.bix4B,
                button: this.ya3x,
                onstartupload: this.bHw0x.g4k(this, true),
                onfinishupload: this.bHw0x.g4k(this, false)
            })
        }
        if (this.GG6A()) {
            this.pn0x.innerText = "";
            a3x.y4C(this.pn0x, "info-video");
            a3x.y4C(this.biA4E, "f-hide")
        } else {
            a3x.x4B(this.biA4E, "f-hide")
        }
    };
    b4f.bD5I = function() {
        this.bG5L();
        if (this.wz2x) {
            this.wz2x.T4X();
            delete this.wz2x
        }
        if (this.hA7t) {
            this.hA7t.T4X();
            delete this.hA7t
        }
        if (this.oC9t) {
            this.oC9t.T4X();
            delete this.oC9t
        }
        if (this.ms9j) {
            this.ms9j.T4X();
            delete this.ms9j
        }
    };
    b4f.ce5j = function() {
        this.cd5i = "m-wgt-sharewin"
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.bHu0x = a3x.dk6e(this.n4r)[0];
        var bt5y = a3x.H4L(this.n4r, "j-flag");
        this.rg0x = bt5y.shift();
        this.bHy0x = bt5y.shift();
        this.bax2x = bt5y.shift();
        this.ev6p = bt5y.shift();
        this.pn0x = bt5y.shift();
        this.biF4J = bt5y.shift();
        this.bVQ4U = bt5y.shift();
        this.ya3x = bt5y.shift();
        this.cv5A = bt5y.shift();
        this.bix4B = bt5y.shift();
        this.Ca4e = bt5y.shift();
        this.cGh3x = bt5y.shift();
        this.biA4E = bt5y.shift();
        this.ek6e = bt5y.shift();
        this.Zs1x = a3x.H4L(this.biA4E, "j-t");
        this.BL4P = I4M.EE5J.A4E({
            list: a3x.dk6e(this.rg0x),
            selected: "z-slt",
            onchange: this.biL4P.g4k(this)
        });
        if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "8.0") {
            a3x.ba4e(this.bax2x, "position", "relative");
            a3x.ba4e(this.bax2x, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.Rp9g.g4k(this));
        h4l.s4w(this.ev6p, "input", this.fN7G.g4k(this));
        h4l.s4w(this.ev6p, "keyup", this.uU2x.g4k(this));
        h4l.s4w(this.n4r, "click", this.cM5R.g4k(this));
        this.S4W = q4u.blg4k.A4E();
        this.S4W.s4w("onshareall", this.Zk1x.g4k(this, 0));
        this.S4W.s4w("onshareerror", this.iY8Q.g4k(this));
        this.S4W.s4w("onshareprivate", this.Zk1x.g4k(this, 1));
        this.Zj1x = q4u.yN3x.A4E();
        this.hf7Y = q4u.hR7K.A4E();
        try {
            this.Rv9m = top.api.sharePermission
        } catch (e) {}
        if (!this.Rv9m) {
            this.Rv9m = Hb6V;
            v4z.bn5s("/api/event/user/permission", {
                type: "json",
                onload: function(d4h) {
                    if (d4h.code == 200) {
                        this.Rv9m = NEJ.EX(Hb6V, d4h)
                    }
                }.g4k(this)
            })
        }
    };
    b4f.biL4P = function(d4h) {
        d4h.index == 0 ? a3x.x4B(this.bHu0x, "m-plshare") : a3x.y4C(this.bHu0x, "m-plshare");
        this.bax2x.style.display = d4h.index == 0 ? "none" : "";
        this.bVQ4U.style.display = d4h.index == 0 ? "" : "none";
        this.ya3x.style.display = d4h.index == 0 ? "" : "none";
        if (this.ey6s == 24 || this.ey6s == 21) {
            this.ya3x.style.display = "none"
        }
        this.bHy0x.style.display = "none";
        this.ev6p.value = "";
        this.cf5k();
        this.Gh5m();
        if (d4h.index == 0) {
            var cA5F = a3x.df5k(this.ev6p, "width");
            if (cA5F == "auto" || !cA5F) {
                return
            } else {
                if (this.hA7t) {
                    this.hA7t.T4X()
                }
                this.hA7t = w4A.NT8L.A4E({
                    parent: document.body,
                    target: this.ev6p
                })
            }
            this.bix4B.style.display = ""
        } else {
            if (this.hA7t) {
                this.hA7t.T4X();
                delete this.hA7t
            }
            this.bix4B.style.display = "none"
        }
    };
    b4f.cM5R = function(d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        if (a3x.t4x(f4j, "action") == "search") {
            h4l.cp5u(d4h)
        } else if (a3x.t4x(f4j, "default") === undefined) {
            h4l.cp5u(d4h)
        }
        switch (a3x.t4x(f4j, "action")) {
            case "txt":
                this.mh9Y();
                break;
            case "search":
                if (this.GG6A()) {
                    top.location.href = this.bWb4f
                } else if (this.CD4H && this.ey6s != 24) {
                    if (this.ms9j) {
                        this.ms9j.T4X()
                    }
                    this.ms9j = w4A.bun7g.A4E({
                        parent: this.n4r.parentNode,
                        onfinish: this.biR4V.g4k(this),
                        oncancel: this.bVM4Q.g4k(this)
                    });
                    this.biT4X = true;
                    this.n4r.style.display = "none";
                    this.Gc5h(this.jF8x < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h4l.tr1x(d4h); !! this.hl7e && this.hl7e.bu5z();
                this.hA7t.NB8t();
                this.gk7d();
                break;
            case "emot":
                h4l.tr1x(d4h); !! this.hA7t && this.hA7t.GU6O();
                if (!this.hl7e) {
                    this.hl7e = m4q.IC6w.A4E({
                        parent: this.biF4J
                    });
                    this.hl7e.s4w("onselect", this.xO3x.g4k(this))
                }
                this.hl7e.L4P();
                break;
            case "upload":
                break;
            case "sns":
                h4l.bh4l(d4h);
                var biX4b, bv5A, u4y = a3x.t4x(f4j, "type");
                if (!this.bbi2x[u4y]) {
                    biX4b = f4j.href.split("?");
                    bv5A = k4o.hv7o(biX4b[1]);
                    bv5A["csrf_token"] = v4z.gy7r("__csrf");
                    top.open(biX4b[0] + "?" + k4o.cE5J(bv5A));
                    return
                }
                var bz5E = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l4p.Bd4h(f4j, "u-slg-" + bz5E[u4y] + "-gray");
                break;
            case "close":
                !! this.hl7e && this.hl7e.bu5z();
                this.bHF0x();
                break;
            case "share":
                h4l.bh4l(d4h);
                if (this.GG6A()) {
                    if (!a3x.bE5J(f4j, "u-btn2-2-dis")) {
                        this.bVL4P()
                    }
                } else if (a3x.bE5J(f4j, "u-btn2-2-dis")) {
                    if (!this.Rv9m.pubEventWithoutResource && this.jF8x < 0) {
                        this.bVJ4N()
                    } else {}
                } else if (this.jF8x < 0 && !this.ev6p.value && this.oC9t && this.oC9t.SV9M().length == 0) {
                    m4q.Z4d.L4P({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.bVH4L()
                }
                break
        }
    };
    b4f.bVJ4N = function() {
        var tp1x = 0,
            bjc4g = function() {
                if (tp1x % 2) {
                    a3x.x4B(this.pn0x, "z-show")
                } else {
                    a3x.y4C(this.pn0x, "z-show")
                }
                tp1x++;
                if (tp1x > 5) {
                    clearInterval(eg6a)
                }
            }, eg6a;
        return function() {
            tp1x = 0;
            clearInterval(eg6a);
            eg6a = setInterval(bjc4g.g4k(this), 200)
        }
    }();
    b4f.Rp9g = function(o4s) {
        o4s = o4s.result;
        this.bbi2x[o4s.type] = !0;
        var r4v = k4o.di6c(bhF4J, o4s.type),
            ch5m = "u-slg-" + dY6S[r4v] + "-gray";
        a3x.x4B(this.Zs1x[r4v], ch5m)
    };
    b4f.biR4V = function(by5D) {
        var j4n = by5D.data;
        this.jF8x = by5D.id;
        this.ey6s = by5D.type;
        this.n4r.style.display = "";
        this.Gc5h(this.bHB0x);
        this.ms9j && this.ms9j.T4X();
        this.biT4X = false;
        this.bhT4X = j4n.picUrl;
        this.OZ8R = j4n.title || "";
        this.Pf8X = j4n.author || "";
        this.bhX4b = j4n.authors || "";
        this.bVG4K();
        this.Yy1x()
    };
    b4f.bVM4Q = function() {
        this.ms9j && this.ms9j.T4X();
        this.n4r.style.display = "";
        this.Gc5h(this.bHB0x);
        this.biT4X = false;
        this.Yy1x()
    };
    b4f.xO3x = function(d4h) {
        var bo5t = "[" + d4h.text + "]";
        go7h.HY6S(this.ev6p, this.oE9v, bo5t);
        this.gk7d()
    };
    b4f.fN7G = function(d4h) {
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.gk7d.g4k(this), 0) : this.gk7d()
    };
    b4f.uU2x = function(d4h) {
        this.mh9Y();
        if (d4h.keyCode == 8) this.gk7d()
    };
    b4f.gk7d = function() {
        this.mh9Y();
        this.Gh5m()
    };
    b4f.Gh5m = function() {
        var bq5v = Math.ceil(k4o.fy6s(this.ev6p.value.trim()) / 2);
        this.cv5A.innerText = 140 - bq5v;
        bq5v > 140 ? a3x.fb6V(this.cv5A, "s-fc4", "s-fc6") : a3x.fb6V(this.cv5A, "s-fc6", "s-fc4")
    };
    b4f.bVH4L = function() {
        if (this.cO5T()) return;
        if (k4o.fy6s(this.ev6p.value.trim()) > 280) {
            this.cf5k("字数超过140个字符");
            return
        }
        var u4y = this.BL4P.tD1x(),
            j4n;
        if (u4y == 0) {
            for (var i = 0, Js6m = []; i < this.Zs1x.length; ++i) {
                if (!a3x.bE5J(this.Zs1x[i], "u-slg-" + dY6S[i] + "-gray")) Js6m.push(bhF4J[i])
            }
            this.cO5T(!0);
            j4n = {
                id: this.jF8x,
                msg: this.ev6p.value.trim(),
                type: this.Yp1x(this.ey6s),
                picUrl: this.bhT4X,
                snsTypes: Js6m.join(","),
                isPub: this.CD4H
            };
            if (this.bbB2x > 0) {
                j4n.actId = this.bbB2x;
                if (this.bbs2x) {
                    j4n.msg = "#" + this.bbs2x + "#" + j4n.msg
                }
            }
            var nN9E = this.oC9t && this.oC9t.SV9M();
            if (nN9E && nN9E.length) {
                j4n.pics = nN9E
            }
            this.S4W.cdC6w(j4n)
        } else {
            var sH1x = this.wz2x.Qt8l();
            if (sH1x.length <= 0) {
                this.cf5k("请至少选择一位好友");
                return
            }
            this.S4W.cdB6v({
                data: {
                    id: this.jF8x,
                    msg: this.ev6p.value.trim(),
                    type: this.Yp1x(this.ey6s == 41 ? 39 : this.ey6s),
                    userIds: "[" + sH1x.join(",") + "]"
                }
            })
        }
    };
    b4f.bVL4P = function() {
        if (this.cO5T()) {
            return
        }
        this.hf7Y.fu6o("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k4o.fy6s(this.ev6p.value.trim()) > 280) {
            this.cf5k("字数超过140个字符");
            return
        }
        this.cO5T(!0);
        var j4n = {
            msg: this.ev6p.value.trim() || "",
            type: "video"
        }, bVF4J = {
            videoId: this.jF8x
        };
        if (this.bbB2x > 0) {
            j4n.actId = this.bbB2x;
            if (this.bbs2x) {
                j4n.msg = "#" + this.bbs2x + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(bVF4J);
        this.S4W.cdA6u({
            data: {
                videoId: this.jF8x,
                commit: true
            },
            data2: j4n,
            snsTypes: ""
        })
    };
    b4f.Zk1x = function(u4y, o4s) {
        this.cO5T(!1);
        this.bu5z();
        if (!this.bih4l) {
            if (this.GG6A()) {
                m4q.Z4d.L4P({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                m4q.Z4d.L4P({
                    tip: "分享成功" + (o4s.point > 0 ? ' 获得<em class="s-fc6">' + o4s.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.z4D(m4q.pJ0x, "sharesuccess", {
            isPrivate: u4y,
            rid: this.jF8x,
            rtype: this.ey6s,
            data: o4s.event
        });
        this.z4D("onshare")
    };
    b4f.iY8Q = function(o4s) {
        this.cO5T(!1);
        var bH5M = "分享失败";
        if (o4s.code) {
            switch (o4s.code) {
                case 404:
                    bH5M = "分享的资源不存在";
                    break;
                case 407:
                    bH5M = "输入内容包含有关键字";
                    break;
                case 408:
                    bH5M = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bH5M = o4s.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l4p.fq6k({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.cf5k(bH5M)
    };
    b4f.mh9Y = function() {
        this.oE9v = go7h.vw2x(this.ev6p)
    };
    b4f.cf5k = function(bH5M) {
        this.dP6J(this.ek6e, bH5M)
    };
    b4f.cO5T = function(cX5c) {
        return this.dX6R(this.Ca4e, cX5c, "分享", "分享中...")
    };
    b4f.Yp1x = function(jr8j) {
        return bWr4v[jr8j] || ""
    };
    b4f.bVD4H = function() {
        var ep6j, uZ2x = this.Yp1x(this.ey6s);
        this.pn0x.style.display = "";
        if (this.jF8x < 0) {
            this.pn0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OZ8R) {
                this.pn0x.style.display = "none";
                return
            }
            var Ye1x = this.CD4H && this.ey6s != 24;
            ep6j = (bcs2x[uZ2x] ? bcs2x[uZ2x] + "：" : "") + this.OZ8R + (bHH0x[uZ2x] || " ") + (uZ2x == "mv" || uZ2x == "album" ? this.bhX4b || this.Pf8X : this.Pf8X);
            a3x.dI6C(this.pn0x, "m-xwgt-share-infobar", {
                canChange: Ye1x,
                info: ep6j
            });
            if (Ye1x) {
                a3x.x4B(this.pn0x, "z-dis")
            } else {
                a3x.y4C(this.pn0x, "z-dis")
            }
        }
        a3x.x4B(this.pn0x, "info-video")
    };
    b4f.bVG4K = function() {
        var uZ2x = this.Yp1x(this.ey6s),
            ep6j = (bcs2x[uZ2x] ? bcs2x[uZ2x] + "：" : "") + this.OZ8R + (bHH0x[uZ2x] || " ") + (uZ2x == "mv" || uZ2x == "album" ? this.bhX4b || this.Pf8X : this.Pf8X);
        Ye1x = this.CD4H && this.ey6s != 24;
        if (this.GG6A()) {} else {
            a3x.x4B(this.pn0x, "info-video");
            a3x.dI6C(this.pn0x, "m-xwgt-share-infobar", {
                canChange: Ye1x,
                isPub: this.CD4H,
                info: ep6j
            })
        }
    };
    b4f.bVC4G = function() {
        var Jy6s = this.ev6p.value;
        if (this.CD4H) {
            if ( !! this.biT4X) {
                return !!Jy6s && !! Jy6s.length || !! this.oC9t && this.oC9t.SV9M().length > 0
            } else {
                return !(this.jF8x < 0) || !! Jy6s && !! Jy6s.length || !! this.oC9t && this.oC9t.SV9M().length > 0
            }
        } else {
            return !!Jy6s && !! Jy6s.length || !! this.oC9t && this.oC9t.SV9M().length > 0
        }
    };
    b4f.Yy1x = function() {
        var bHn0x = false;
        if (!this.CD4H || this.Rv9m.pubEventWithoutResource || !(this.jF8x < 0)) {
            bHn0x = true
        }
        if (bHn0x) {
            a3x.x4B(this.Ca4e, "u-btn2-2-dis")
        } else {
            a3x.y4C(this.Ca4e, "u-btn2-2-dis")
        }
    };
    b4f.bHw0x = function(bjs4w) {
        if (bjs4w) {
            a3x.y4C(this.Ca4e, "u-btn2-2-dis")
        } else {
            this.Yy1x()
        }
    };
    b4f.bHF0x = function(d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.bVC4G()) {
            l4p.hi7b({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(U4Y) {
                    if (U4Y == "ok") {
                        this.z4D("forceclose", {});
                        this.bu5z();
                        h4l.z4D(m4q.pJ0x, "shareclose", {})
                    }
                }.g4k(this)
            })
        } else {
            this.z4D("forceclose", {});
            this.bu5z();
            h4l.z4D(m4q.pJ0x, "shareclose", {})
        }
    };
    b4f.Gc5h = function(el6f, dT6N) {
        this.pb0x.Bg4k(el6f, dT6N)
    };
    b4f.Yc1x = function(u4y) {
        this.hf7Y.fu6o("page", {
            type: u4y
        })
    };
    b4f.GG6A = function() {
        return this.ey6s == 39
    };
    b4f.L4P = function() {
        var bVA4E = function(p4t, r4v) {
            var ch5m = "u-slg-" + dY6S[r4v] + "-gray";
            !this.bbi2x[bhF4J[r4v]] ? a3x.y4C(p4t, ch5m) : a3x.x4B(p4t, ch5m)
        };
        return function() {
            K4O.L4P.call(this);
            this.n4r.style.display = "";
            this.cf5k();
            this.cO5T(!1);
            this.BL4P.UF0x(0);
            this.ev6p.focus();
            this.ev6p.value = this.bWf4j || "";
            this.ev6p.placeholder = this.bWe4i || "";
            if (!this.GG6A()) {
                this.bVD4H()
            } else {
                a3x.y4C(this.pn0x, "info-video");
                a3x.dI6C(this.pn0x, "m-xwgt-share-videobar", {
                    title: this.OZ8R,
                    picUrl: this.bhT4X
                })
            }
            this.gk7d();
            this.wz2x.bYz5E();
            k4o.bd4h(this.Zs1x, bVA4E, this);
            this.mh9Y();
            if (this.CD4H) {
                this.rg0x.style.display = "none"
            } else {
                this.rg0x.style.display = ""
            }
            this.Yy1x()
        }
    }();
    b4f.bu5z = function(d4h) {
        K4O.bu5z.call(this); !! this.hl7e && this.hl7e.bu5z();
        if (this.wz2x) {
            this.wz2x.T4X();
            delete this.wz2x
        }
        if (this.hA7t) {
            this.hA7t.T4X();
            delete this.hA7t
        }
        if (this.oC9t) {
            this.oC9t.T4X();
            delete this.oC9t
        }
        if (this.bHm0x) {
            this.bHm0x = this.bHm0x.T4X()
        }
        if (this.ms9j) {
            this.ms9j.T4X();
            delete this.ms9j
        }
    };
    l4p.lj8b = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var u4y = bWl4p[e4i.resourceType],
                bV5a = e4i.resourceJson,
                hW7P;
            if (k4o.fG7z(bV5a)) {
                try {
                    bV5a = JSON.parse(bV5a)
                } catch (e) {}
            }
            if (u4y) {
                hW7P = l4p.bNV1x(u4y, bV5a);
                e4i.name = hW7P.title;
                e4i.author = hW7P.author;
                e4i.picUrl = hW7P.picUrl;
                e4i.type = u4y;
                e4i.rid = (bV5a || []).id
            }
        }
        m4q.pJ0x.L4P(e4i)
    };
    I4M.fJ7C.A4E({
        element: m4q.pJ0x,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    m4q.XV1x = NEJ.C();
    b4f = m4q.XV1x.O4S(m4q.en6h);
    K4O = m4q.XV1x.cs5x;
    b4f.cx5C = function() {
        this.cD5I()
    };
    b4f.bW5b = function() {
        this.cg5l();
        var i4m = a3x.H4L(this.n4r, "j-flag");
        h4l.s4w(i4m[0], "click", this.Ev5A.g4k(this))
    };
    b4f.ce5j = function() {
        this.cd5i = "m-import-ok"
    };
    b4f.bl5q = function(e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bm5r(e4i)
    };
    b4f.bD5I = function() {
        this.bG5L()
    };
    b4f.Ev5A = function(d4h) {
        this.bu5z();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b4f.BH4L = function() {
        this.bu5z()
    };
    b4f.bLl1x = function(d4h) {
        if (d4h.keyCode == 13) this.FK5P()
    }
})();
(function() {
    var c4g = NEJ.P,
        bb4f = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        N4R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        m4q = c4g("nm.l"),
        w4A = c4g("nm.w"),
        bC5H = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f, K4O;
    m4q.bHl0x = NEJ.C();
    b4f = m4q.bHl0x.O4S(m4q.en6h);
    b4f.ce5j = function() {
        this.cd5i = "m-programtips-layer"
    };
    b4f.bW5b = function() {
        this.cg5l();
        this.bU5Z = a3x.H4L(this.n4r, "j-flag")
    };
    b4f.bl5q = function(e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm5r(e4i);
        this.gY7R = e4i.id;
        this.bVx4B = e4i.radiotype;
        this.lB9s = location.protocol + "//" + (this.bjE4I() || "music.163.com") + "/m/" + this.bVx4B + "?id=" + this.gY7R;
        this.bVw4A()
    };
    b4f.bD5I = function() {
        this.bG5L()
    };
    b4f.BH4L = function() {
        this.bu5z()
    };
    b4f.Ev5A = function(d4h) {
        this.z4D("onok", D4H);
        this.bu5z()
    };
    l4p.bHk0x = function(e4i) {
        m4q.bHl0x.A4E(e4i).L4P()
    };
    b4f.bVw4A = function() {
        v4z.bn5s("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.cE5J({
                url: this.lB9s,
                size: 180
            }),
            onload: function(j4n) {
                if (j4n.code == 200) {
                    this.bVs4w(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g4k(this)
        })
    };
    b4f.bjE4I = function() {
        var Rl9c = location.host;
        if (Rl9c.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b4f.bVs4w = function(jJ8B) {
        this.bU5Z[0].style.backgroundImage = "url(" + jJ8B + ")"
    }
})();
(function() {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        dv6p = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        E4I = c4g("nm.m"),
        m4q = c4g("nm.l"),
        M4Q = c4g("nm.m.f"),
        b4f, K4O;
    E4I.de5j = NEJ.C();
    b4f = E4I.de5j.O4S(I4M.dx6r);
    b4f.bL5Q = function() {
        var qQ0x = !1;
        return function() {
            if (qQ0x) return;
            qQ0x = !0;
            this.bR5W();
            if (top == self) {
                return
            }
            this.tx1x = a3x.B4F("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bHi0x()
            }
            I4M.fJ7C.A4E({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX5c([
                [window, "scroll", this.BA4E.g4k(this)],
                [document, "keyup", this.bVo4s.g4k(this)],
                [document.body, "click", this.sW1x.g4k(this)],
                [document, "mouseup", this.bVn4r.g4k(this)],
                [this.tx1x, "click", this.Tx9o.g4k(this)],
                [q4u.to1x, "message", this.uy2x.g4k(this)]
            ]);
            l4p.cdK6E(document.body);
            this.BA4E();
            if (this.Bz4D !== false && typeof GUser !== "undefined" && GUser.userId > 0) q4u.to1x.gr7k().uI2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dv6p.ds6m.browser == "ie" && parseInt(dv6p.ds6m.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hc7V = top.player.getPlaying();
                    if (hc7V && hc7V.track && hc7V.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hc7V.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.ze3x.g4k(this);
            this.km8e = q4u.hR7K.A4E();
            window.log = this.md9U.g4k(this);
            var sx1x = location.search;
            if (sx1x) {
                var bv5A = sx1x.substr(sx1x.indexOf("?") + 1),
                    gw7p = k4o.hv7o(bv5A);
                if (gw7p && gw7p["_hash"]) location.hash = gw7p["_hash"]
            }
        }
    }();
    b4f.bVo4s = function(d4h) {
        var f4j = h4l.W4a(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bOe1x() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0) return;
            h4l.z4D(top.document, "keyup", {
                ctrlKey: d4h.ctrlKey,
                keyCode: d4h.keyCode
            })
        } catch (e) {}
    };
    b4f.sW1x = function(d4h) {
        var f4j = h4l.W4a(d4h);
        if (f4j && f4j.tagName == "INPUT") return;
        var f4j = h4l.W4a(d4h, "d:pid");
        if (f4j) {
            h4l.cp5u(d4h);
            var pk0x = a3x.t4x(f4j, "pid"),
                Bv4z = a3x.t4x(f4j, "ptype"),
                U4Y = a3x.t4x(f4j, "action") || "play";
            switch (U4Y) {
                case "subscribe":
                    l4p.mq9h({
                        tracks: [pk0x]
                    });
                    break
            }
        }
        f4j = h4l.W4a(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cT5Y = a3x.t4x(f4j, "resId"),
                u4y = a3x.t4x(f4j, "resType"),
                bjU4Y = a3x.t4x(f4j, "resRadiotype"),
                bjV4Z = a3x.t4x(f4j, "resRadioid"),
                ea6U = a3x.t4x(f4j, "resFrom"),
                j4n = a3x.t4x(f4j, "resData"),
                U4Y = a3x.t4x(f4j, "resAction"),
                buU7N = a3x.t4x(f4j, "resCopyright"),
                WB0x = a3x.t4x(f4j, "resAuditstatus");
            if (U4Y != "log" && U4Y != "bilog") h4l.cp5u(d4h);
            switch (U4Y) {
                case "log":
                    j4n = (j4n || "").split("|");
                    if ( !! j4n[0]) {
                        var bg4k = {
                            id: cT5Y,
                            alg: j4n[2] || "itembased",
                            scene: j4n[3],
                            position: j4n[1] || 0
                        };
                        if ( !! j4n[4]) bg4k.srcid = j4n[4];
                        window.log(j4n[0], bg4k)
                    }
                    break;
                case "bilog":
                    var bvt7m = a3x.t4x(f4j, "logAction"),
                        bvw7p = a3x.t4x(f4j, "logJson");
                    window.log(bvt7m, bvw7p);
                    break;
                case "share":
                    if (WB0x && WB0x == 1) {
                        l4p.ir8j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cT5Y, u4y, a3x.t4x(f4j, "resPic"), a3x.t4x(f4j, "resName"), a3x.t4x(f4j, "resAuthor"), a3x.t4x(f4j, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (u4y == 18) {
                        var rd0x = a3x.t4x(f4j, "resLevel"),
                            rY0x = a3x.t4x(f4j, "resFee");
                        if (rd0x == 10) {
                            l4p.tW2x(rY0x, cT5Y, "song");
                            break
                        }
                        l4p.mq9h({
                            tracks: [cT5Y]
                        })
                    }
                    break;
                case "download":
                    l4p.JU7N({
                        id: cT5Y,
                        type: u4y
                    });
                    break;
                case "programtips":
                    if (WB0x && WB0x == 1) {
                        l4p.ir8j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l4p.bHk0x({
                            id: bjV4Z,
                            radiotype: bjU4Y
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {}
    };
    b4f.bVn4r = function(d4h) {
        try {
            h4l.z4D(top.document, "mouseup")
        } catch (e) {}
    };
    b4f.BA4E = function() {
        var bVm4q = function() {
            var ci5n = window.innerHeight;
            if (!k4o.wg2x(ci5n)) ci5n = (document.documentElement || document.body).clientHeight;
            return ci5n
        };
        return function(d4h) {
            if (!this.tx1x) return;
            var Wy0x = bVm4q(),
                gj7c = document.documentElement.scrollTop || document.body.scrollTop;
            a3x.ba4e(this.tx1x, "display", gj7c > 0 ? "" : "none");
            if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0") {
                var gx7q = Math.min(document.body.clientHeight, Wy0x + gj7c) - 204;
                a3x.ba4e(this.tx1x, "top", gx7q + "px")
            }
        }
    }();
    b4f.Tx9o = function(d4h) {
        h4l.cp5u(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b4f.ze3x = function() {
        var bka4e = function(d4h) {
            h4l.z4D(window, "share", d4h)
        };
        return function(cT5Y, u4y, zp4t, V4Z, Fw5B, Fr5w) {
            l4p.lj8b({
                rid: cT5Y,
                type: u4y,
                purl: zp4t,
                name: V4Z,
                author: Fw5B,
                authors: Fr5w,
                onshare: bka4e.g4k(this)
            })
        }
    }();
    b4f.md9U = function(U4Y, bg4k) {
        try {
            top.log(U4Y, bg4k)
        } catch (e) {
            if (U4Y.indexOf("new|") == 0) {
                return this.km8e.fu6o(U4Y.slice(4), bg4k)
            }
            switch (U4Y) {
                case "play":
                    this.km8e.ej6d(bg4k);
                    break;
                case "search":
                    this.km8e.bRn3x(bg4k);
                    break;
                default:
                    this.km8e.fu6o(U4Y, bg4k)
            }
        }
    };
    b4f.bHi0x = function() {
        var Wp0x, bkf4j = false,
            br5w = [45, 60];
        var bVl4p = function(bH5M) {
            if (bH5M.title != "MailBoxImport") return;
            var Q4U = JSON.parse(bH5M.content || "null") || bb4f;
            if (Q4U.status == 10) {
                m4q.XV1x.A4E().L4P();
                window.clearTimeout(Wp0x)
            }
        };
        var ss1x = function(d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(q4u.BK4O, "message", bVl4p.g4k(this));
                    q4u.BK4O.A4E().bfk3x();
                    bkf4j = true
                } else {
                    if (bkf4j) {
                        if (d4h.status == 10) {
                            m4q.XV1x.A4E().L4P();
                            h4l.hd7W(q4u.BK4O, "message");
                            window.clearTimeout(Wp0x);
                            bkf4j = false
                        }
                    } else {
                        window.clearTimeout(Wp0x)
                    }
                }
            }
        };
        return function() {
            var tJ1x = br5w.shift() * 1e3;
            v4z.bn5s("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: ss1x.g4k(this)
            });
            if (tJ1x) {
                Wp0x = window.setTimeout(arguments.callee, tJ1x)
            }
        }
    }();
    b4f.uy2x = function(d4h) {
        try {
            top.polling(d4h)
        } catch (e) {}
    }
})()