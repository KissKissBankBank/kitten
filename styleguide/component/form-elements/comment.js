import React from 'react'
import { KarlComment, KarlCommentForm } from 'kitten/karl/form/comment'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--10">
        <KarlCommentForm />
      </div>
      <div className="k-Grid__col k-Grid__col--10">
        <KarlComment />
      </div>
    </div>
  )
}
