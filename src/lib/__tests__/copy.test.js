import { describe, it, expect, vi } from 'vitest'
import { cn } from '../utils.js'
import { downloadSource } from '../copy.js'

describe('utils', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('resolves conflicting Tailwind utilities', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2')
  })

  it('handles conditional classes', () => {
    expect(cn('foo', { bar: true })).toBe('foo bar')
  })

  it('omits falsy conditional classes', () => {
    expect(cn('foo', { bar: false })).toBe('foo')
  })

  it('accepts arrays', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz')
  })

  it('handles mixed input types', () => {
    expect(cn('foo', undefined, null, false, 'bar', 0, '')).toBe('foo bar')
  })
})

describe('downloadSource', () => {
  it('is a function', () => {
    expect(typeof downloadSource).toBe('function')
  })

  it('creates and triggers a blob download', () => {
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test')
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    const click = vi.fn()
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(click)
    const appendChild = vi.spyOn(document.body, 'appendChild').mockReturnValue(document.createElement('a'))
    const removeChild = vi.spyOn(document.body, 'removeChild').mockImplementation(() => {})

    downloadSource('export const foo = 1', 'foo.js')
    expect(createObjectURL).toHaveBeenCalledWith(expect.any(Blob))
    expect(click).toHaveBeenCalled()
    expect(appendChild).toHaveBeenCalled()

    createObjectURL.mockRestore()
    revokeObjectURL.mockRestore()
    click.mockRestore()
    appendChild.mockRestore()
    removeChild.mockRestore()
  })
})