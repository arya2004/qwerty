import {
  PostCreated as PostCreatedEvent,
  PostUpdated as PostUpdatedEvent
} from "../generated/Blog/Blog"
import { PostCreated, PostUpdated } from "../generated/schema"

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Blog_id = event.params.id
  entity.title = event.params.title
  entity.hash = event.params.hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostUpdated(event: PostUpdatedEvent): void {
  let entity = new PostUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Blog_id = event.params.id
  entity.title = event.params.title
  entity.hash = event.params.hash
  entity.published = event.params.published

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
