import { IntersectionObserverClass } from './intersection-observer'

const LazyObserver = new IntersectionObserverClass({
  rootMargin: '100px 0px',
  threshold: 0.5,
})

export default LazyObserver
