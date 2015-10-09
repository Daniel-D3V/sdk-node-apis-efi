## Creating subscriptions

If you ever have to recurrently charge your clients, you can create a different kind of charge, one that belongs to a subscription. This way, subsequent charges will be automatically created based on plan configuration and the charge value is charged in your customers' credit card, or the banking billet is generated and sent to costumer, accoding to plan’s configuration.

The plan configuration receive two params, that are repeats and interval:

The `repeats` parameter defines how many times the transaction will be repeated. If you don't provide it, the subscription will create charges indefinitely.

The `interval` parameter defines the interval, in months, that a charge has to be generated. The minimum value is 1, and the maximum is 24.

It's worth to mention that this mechanics is triggered only if the customer commits the subscription. In other words, it takes effect when the customer pays the first charge.

At last, it boils down to creating a plan and then the subscription. The plan can be reused for generating other subscriptions:

```js
var planBody = {
  name: 'My first plan',
  repeats: 24,
  interval: 2
}

var subscriptionBody = {
  items: [{
    name: 'Product 1',
    value: 1000,
    amount: 2
  }]
}

var createSubscription = function (response) {
  var params = {
    id: response.data.plan_id
  }

  return gerencianet
    .createSubscription(params, subscriptionBody);
}

gerencianet
  .createPlan({}, planBody)
  .then(createSubscription)
  .then(console.log)
  .catch(console.log)
  .done();
```

### Deleting a plan:
*(works just for plans that doesn't have a subscription associated):*

```js
var params = {
  id: 1001
}

gerencianet
  .deletePlan(params)
  .then(console.log)
  .catch(console.log)
  .done();
```

### Canceling subscriptions

You can cancel active subscriptions at any time:

```js
var params = {
  id: 18
}

gerencianet
  .cancelSubscription(params)
  .then(console.log)
  .catch(console.log)
  .done();
```

```js
{
  "code": 200
}
```
