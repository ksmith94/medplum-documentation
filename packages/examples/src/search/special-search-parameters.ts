// start-block imports
import { MedplumClient } from '@medplum/core';
import { Patient } from '@medplum/fhirtypes';

// end-block imports

const medplum = new MedplumClient();

// start-block idTs
await medplum.searchResources('Patient', {
  _id: 'homer-simpson',
});
// end-block idTs

/*
// start-block idCli
medplum get 'Patient?_id=homer-simpson'
// end-block idCli

// start-block idCurl
curl 'https://api.medplum.com/fhir/R4/Patient?_id=homer-simpson' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \
// end-block idCurl
*/

// start-block lastUpdatedTs
await medplum.searchResources('Communication', {
  'part-of:missing': true,
  _lastUpdated: 'lt2023-01-01',
});
// end-block lastUpdatedTs

/*
// start-block lastUpdatedCli
medplum get 'Communication?part-of:missing=true&_lastUpdated=lt2023-01-01'
// end-block lastUpdatedCli

// start-block lastUpdatedCurl
curl 'https://api.medplum.com/fhir/R4/Communication?part-of:missing=true&_lastUpdated=lt2023-01-01' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \
// end-block lastUpdatedCurl
*/

// start-block summaryTs
await medplum.searchResources('Patient', {
  _id: 'homer-simpson',
  _summary: true,
});
// end-block summaryTs

/*
// start-block summaryCli
medplum get Patient?_id=homer-simpson&_summary=true
// end-block summaryCli

// start-block summaryCurl
curl 'https://api.medplum.com/fhir/R4/Patient?_id=homer-simpson&_summary=true' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \
// end-block summaryCurl
*/

const summaryResponse: Patient =
// start-block summaryResponse
{
  resourceType: 'Patient',
  identifier: [
    {
      use: 'official',
      system: 'https://example-hospital.org',
      value: 'patient-1',
    },
  ],
  active: true,
  name: [
    {
      family: 'Simpson',
      given: ['Homer', 'Jay'],
    },
  ],
  gender: 'male',
  birthDate: '1956-05-12',
  deceasedBoolean: false,
  address: [
    {
      use: 'home',
      type: 'physical',
      line: ['742 Evergreen Terrace'],
      city: 'Springfield',
    },
  ],
  managingOrganization: {
    reference: 'Organization/example-hospital',
  },
  link: [
    {
      type: 'refer',
    },
  ],
};
// end-block summaryResponse

// start-block elementsTs
await medplum.searchResources('Patient', {
  _elements: 'name,gender',
});
// end-block elementsTs

/*
// start-block elementsCli
medplum get 'Patient?_elements=name,gender'
// end-block elementsCli

// start-block elementsCurl
curl 'https://api.medplum.com/fhir/R4/Patient?_element=name,gender' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \ 
// end-block elementsCurl
*/

const elementsResponse: Patient[] =
// start-block elementsResponse
[
  {
    resourceType: 'Patient',
    name: [
      {
        family: 'Simpson',
        given: ['Homer', 'Jay'],
      },
    ],
    gender: 'male',
  },
  {
    resourceType: 'Patient',
    name: [
      {
        family: 'Simpson',
        given: ['Marge', 'Jacqueline']
      },
    ],
    gender: 'female',
  },
];
// end-block elementsResponse

// start-block tagTs
await medplum.searchResources('Observation', {
  _tag: 'https://example.org/tags|critical',
});
// end-block tagTs

/*
// start-block tagCli
medplum get 'Observation?_tag=https://example.org/tags|critical'
// end-block tagCli

// start-block tagCurl
curl 'https://api.medplum.com/fhir/R4/Observation?_tag=https://example.org/tags|critical' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \ 
// end-block tagCurl
*/

// start-block totalTs
await medplum.search('Patient', {
  _total: 'estimate',
});
// end-block totalTs

/*
// start-block totalCli
medplum get 'Patient?_total=estimate'
// end-block totalCli

// start-block totalCurl
curl 'https://api.medplum.com/fhir/R4/Patient?_total=estimate' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \ 
// end-block totalCurl
*/

// start-block profileTs
await medplum.searchResources('Observation', {
  _profile: 'https://example.org/StructureDefinition/pediatric-growth-chart'
});
// end-block profileTs

/*
// start-block profileCli
medplum get 'Observation?_profile=https://example.org/StructureDefinition/pediatric-growth-chart'
// end-block profileCli

// start-block profileCurl
curl 'https://api.medplum.com/fhir/R4/Observation?_profile=https://example.org/StructureDefinition/pediatric-growth-chart' \
	-H 'authorization: Bearer $ACCESS_TOKEN' \
  -H 'content-type: application/fhir+json' \ 
// end-block profileCurl
*/

console.log(summaryResponse, elementsResponse);
