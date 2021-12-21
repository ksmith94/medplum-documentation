/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Condition } from './Condition';
import { Coverage } from './Coverage';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage
 * information to an insurer for them to respond, in the form of an
 * CoverageEligibilityResponse, with information regarding whether the
 * stated coverage is valid and in-force and optionally to provide the
 * insurance details of the policy.
 */
export interface CoverageEligibilityRequest {

  /**
   * This is a CoverageEligibilityRequest resource
   */
  readonly resourceType: 'CoverageEligibilityRequest';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  readonly identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  readonly status?: string;

  /**
   * When the requestor expects the processor to complete processing.
   */
  readonly priority?: CodeableConcept;

  /**
   * Code to specify whether requesting: prior authorization requirements
   * for some service categories or billing codes; benefits for coverages
   * specified or discovered; discovery and return of coverages for the
   * patient; and/or validation that the specified coverage is in-force at
   * the date/period specified or 'now' if not specified.
   */
  readonly purpose?: string[];

  /**
   * The party who is the beneficiary of the supplied coverage and for whom
   * eligibility is sought.
   */
  readonly patient?: Reference<Patient>;

  /**
   * The date or dates when the enclosed suite of services were performed
   * or completed.
   */
  readonly servicedDate?: string;

  /**
   * The date or dates when the enclosed suite of services were performed
   * or completed.
   */
  readonly servicedPeriod?: Period;

  /**
   * The date when this resource was created.
   */
  readonly created?: string;

  /**
   * Person who created the request.
   */
  readonly enterer?: Reference<Practitioner | PractitionerRole>;

  /**
   * The provider which is responsible for the request.
   */
  readonly provider?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * The Insurer who issued the coverage in question and is the recipient
   * of the request.
   */
  readonly insurer?: Reference<Organization>;

  /**
   * Facility where the services are intended to be provided.
   */
  readonly facility?: Reference<Location>;

  /**
   * Additional information codes regarding exceptions, special
   * considerations, the condition, situation, prior or concurrent issues.
   */
  readonly supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  /**
   * Financial instruments for reimbursement for the health care products
   * and services.
   */
  readonly insurance?: CoverageEligibilityRequestInsurance[];

  /**
   * Service categories or billable services for which benefit details
   * and/or an authorization prior to service delivery may be required by
   * the payor.
   */
  readonly item?: CoverageEligibilityRequestItem[];
}

/**
 * Financial instruments for reimbursement for the health care products
 * and services.
 */
export interface CoverageEligibilityRequestInsurance {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A flag to indicate that this Coverage is to be used for evaluation of
   * this request when set to true.
   */
  readonly focal?: boolean;

  /**
   * Reference to the insurance card level information contained in the
   * Coverage resource. The coverage issuing insurer will use these details
   * to locate the patient's actual coverage within the insurer's
   * information system.
   */
  readonly coverage?: Reference<Coverage>;

  /**
   * A business agreement number established between the provider and the
   * insurer for special business processing purposes.
   */
  readonly businessArrangement?: string;
}

/**
 * Service categories or billable services for which benefit details
 * and/or an authorization prior to service delivery may be required by
 * the payor.
 */
export interface CoverageEligibilityRequestItem {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Exceptions, special conditions and supporting information applicable
   * for this service or product line.
   */
  readonly supportingInfoSequence?: number[];

  /**
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  readonly category?: CodeableConcept;

  /**
   * This contains the product, service, drug or other billing code for the
   * item.
   */
  readonly productOrService?: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  readonly modifier?: CodeableConcept[];

  /**
   * The practitioner who is responsible for the product or service to be
   * rendered to the patient.
   */
  readonly provider?: Reference<Practitioner | PractitionerRole>;

  /**
   * The number of repetitions of a service or product.
   */
  readonly quantity?: Quantity;

  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  readonly unitPrice?: Money;

  /**
   * Facility where the services will be provided.
   */
  readonly facility?: Reference<Location | Organization>;

  /**
   * Patient diagnosis for which care is sought.
   */
  readonly diagnosis?: CoverageEligibilityRequestItemDiagnosis[];

  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  readonly detail?: Reference<Resource>[];
}

/**
 * Patient diagnosis for which care is sought.
 */
export interface CoverageEligibilityRequestItemDiagnosis {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  readonly diagnosisCodeableConcept?: CodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  readonly diagnosisReference?: Reference<Condition>;
}

/**
 * Additional information codes regarding exceptions, special
 * considerations, the condition, situation, prior or concurrent issues.
 */
export interface CoverageEligibilityRequestSupportingInfo {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A number to uniquely identify supporting information entries.
   */
  readonly sequence?: number;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  readonly information?: Reference<Resource>;

  /**
   * The supporting materials are applicable for all detail items,
   * product/servce categories and specific billing codes.
   */
  readonly appliesToAll?: boolean;
}