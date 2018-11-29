import React from 'react'
import { ProjectCard } from '../../../assets/javascripts/kitten/components/cards/project-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example
        title="Project card"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          progress={42}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          scoreValue="A"
          coloredInfosValues
          tagLists={[
            {
              items: [
                { key: 'tag-1', item: 'Tag 1' },
                { key: 'tag-2', item: 'Tag 2' },
              ],
            },
            {
              icon: 'InstrumentTagIcon',
              items: [
                { key: 'tag-3', item: 'Tag 3' },
                { key: 'tag-4', item: 'Tag 4' },
              ],
            },
          ]}
        />
      </Example>
      <Example
        title="Project card with reversed infos"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          progress={42}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          scoreValue="A"
          coloredInfosValues
          tagLists={[
            { key: 'tag-5', item: 'Tag 5' },
            { key: 'tag-6', item: 'Tag 6' },
          ]}
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
        />
      </Example>
      <Example
        title="Clickable project card"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          linkHref="#"
          progress={42}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          tooltipText="Lorem ipsum…"
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
        />
      </Example>
      <Example
        title="Project card with status"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          progress={42}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          statusContent="Status"
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
        />
      </Example>
      <Example
        title="Project card without progress"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
        />
      </Example>
      <Example
        title="Disabled project card"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          progress={42}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          disabled
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
        />
      </Example>
      <Example
        title="Project card with success status"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          progress={100}
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          statusContent="Status"
          info1={{ value: 'xx', text: 'Info 1', reverse: true }}
          info2={{ value: 'xx', text: 'Info 2', reverse: true }}
          info3={{ value: 'xx', text: 'Info 3', reverse: true }}
          progressColor="#61d079"
        />
      </Example>
      <Example
        title="Only paragraph project card"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <ProjectCard
          linkHref="#"
          ownerAvatarSrc="https://placehold.it/400x200/caf4fe/caf4fe"
          imageSrc="https://placehold.it/500x500/caf4fe/caf4fe"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          statusContent="Status"
          statusPrimaryBackground
        />
      </Example>
    </div>
  )
}
