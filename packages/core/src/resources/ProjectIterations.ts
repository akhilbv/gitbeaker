import type { BaseResourceOptions } from '@gitbeaker/requester-utils';

import type {
  GitlabAPIResponse,
  PaginationRequestOptions,
  PaginationTypes,
  ShowExpanded,
  Sudo,
} from '../infrastructure';
import { ResourceIterations } from '../templates';
import type { AllIterationsOptions, IterationSchema } from '../templates/ResourceIterations';

export interface ProjectIterations<C extends boolean = false> {
  all<E extends boolean = false, P extends PaginationTypes = 'offset'>(
    projectId: string | number,
    options?: AllIterationsOptions & Sudo & ShowExpanded<E> & PaginationRequestOptions<P>,
  ): Promise<GitlabAPIResponse<IterationSchema[], C, E, P>>;
}

export class ProjectIterations<C extends boolean = false> extends ResourceIterations<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('project', options);
  }
}
