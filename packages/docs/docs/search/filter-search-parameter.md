# The _filter Search Parameter

The `_filter` parameter extends FHIR's search functionality by allowing you to narrow down your results using complex filter expressions. It is a useful way to filter resources in a way that may not be easily achieveable using standard parameters.

Some of the key features of the `_filter` parameter include: 

- Filtering with logical expressions
- Filtering within filters
- Chaining elements to filter on more specific details of a resource

## Filter Operators

The `_filter` parameter has several operators that allow you to make comparisons on the values you would like to filter by. These are defijned in the table below.

| Operation         | Value                                            | Description                                                                                                                                                            | Example Expression |
| ----------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| eq                | equals                                           | Filters for items that are equal to the value provided.                                                                                                                | Patient: given eq 'homer' |
| ne                | does not equal                                   | Filters for items that are not equal to the value provided.                                                                                                            | Patient: given ne 'marge' |
| co                | contains                                         | Filters for items that contain the value provided.                                                                                                                     | Pateint: name co ;sim' |
| sw                | starts with                                      | Filters for items that start with the value provided.                                                                                                                  | Patient: address-city sw 'Lon' | 
| ew                | ends with                                        | Filters for items that end with the value provided.                                                                                                                    | Patient: address-city ew 'don' |
| gt / lt / ge / le | greater/less than, greater/less than or equal to | Filters for items that are greater than (gt), less than (lt), greater than or equal to (ge), or less than or equal to (le) the value provided.                         | Patient: birthdate ge 1996-06-06 / Patient: birthdate le 1996-06-06 |
| ap                | approximate                                      | Filters for items that are approximately equal to the provided value. The default value is 10%, but you may reconfigure your system to other values if you would like. | Observation:  |
| sa                | starts after                                     | Filters for items that start after the value provided. Most useful when filtering for dates or time periods.                                                           |
| eb                | ends before                                      | Filters for items that end before the value provided. Most useful when filtering for dates or time periods.                                                            |
| pr                | property exists                                  | Filters for items that contain or do not contain the specified field. Can be set to either `true` or `false`.                                                          |
| po                | period overlaps                                  | Filters for items that have a date period that overlaps with the provided value.                                                                                       |
| ss                | subsumes                                         | Filters for items that subsume the provided value. This is useful to filter for codes that are broader in scope than the one you provide.                              |
| sb                | subsumed                                         | Filters for items that are subsumed by the provided value. This is useful to filter for codes that are more narrow in scope than the one you provide.                  |
| in                | in                                               | Filters for items that are within a provided value set.                                                                                                                |
| ni                | not in                                           | Filters for items that are not within a provided value set.                                                                                                            |
| re                | references                                       | Filters for items that reference the provided URL.                                                                                                                     |

## Filter Syntax

Since you must use filter operators, the syntax for filter expressions is a little different than the syntax used for other search parameters. Rather than setting the `_filter` parameter equal to the value you want to filter, you must set it to a filter expression. 

Note that your FHIR server may not support every possible filter expression. If you find one of these is not working, you may want to check your server configuration to see if what you are trying to do is allowed.
