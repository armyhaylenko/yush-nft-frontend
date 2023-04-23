import {request} from 'graphql-request';

const ENDPOINT = 'https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql';

/**
 * Read GraphQL query from file
 * @param {string} filename - Name of query file
 * @returns {string} - The contents of the query file
 */
/**
 * Execute GraphQL query
 * @param {string} query - The GraphQL query string
 * @param {object} [variables] - Optional variables to be used in the query
 * @returns {Promise<object>} - A promise that resolves with the query result or rejects with an error
 */
export async function executeQuery(query: string, variables?: Record<string, any>): Promise<any> {
    try {
        return await request(ENDPOINT, query, variables);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to execute GraphQL query');
    }
}

// Kateryna Yushchenko
const DEFAULT_COLLECTION : string = "d1e534aee3f87d3521be0da10c3930be0c954175e783565601f1f3f1be6a50a0"

export interface NFT {
    "name": string,
    "owner_address": string,
    "token_data_id_hash": string,
    "property_version": number,
    "amount": number,
    "collection_data_id_hash": string,
    "collection_name": string
}
interface Data {
    "current_token_ownerships_aggregate": {
        "aggregate": {
            "count": number
        }
    },
    "current_token_ownerships": NFT[]
}
 export async function toBeSoldOf(collection: string = DEFAULT_COLLECTION,
                                 limit: number = 10,
                                 offset: number = 0): Promise<Data> {
     const query = `query ToBeSoldOfCollection(
    $_resource: String = "0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309",
    $_main: String = "0x0bdd921fa9b94f0621cd5370b4f54f1f675cc31aeb6f6a69900ac54c0fae4982",
    $collection: String = "d1e534aee3f87d3521be0da10c3930be0c954175e783565601f1f3f1be6a50a0",
    $limit: Int = 10,
    $offset: Int = 0) {

    current_token_ownerships_aggregate(
        where: {
            owner_address: {_eq: $_main},
            creator_address: {_eq: $_resource},
            collection_data_id_hash: {_eq: $collection}
        }
    ) {
        aggregate {
            count
        }
    }
    current_token_ownerships(
        where: {
            owner_address: {_eq: $_main},
            creator_address: {_eq: $_resource},
            collection_data_id_hash: {_eq: $collection}
        }
        order_by: {last_transaction_version: desc}
        limit: $limit
        offset: $offset
    ) {
        name
        owner_address
        token_data_id_hash
        amount
        property_version
    }
}`
     const variables = {
         "collection": collection,
         "limit": limit,
         "offset": offset,
     }
     return await executeQuery(query, variables) as Data;
 }

 export async function mintedCount(): Promise<number> {
    const query = `query MintedCount($_resource: String = "0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309") {
  token_activities_aggregate(where: {creator_address: {_eq: $_resource}, transfer_type: {_eq: "0x3::token::MintTokenEvent"}}) {
    aggregate {
      count
    }
  }
}`
     const data = await executeQuery(query);
     return data.token_activities_aggregate.aggregate.count;
 }

 interface Collection {
     "collection_data_id_hash": string,
     "collection_name": string,
     "description": string
 }

 export async function collections(limit: number = 10,
                                   offset: number = 0): Promise<Collection[]> {
    const query = `query Collections($_resource: String = "0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309", $limit: Int = 10, $offset: Int = 0) {
  current_collection_datas(
    where: {creator_address: {_eq: $_resource}}
    order_by: {last_transaction_timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    collection_data_id_hash
    collection_name
    description
  }
}`
     const variables = {
         "limit": limit,
         "offset": offset,
     }
     return await executeQuery(query, variables) as Collection[];
 }




