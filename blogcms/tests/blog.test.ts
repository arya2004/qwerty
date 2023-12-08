import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { PostCreated } from "../generated/schema"
import { PostCreated as PostCreatedEvent } from "../generated/Blog/Blog"
import { handlePostCreated } from "../src/blog"
import { createPostCreatedEvent } from "./blog-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let title = "Example string value"
    let hash = "Example string value"
    let newPostCreatedEvent = createPostCreatedEvent(id, title, hash)
    handlePostCreated(newPostCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PostCreated created and stored", () => {
    assert.entityCount("PostCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "PostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
