import { getRequest } from "@/server/getRequest"
import { API } from "../../../../hooks"
import { CreatorType } from "@/@types/CreatorType"
import { CustomImage, Heading, Text } from "@/components"
import { CustomSingleCreator } from "../../../../components"

const SingleCreatorPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  
  try {
    const creator: CreatorType = await getRequest(`/user/${id}`)

    if (!creator) {
      return (
        <section className="text-center py-20">
          <Heading tag="h2">Creator not found</Heading>
        </section>
      )
    }

    return <CustomSingleCreator creator={creator} />
  } catch (error) {
    return (
      <section className="text-center py-20">
        <Heading tag="h2">Error loading creator</Heading>
        <Text classList="text-red-500 mt-2">Please try again later</Text>
      </section>
    )
  }
}
export default SingleCreatorPage