import { reverse } from '../reverse'

describe('services/ reverse', () => {
    it('should handle correct case 1', () => {
        const para = { a: 1 }
        expect(reverse(para)).toEqual({ '1': 'a' })
    })

    it('should handle correct case 2', () => {
        const para = {
            hired: {
                be: {
                    to: {
                        deserve: 'I',
                    },
                },
            },
        }
        expect(reverse(para)).toEqual({
            I: { deserve: { to: { be: 'hired' } } },
        })
    })

    it('should handle correct case 3', () => {
        const para = { a: { b: { c: { d: { e: 'f' } } } } }
        expect(reverse(para)).toEqual({
            f: { e: { d: { c: { b: 'a' } } } },
        })
    })

    it('should return empty object when parameter is Number', () => {
        const para = 3
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when parameter is String', () => {
        const para = '123'
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when parameter is Boolean(true)', () => {
        const para = true
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when parameter is Boolean(false)', () => {
        const para = false
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when parameter is Array', () => {
        const para = ['hired', 'be']
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when key value is multiple key value pair', () => {
        const para = {
            hired: {
                be: {
                    to: {
                        deserve: 'I',
                    },
                },
                be2: 'I',
            },
        }
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when last key value is empty Object', () => {
        const para = {
            hired: {
                be: {
                    to: {
                        deserve: {},
                    },
                },
            },
        }
        expect(reverse(para)).toEqual({})
    })

    it('should return empty object when last key value is empty String', () => {
        const para = {
            hired: {
                be: {
                    to: {
                        deserve: '',
                    },
                },
            },
        }
        expect(reverse(para)).toEqual({})
    })
})
