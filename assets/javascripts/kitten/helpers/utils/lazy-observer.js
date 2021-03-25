import { IntersectionObserverClass } from './intersection-observer'

const LazyObserver = new IntersectionObserverClass({
  root: null,
  rootMargin: '100px 0px',
  threshold: 0.1,
})

export default LazyObserver
