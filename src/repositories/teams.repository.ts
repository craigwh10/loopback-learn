import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Dslb4DataSource} from '../datasources';
import {Teams, TeamsRelations} from '../models';

export class TeamsRepository extends DefaultCrudRepository<
  Teams,
  typeof Teams.prototype.id,
  TeamsRelations
> {
  constructor(
    @inject('datasources.dslb4') dataSource: Dslb4DataSource,
  ) {
    super(Teams, dataSource);
  }
}
