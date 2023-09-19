import MedplumCodeBlock from '@site/src/components/MedplumCodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ExampleCode from '!!raw-loader!@site/..//examples/src/search/special-search-parameters.ts';

# Special Search Parameters

The FHIR search framework allows for special search parameters that enable more complex searches to fine-tune your results. In this document, we will go over the following special parameters:

- [_id](#id)
- [_lastUpdated](#lastupdated)
- [_summary](#summary)
- [_elements](#elements)
- [_tag](#tag)
- [compartments](#compartments)
- [_total](#total)
- [_profile](#profile)

## _id

The `_id` parameter allows you to search for any resource based on its `id` field. 

<details><summary>Example: Searching for a patient by _id</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="idTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="idCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="idCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

## _lastUpdated

The `_lastUpdated` parameter allows you to search for resources based on when their most recent changes were. This is most useful when combined with comparision operators, such as `gt` (greater than) or `lt` (less than) to find resources that have or have not been changed since a certain time or date. 

<details><summary>Example: Searching for threads that have not had any activity since the beginning of the year</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="lastUpdatedTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="lastUpdatedCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="lastUpdatedCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

## _summary

The `_summary` parameter allows you to return only a portion of a resources elements. It follows the below value set:

| Value | Description                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------ |
| true  | Only returns elements that are marked as `summary` in the resource definition.                                     |
| text  | Returns the `text`, `id`, and `meta` elements, along with any top-level mandatory elements for the given resource. |
| data  | Returns the `id`, `meta`, and any top-level mandatory elements for the given resource.                             |
| count | Returns the count of matching resources, but none of the actual resource details for those matches.                |
| false | Returns all of the elements for the resource. It does not return a summary.                                        |

<details><summary>Example: Searching for a summary of a patient</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="summaryTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="summaryCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="summaryCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

<details><summary>Example Response</summary>
  <MedplumCodeBlock language="bash" selectBlocks="summaryResponse">
    {ExampleCode}
  </MedplumCodeBlock>
</details>

## _elements

The `_elements` parameter is similar to `_summary` in that it allows you to return only a subset of the resource's elements. However, rather than a predefined value set, `_elements` allows you to choose which fields you would like to return. The fields you choose should be formatted as a comma-separated list of base elements for a given resource. Note that any mandatory or modifier elements should always be included in the chosen list of elements. 

<details><summary>Example: Searching for a summary of a patient</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="elementsTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="elementsCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="elementsCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

<details><summary>Example Response</summary>
  <MedplumCodeBlock language="bash" selectBlocks="elementsResponse">
    {ExampleCode}
  </MedplumCodeBlock>
</details>

## _tag

The `_tag` parameter allows you to search on the `tag` field of the `meta` element of the resource you are searching for. The `tag` field contains user-defined tags to categorize the resource.

<details><summary>Example: Searching by tags</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="tagTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="tagCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="tagCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

## Compartments

## _total

When searching in FHIR, a `Bundle` is returned, not the actual resource you searched for. On a `Bundle`, there is an `total` element, which indicates the total number of resources that match your search parameters. Providing the exact number of matching resources can be onerous on the server, so the `_total` parameter is provided to potentially assist with this. There are three options that you can provide for the `_total` parameter.

| Value    | Description                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| none     | The `total` field will not be populated on the response `Bundle`.                     |
| estimate | The response `Bundle` will have a rough estimate of the number of matching resources. |
| accurate | The response `Bundle` will have the exact number of matching resources.               |

:::note Note
When searching in Medplum, the function `searchResources` is provided. This function unwraps the response bundle of your search results and returns an array of the resources that match your parameters. Since you will not receive a bundle, the `_total` parameter is not relevant when using this function.
:::

<details><summary>Example: Get an estimate of the number of patients in your organization</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="totalTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="totalCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="totalCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

## _profile

Similar to the `_tag` parameter, `_profile` allows you to search on the resource's meta data. In this case, you are searching on the `profile` field of the `meta` element for a given resource. The `_profile` parameter is a reference parameter, meaning you may provide a reference as an argument to the parameter.

<details><summary>Example: Search for observations profiled as pediatric growth charts</summary>
  <Tabs groupId="language">
    <TabItem value="ts" label="Typescript">
      <MedplumCodeBlock language="ts" selectBlocks="profileTs">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="cli" label="CLI">
      <MedplumCodeBlock language="bash" selectBlocks="profileCli">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
    <TabItem value="curl" label="cURL">
      <MedplumCodeBlock language="bash" selectBlocks="profileCurl">
        {ExampleCode}
      </MedplumCodeBlock>
    </TabItem>
  </Tabs>
</details>

## _filter

The `_filter` parameter can be used to filter for more complex queries. For more details see the [_filter Search Parameter docs](/docs/search/filter-search-parameter).

## _sort

The `_sort` parameter allows you to sort the results of your search. For details on how to use the `_sort` parameter, see the [Sorting the Results docs](/docs/search/basic-search#sorting-the-results).
