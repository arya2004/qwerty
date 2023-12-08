import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { PostCreated, PostUpdated } from "../generated/Blog/Blog"

export function createPostCreatedEvent(
  id: BigInt,
  title: string,
  hash: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromString(hash))
  )

  return postCreatedEvent
}

export function createPostUpdatedEvent(
  id: BigInt,
  title: string,
  hash: string,
  published: boolean
): PostUpdated {
  let postUpdatedEvent = changetype<PostUpdated>(newMockEvent())

  postUpdatedEvent.parameters = new Array()

  postUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postUpdatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  postUpdatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromString(hash))
  )
  postUpdatedEvent.parameters.push(
    new ethereum.EventParam("published", ethereum.Value.fromBoolean(published))
  )

  return postUpdatedEvent
}
