back to [README](README.md)

# Sample GraphQL Queries
It can take a bit of getting used to so here are some straigtforward samples to get you started.

## View all songs
```graphql
query {
  songs {
    title,
    versions {
      name
    }
    album {
      title
    }
    yearReleased {
      year
    }
  }
}
```

## View all songs where TayTay is not credited as main Singer
```graphql
query {
  songs(
    where: {
      singersConnection_ALL: { node: { name_NOT: "Taylor Swift" } }
    }
  ) {
    title
  }
}
```

## View all collabs and order them by most streamed
```graphql
query {
  songs(
    where: {
      OR: [
        { singersAggregate: { count_GT: 1 } }
        { featuresAggregate: { count_GTE: 1 } }
      ]
    },
    options: {sort: {monthlyPlays: DESC}},
  ) {
    title
    singers {
      name
    }
    features {
      name
    }
    monthlyPlays
  }
}
```

## How many times has 'Bad Blood' been played?
```graphql
query {
  songs(where: { title: "Bad Blood" }) {
    title
    monthlyPlays
  }
}
```
Hmmm ... 2 results ... we can explain that ...
```graphql
query {
  songs(where: { title: "Bad Blood" }) {
    title
    versions {
      name
    }
    monthlyPlays
  }
}
```

### Run built-in custom query to collate multiple versions of the same song
```graphql
query {
  monthlyPlaysForSong(params: {title: "Bad Blood"}) {
    title
    totalPlays
    versionCount

    # if you want to see the version breakdown; uncomment the following selection set
    #playBreakdown {
    #  version
    #  playCount
    #}
  }
}
```

## Bad Blood playouts for Jun & Aug (excl Jul)
```graphql
query {
  songs(where: { title: "Bad Blood" }) {
    title
    allPlaysAggregate(where: { month_IN: ["June", "August"] }) {
      edge {
        totalPlays {
          sum
        }
      }
    }
  }
}
```
Again 2 separate results ... but at least we now know what that means.


back to [README](README.md)