import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ease } from '../utils/animations'

export function Reveal({ children, className = '', delay = 0, panel = false }: { children: ReactNode; className?: string; delay?: number; panel?: boolean }) {
  return <motion.div className={className} initial={panel ? { y: '12%', scale: 1.06 } : { opacity: 0, y: 48, filter: 'blur(10px)' }} whileInView={panel ? { y: 0, scale: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: panel ? 1.2 : 0.9, delay, ease }}>{children}</motion.div>
}

function words(node: ReactNode, counter: { value: number }): ReactNode {
  if (typeof node === 'string') return node.split(/(\s+)/).map((part, i) => part.trim() ? <motion.span key={`${part}-${i}-${counter.value}`} className="word-reveal" initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: counter.value++ * 0.045, ease }}>{part}</motion.span> : part)
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>
    return cloneElement(element, { ...element.props, children: Children.map(element.props.children, child => words(child, counter)) })
  }
  return node
}

export function WordReveal({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'h1' | 'h2' | 'blockquote' | 'div' }) {
  const MotionTag = motion.create(Tag)
  return <MotionTag className={className}>{words(children, { value: 0 })}</MotionTag>
}
